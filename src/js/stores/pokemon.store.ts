import { BehaviorSubjectSvelteStore } from 'classes/BehaviorSubjectSvelteStore';
import type { Pokemon } from 'models/pokemon.model';
import type { PokemonWithMove } from 'models/pokemonWithMove.model';
import { getPokemons } from 'services/pokemon.service';

const ALL_POKEMONS = new BehaviorSubjectSvelteStore<Pokemon[]>([]);
const ALL_POKEMONS_WITH_MOVE = new BehaviorSubjectSvelteStore<PokemonWithMove[]>([]);

getPokemons().then((result) => {
  ALL_POKEMONS.set(result);
  ALL_POKEMONS_WITH_MOVE.set(result.flatMap((p) => p.FastMoves.map((m) => ({ Pokemon: p, Move: m } as PokemonWithMove))));
});

export { ALL_POKEMONS, ALL_POKEMONS_WITH_MOVE };
