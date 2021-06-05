import type { Pokemon } from './pokemon.model';
import type { PokemonChargedMove } from './pokemonChargedMove.model';
import type { PokemonFastMove } from './pokemonFastMove.model';

export interface PokemonWithMove {
  Pokemon: Pokemon;
  Move: PokemonFastMove | PokemonChargedMove;
}
