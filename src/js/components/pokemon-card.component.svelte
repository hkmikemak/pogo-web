<script lang="ts">
  import type { Pokemon } from 'models/pokemon.model';

  import { createEventDispatcher } from 'svelte';
  import { getImageUrl, formatForm } from '../services/pokemon.service';
  import { Tooltip } from 'sveltestrap';

  import PokemonTypes from './pokemon-types.component.svelte';

  const dispatch = createEventDispatcher();

  export let pokemon: Pokemon;
  export let showType = true;

  $: h5_id = `h5-${Math.floor(Date.now())}-${pokemon.Id}-${pokemon.Form}`;
  $: h6_id = `h6-${Math.floor(Date.now())}-${pokemon.Id}-${pokemon.Form}`;
  $: form = formatForm(pokemon);
  $: image = getImageUrl(pokemon);
</script>

{#if pokemon}
  <div class="card text-white bg-secondary" on:click={() => dispatch('click', pokemon)}>
    <img class="card-img-top" alt={pokemon.Name} loading="lazy" src={image} />
    <div class="p-1">
      <h5 class="card-title text-oneliner" id={h5_id}>{pokemon.Name}</h5>
      <Tooltip target={h5_id} placement="top">{pokemon.Name}</Tooltip>
    </div>
    <h6 class="p-1 card-subtitle mb-2 text-muted d-flex flex-row">
      <span class="flex-grow-1">#{pokemon.Id.toString().padStart(3, '0')}</span>
      <span class="text-oneliner" id={h6_id}>{form}</span>
      <Tooltip target={h6_id} placement="top">{form}</Tooltip>
    </h6>
    <div class="d-flex align-items-center p-1">
      <span class="flex-grow-1">💥</span>
      <span class="text-oneliner">{pokemon.MaxCP}</span>
    </div>
    <div class="d-flex align-items-center p-1 justify-content-around">
      <div class="d-flex flex-column flex-sm-row">
        <span>🗡️</span>
        <span>{pokemon.BaseStats.Attack}</span>
      </div>
      <div class="d-flex flex-column flex-sm-row">
        <span>🛡️</span>
        <span>{pokemon.BaseStats.Defense}</span>
      </div>
      <div class="d-flex flex-column flex-sm-row">
        <span>💖</span>
        <span>{pokemon.BaseStats.Stamina}</span>
      </div>
    </div>
    {#if showType}
      <PokemonTypes types={pokemon.Types} />
    {/if}
  </div>
{/if}
