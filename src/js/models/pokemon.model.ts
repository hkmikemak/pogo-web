import type { PokemonChargedMove } from './pokemonChargedMove.model';
import type { PokemonFastMove } from './pokemonFastMove.model';

export interface Pokemon {
  Id: number;
  Name: string;
  Types: string[];
  BaseStats: {
    Attack: number;
    Defense: number;
    Stamina: number;
  };
  MaxCP: number;
  FastMoves: PokemonFastMove[];
  ChargedMoves: PokemonChargedMove[];
  EliteFastMoves: PokemonFastMove[];
  EliteChargedMoves: PokemonChargedMove[];
  Form: string;
  Evolutions: Array<
    Array<{
      Id: number;
      Name: string;
      Form: string;
    }>
  >;
}
