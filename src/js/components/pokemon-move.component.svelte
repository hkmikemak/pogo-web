<script lang="ts">
  import type { PokemonChargedMove } from 'models/pokemonChargedMove.model';
  import type { PokemonFastMove } from 'models/pokemonFastMove.model';

  import PokemonTypes from './pokemon-types.component.svelte';

  export let move: PokemonChargedMove | PokemonFastMove;
</script>

<div class="d-flex flex-row align-items-center">
  <span class="text-oneliner pe-2">{move.Name}</span>
  <div class="flex-grow-1 flex-shrink-1 flex-basis-0">
    <PokemonTypes types={[move.Type]} />
  </div>
</div>
