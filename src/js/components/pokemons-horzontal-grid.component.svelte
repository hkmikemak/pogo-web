<script lang="ts">
  import type { Pokemon } from 'models/pokemon.model';
  import { onDestroy, onMount } from 'svelte';
  import PokemonCard from './pokemon-card.component.svelte';

  const PAGE_SIZE = 10;

  export let sources: Pokemon[];
  export let showType = true;

  let loadingElement: HTMLDivElement;
  let displayPokemons: Pokemon[];
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
      <PokemonCard {pokemon} {showType} />
    {/each}
  {/if}
  <div bind:this={loadingElement}>&nbsp;</div>
</div>
