import { POKEMON_TYPES, POKEMON_TYPES_COMBINATIONS, POKEMON_TYPE_EFFECTIVENESSES } from '../consts/pokemonTypes';
import type { Pokemon } from 'models/pokemon.model';
import type { PokemonFastMove } from 'models/pokemonFastMove.model';
import type { PokemonChargedMove } from 'models/pokemonChargedMove.model';
import type { PokemonWithMove } from 'models/pokemonWithMove.model';

const toCamalCase: (str: string) => string = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

const getPokemons: () => Promise<Pokemon[]> = () => {
  return fetch('./data/pokemons.json').then((response) => response.json() as Promise<Pokemon[]>);
};

const buildFilterFunction: (token: string) => (p: Pokemon) => boolean = (token) => {
  if (POKEMON_TYPES.some((i) => i.toLocaleLowerCase() == token)) {
    const typeToSearch = toCamalCase(token);
    return (a) => a.Types.includes(typeToSearch);
  }

  if (token.startsWith('@1')) {
    const typeToSearch = toCamalCase(token.slice(2));

    if (typeToSearch) return (a) => a.FastMoves.some((f) => f.Type == typeToSearch);
    else return () => true;
  }

  if (token.startsWith('@2')) {
    const typeToSearch = toCamalCase(token.slice(2));
    if (typeToSearch) return (a) => a.ChargedMoves.some((f) => f.Type == typeToSearch);
    else return () => true;
  }

  if (token.startsWith('@')) {
    const typeToSearch = toCamalCase(token.slice(1));
    if (typeToSearch) return (a) => a.FastMoves.some((f) => f.Type == typeToSearch) || a.ChargedMoves.some((f) => f.Type == typeToSearch);
    else return () => true;
  }

  if (token.startsWith('+')) {
    const pokemontoSearch = token.slice(1).toLocaleLowerCase();

    if (pokemontoSearch)
      return (a) => a.Evolutions.some((chain) => chain.some((element) => element.Name.toLocaleLowerCase().includes(pokemontoSearch)));
    else () => true;
  }

  if (!isNaN(Number(token))) {
    const no = Number(token);
    return (a) => a.Id == no;
  }

  return (a) => a.Name.toLocaleLowerCase().includes(token);
};

const filterPokemons: (items: Pokemon[], filter: string) => Pokemon[] = (items, filter) => {
  const sources = [...items];
  if (filter && filter.length) {
    const tokens = filter
      .toLocaleLowerCase()
      .split(' ')
      .map((t) => t.trim())
      .filter((t) => t.length);
    return tokens.map((t) => buildFilterFunction(t)).reduce((result, func) => result.filter(func), sources);
  } else {
    return sources;
  }
};

const groupByPokemon: (items: Pokemon[]) => Array<{ Types: string[]; Pokemons: Pokemon[] }> = (items) => {
  const result = new Array<{ Types: string[]; Pokemons: Pokemon[] }>();

  POKEMON_TYPES_COMBINATIONS.forEach((type) => {
    const filteredPokemon = items.filter((i) => i.Types.length === type.length && i.Types.every((j) => type.includes(j)));
    if (filteredPokemon.length) {
      result.push({ Types: type, Pokemons: filteredPokemon });
    }
  });

  return result;
};

const formatForm: (pokemon: Pokemon) => string = (pokemon) => {
  if (pokemon.Form === 'Normal') {
    return '';
  } else {
    return pokemon.Form;
  }
};

const getImageUrl: (pokemon: Pokemon) => string = (pokemon) => {
  const form = formatForm(pokemon);
  const id = pokemon.Id.toString().padStart(3, '0');
  if (!form && !form.length) {
    return `./img/pokemons/${id}.webp`;
  } else {
    return `./img/pokemons/${id}-${form.toLocaleLowerCase()}.webp`;
  }
};

const calculateNumberOfMovesToKill: (attackPokemon: Pokemon, attackMove: PokemonFastMove | PokemonChargedMove, defensePokemon: Pokemon) => number = (
  attackPokemon,
  attackMove,
  defensePokemon
) => {
  const typeEffect = [...POKEMON_TYPE_EFFECTIVENESSES].filter(
    (i) =>
      i.MoveType == attackMove.Type &&
      i.DefenseTypes.length == defensePokemon.Types.length &&
      i.DefenseTypes.every((j) => defensePokemon.Types.includes(j))
  );
  const typeMultiplier = typeEffect[0].Effectiveness;
  const sameTypeBonusMultiplier = attackPokemon.Types.includes(attackMove.Type) ? 1.2 : 1;
  const damage =
    Math.floor(
      ((0.5 * attackMove.Power * attackPokemon.BaseStats.Attack) / defensePokemon.BaseStats.Defense) * sameTypeBonusMultiplier * typeMultiplier
    ) + 1;
  const noOfMoveTakenTilDeath = defensePokemon.BaseStats.Stamina / damage;
  return noOfMoveTakenTilDeath;
};

const sortByDamage: (pokemonWithMoves: PokemonWithMove[], defensePokemon: Pokemon) => PokemonWithMove[] = (pokemonWithMoves, defensePokemon) => {
  return pokemonWithMoves.sort(
    (a, b) => calculateNumberOfMovesToKill(a.Pokemon, a.Move, defensePokemon) - calculateNumberOfMovesToKill(b.Pokemon, b.Move, defensePokemon)
  );
};

const sortBySurvival: (attackPokemonWithMove: PokemonWithMove, defensePokemons: Pokemon[]) => Pokemon[] = (
  attackPokemonWithMove,
  defensePokemons
) => {
  return defensePokemons.sort(
    (a, b) =>
      -(
        calculateNumberOfMovesToKill(attackPokemonWithMove.Pokemon, attackPokemonWithMove.Move, a) -
        calculateNumberOfMovesToKill(attackPokemonWithMove.Pokemon, attackPokemonWithMove.Move, b)
      )
  );
};

export { getPokemons, filterPokemons, groupByPokemon, formatForm, getImageUrl, calculateNumberOfMovesToKill, sortBySurvival, sortByDamage };
