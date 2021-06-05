import type { Pokemon } from '../models/pokemon.model';

const SORT_BY_ID: (a: Pokemon, b: Pokemon) => number = (a, b) => a.Id - b.Id;
const SORT_BY_NAME: (a: Pokemon, b: Pokemon) => number = (a, b) => a.Name.localeCompare(b.Name);
const SORT_BY_ATTACK: (a: Pokemon, b: Pokemon) => number = (a, b) => -(a.BaseStats.Attack - b.BaseStats.Attack);
const SORT_BY_DEFENSE: (a: Pokemon, b: Pokemon) => number = (a, b) => -(a.BaseStats.Defense - b.BaseStats.Defense);
const SORT_BY_STAMINA: (a: Pokemon, b: Pokemon) => number = (a, b) => -(a.BaseStats.Stamina - b.BaseStats.Stamina);
const SORT_BY_CP: (a: Pokemon, b: Pokemon) => number = (a, b) => -(a.MaxCP - b.MaxCP);

export { SORT_BY_ID, SORT_BY_CP, SORT_BY_NAME, SORT_BY_ATTACK, SORT_BY_DEFENSE, SORT_BY_STAMINA };
