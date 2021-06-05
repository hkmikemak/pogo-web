<script lang="ts">
  import type { Pokemon } from 'models/pokemon.model';
  import type { PokemonChargedMove } from 'models/pokemonChargedMove.model';
  import type { PokemonFastMove } from 'models/pokemonFastMove.model';
  import type { PokemonWithMove } from 'models/pokemonWithMove.model';

  import { ALL_POKEMONS, ALL_POKEMONS_WITH_MOVE } from '../stores/pokemon.store';

  import { Modal, ModalBody, ModalHeader } from 'sveltestrap';
  import { debounceTime, distinctUntilChanged, map, share, switchMap, tap } from 'rxjs/operators';
  import { filterPokemons, sortBySurvival, sortByDamage, getImageUrl } from '../services/pokemon.service';
  import { of, Subscription, Observable, Subject, ReplaySubject } from 'rxjs';
  import { onMount, onDestroy } from 'svelte';
  import PokemonTypes from '../components/pokemon-types.component.svelte';

  import PokemonCard from '../components/pokemon-card.component.svelte';
  import PokemonMove from '../components/pokemon-move.component.svelte';
  import PokemonsHorzontalGrid from '../components/pokemons-horzontal-grid.component.svelte';
  import PokemonWithMoveHorzontalGrid from '../components/pokemonwithmove-horzontal-grid.component.svelte';

  // CONFIG
  const DEBOUNCE_TIME = 1000;

  // SOURCE DATA
  // let ALL_POKEMONS: Pokemon[];
  // let ALL_POKEMONS_WITH_MOVE: PokemonWithMove[];

  // ALL UI Element, and their observable
  let searchBox: Subject<Event> = new Subject<Event>();
  let searchBox$: Observable<string>;

  let selectedPokemon: Subject<Pokemon> = new Subject<Pokemon>();
  let selectedPokemon$: Observable<Pokemon>;

  // Actual Values / Flags
  let open = false;
  let searchPokemons: Pokemon[];

  let selectedPokemonValue: Pokemon;
  let selectedPokemonValueImageUrl: string;

  $: selectedPokemonValueImageUrl = selectedPokemonValue ? getImageUrl(selectedPokemonValue) : './img/icons/manifest-icon-192.png';

  let defenseFastMoveGroups: Array<{ Move: PokemonFastMove | PokemonChargedMove; Pokemons: Pokemon[] }>;
  let attackPokemonWithMoves: Array<PokemonWithMove>;

  // Subscription
  let subscriptions: Subscription[] = [];

  const toggle = () => (open = !open);

  onMount(async () => {
    // ALL_POKEMONS = await getPokemons();
    // ALL_POKEMONS_WITH_MOVE = ALL_POKEMONS.flatMap((p) => p.FastMoves.map((m) => ({ Pokemon: p, Move: m } as PokemonWithMove)));

    // Handle Pokemon selector
    searchBox$ = searchBox.pipe(
      debounceTime(DEBOUNCE_TIME),
      distinctUntilChanged(),
      map((e) => (e.target as HTMLInputElement).value)
      // startWith('')
    );

    subscriptions.push(
      searchBox$.pipe(switchMap((i) => of(filterPokemons($ALL_POKEMONS, i)))).subscribe((v) => {
        searchPokemons = v;
      })
    );

    // Handle selected pokemons

    selectedPokemon$ = selectedPokemon.pipe(
      tap((i) => {
        selectedPokemonValue = i;
      }),
      share({ connector: () => new ReplaySubject() })
    );

    // Handle defense pokemons
    subscriptions.push(
      selectedPokemon$
        .pipe(
          map((i) => i.FastMoves.map((j) => ({ Pokemon: i, Move: j } as PokemonWithMove))),
          switchMap((i) =>
            of(
              i.map((j) => ({
                Move: j.Move,
                Pokemons: sortBySurvival(j, [...$ALL_POKEMONS])
              }))
            )
          )
        )
        .subscribe((i) => {
          defenseFastMoveGroups = i;
        })
    );

    subscriptions.push(
      selectedPokemon$.pipe(switchMap((i) => of(sortByDamage([...$ALL_POKEMONS_WITH_MOVE], i)))).subscribe((i) => {
        attackPokemonWithMoves = i;
      })
    );
  });

  onDestroy(() => {
    subscriptions.forEach((i) => {
      i.unsubscribe();
    });
  });
</script>

<Modal isOpen={open} {toggle} fullscreen={true}>
  <ModalHeader {toggle}>Select a pokémon</ModalHeader>
  <ModalBody>
    <div class="d-flex flex-column overflow-x-hidden overflow-y-hidden">
      <div class="input-group input-group-sm">
        <span class="input-group-text">🔍</span>
        <input
          class="form-control"
          type="search"
          placeholder="Search"
          on:input={(e) => {
            searchBox.next(e);
          }}
        />
      </div>
      <div class="overflow-y-auto overflow-x-hidden">
        <div class="flex-grow-1 flex-shrink-1 flex-basis-0 overflow-y-auto pogo-grid p-1">
          {#if searchPokemons}
            {#each searchPokemons as pokemon}
              <PokemonCard
                {pokemon}
                on:click={() => {
                  selectedPokemon.next(pokemon);
                  toggle();
                }}
              />
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </ModalBody>
  <!-- <ModalFooter>
    <Button color="secondary" on:click={toggle}>Cancel</Button>
  </ModalFooter> -->
</Modal>

<div class="p-1 d-flex flex-row align-items-center bg-primary text-white pogo-toolbar">
  <img alt="" class="img-thumbnail" on:click={toggle} src={selectedPokemonValueImageUrl} />
  {#if selectedPokemonValue}
    <div class="ms-2 d-flex flex-column align-items-start">
      <div><span class="fw-bolder">#{selectedPokemonValue.Id.toString().padStart(3, '0')}</span>&nbsp;{selectedPokemonValue.Name}</div>
      <div>💥&nbsp;{selectedPokemonValue.MaxCP}</div>
    </div>
    <div class="ms-2 d-flex flex-column align-items-start">
      <div>
        <span>🗡️&nbsp;{selectedPokemonValue.BaseStats.Attack}</span>
        <span>🛡️&nbsp;{selectedPokemonValue.BaseStats.Defense}</span>
        <span>💖&nbsp;{selectedPokemonValue.BaseStats.Stamina}</span>
      </div>
      <PokemonTypes types={selectedPokemonValue.Types} />
    </div>
  {/if}
</div>
<div class="overflow-x-hidden overflow-y-auto">
  {#if defenseFastMoveGroups}
    <h4 class="mt-3">Defense against fast moves</h4>
    {#each defenseFastMoveGroups as defenseFastMoveGroup}
      <div class="mt-3">
        <PokemonMove move={defenseFastMoveGroup.Move} />
      </div>
      <PokemonsHorzontalGrid sources={defenseFastMoveGroup.Pokemons} />
    {/each}
  {/if}

  {#if attackPokemonWithMoves}
    <h4 class="mt-3">Attacks</h4>
    <PokemonWithMoveHorzontalGrid sources={attackPokemonWithMoves} />
  {/if}
</div>
