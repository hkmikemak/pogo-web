<script lang="ts">
  import { ALL_POKEMONS } from 'stores/pokemon.store';
  import type { Pokemon } from 'models/pokemon.model';
  import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap, tap } from 'rxjs/operators';
  import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'sveltestrap';
  import { filterPokemons, groupByPokemon } from '../services/pokemon.service';
  import { SORT_BY_ID, SORT_BY_CP, SORT_BY_NAME, SORT_BY_ATTACK, SORT_BY_DEFENSE, SORT_BY_STAMINA } from '../consts/pokemonSortingFunctions';
  import { of, fromEvent, Subscription, Observable, combineLatest, Subject } from 'rxjs';
  import { onMount, onDestroy } from 'svelte';
  import PokemonTypes from '../components/pokemon-types.component.svelte';
  import PokemonsGrid from '../components/pokemons-grid.component.svelte';
  import PokemonsHorzontalGrid from '../components/pokemons-horzontal-grid.component.svelte';

  // CONFIG
  const DEBOUNCE_TIME = 1000;

  // SOURCE DATA
  // let ALL_POKEMONS: Pokemon[];

  // ALL UI Element, and their observable
  let sortPokemon: Subject<string>;
  let sortPokemon$: Observable<(a: Pokemon, b: Pokemon) => number>;
  let searchBox: HTMLInputElement;
  let searchBox$: Observable<string>;
  let groupByTypeBox: HTMLInputElement;
  let groupByTypeBox$: Observable<boolean>;

  // Actual Values / Flags
  let groupByTypeValue: boolean;

  let pokemons: Pokemon[];
  let pokemonsByTypes: Array<{ Types: string[]; Pokemons: Pokemon[] }>;

  // Subscription
  let subscription: Subscription;

  onMount(async () => {
    // ALL_POKEMONS = await getPokemons();

    // Initialize observable
    sortPokemon = new Subject<string>();
    sortPokemon$ = sortPokemon.asObservable().pipe(
      debounceTime(DEBOUNCE_TIME),
      distinctUntilChanged(),
      startWith('Id'),
      map((v) => {
        switch (v) {
          case 'Attack':
            return SORT_BY_ATTACK;
          case 'CP':
            return SORT_BY_CP;
          case 'Defense':
            return SORT_BY_DEFENSE;
          case 'Name':
            return SORT_BY_NAME;
          case 'Stamina':
            return SORT_BY_STAMINA;
          default:
            return SORT_BY_ID;
        }
      }),
      startWith(SORT_BY_ID)
    );
    searchBox$ = fromEvent(searchBox, 'input').pipe(
      debounceTime(DEBOUNCE_TIME),
      distinctUntilChanged(),
      map((e) => (e.target as HTMLInputElement).value),
      startWith('')
    );
    groupByTypeBox$ = fromEvent(groupByTypeBox, 'input').pipe(
      debounceTime(DEBOUNCE_TIME),
      distinctUntilChanged(),
      map((e) => (e.target as HTMLInputElement).checked),
      startWith(false),
      tap((v) => {
        groupByTypeValue = v;
      })
    );

    let pokemons$ = combineLatest({ ALL_POKEMONS, sortPokemon$, searchBox$ }).pipe(
      switchMap((i) => of(filterPokemons(i.ALL_POKEMONS, i.searchBox$).sort(i.sortPokemon$))),
      tap((i) => {
        pokemons = i;
      })
    );

    subscription = combineLatest({ pokemons$, groupByTypeBox$ })
      .pipe(
        filter((i) => i.groupByTypeBox$),
        switchMap((i) => of(groupByPokemon(i.pokemons$)))
      )
      .subscribe((value) => {
        pokemonsByTypes = value;
      });
  });

  onDestroy(() => {
    subscription.unsubscribe();
  });
</script>

<div class="navbar navbar-dark bg-primary">
  <div class="container-fluid">
    <div class="input-group input-group-sm">
      <span class="input-group-text">🔍</span>
      <input class="form-control" type="search" placeholder="Search" bind:this={searchBox} />
    </div>
    <div class="w-100 pt-1 d-flex flex-row align-items-center">
      <div class="flex-grow-1">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="input-groupByType" bind:this={groupByTypeBox} />
          <label class="form-check-label" for="input-groupByType"> Group by types </label>
        </div>
      </div>
      <Dropdown group size="sm">
        <DropdownToggle caret>🔽 Sort by</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Info</DropdownItem>
          <DropdownItem on:click={() => sortPokemon.next('Id')}>🆔 Number</DropdownItem>
          <DropdownItem on:click={() => sortPokemon.next('Name')}>🔤 Name</DropdownItem>
          <DropdownItem divider />
          <DropdownItem header>Power</DropdownItem>
          <DropdownItem on:click={() => sortPokemon.next('CP')}>💥 CP</DropdownItem>
          <DropdownItem on:click={() => sortPokemon.next('Attack')}>🗡️ Attack</DropdownItem>
          <DropdownItem on:click={() => sortPokemon.next('Defense')}>🛡️ Defense</DropdownItem>
          <DropdownItem on:click={() => sortPokemon.next('Stamina')}>💖 Stamina</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</div>

<div class="overflow-y-auto overflow-x-hidden">
  {#if groupByTypeValue && pokemonsByTypes}
    {#each pokemonsByTypes as group}
      <div class="flex-grow-1 flex-shrink-1 align-self-stretch pt-3">
        <PokemonTypes types={group.Types} />
        <PokemonsHorzontalGrid sources={group.Pokemons} showType={false} />
      </div>
    {/each}
  {:else}
    <PokemonsGrid sources={pokemons} />
  {/if}
</div>
