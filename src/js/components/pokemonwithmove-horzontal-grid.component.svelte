<script lang="ts">
  import type { PokemonWithMove } from 'models/pokemonWithMove.model';

  import { onDestroy, onMount } from 'svelte';

  import PokemonCard from './pokemon-card.component.svelte';
  import PokemonMove from '../components/pokemon-move.component.svelte';

  const PAGE_SIZE = 10;

  export let sources: PokemonWithMove[];

  let loadingElement: HTMLDivElement;
  let displayPokemons: PokemonWithMove[];
  let observer: IntersectionObserver;

  $: {
    if (sources) {
      displayPokemons = sources.slice(0, PAGE_SIZE);
    }
  }

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    let isIntersecting = entries.some((i) => i.isIntersecting);

    if (sources && isIntersecting && displayPokemons.length < sources.length) {
      displayPokemons = [...displayPokemons, ...sources.slice(displayPokemons.length, displayPokemons.length + PAGE_SIZE)];
    }
  };

  onMount(async () => {
    observer = new IntersectionObserver(intersectionCallback);
    observer.observe(loadingElement);
  });

  onDestroy(async () => {
    observer.unobserve(loadingElement);
  });
</script>

<div class="py-1 pogo-hor-grid">
  {#if displayPokemons}
    {#each displayPokemons as pokemon}
      <div class="d-flex flex-column">
        <PokemonMove move={pokemon.Move} />
        <PokemonCard pokemon={pokemon.Pokemon} />
      </div>
    {/each}
  {/if}
  <div bind:this={loadingElement}>&nbsp;</div>
</div>
