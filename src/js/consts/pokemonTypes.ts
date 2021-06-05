import type { TypeEffectiveness } from '../models/typeEffectiveness.model';

const POKEMON_TYPES: string[] = [
  'Bug',
  'Dark',
  'Dragon',
  'Electric',
  'Fairy',
  'Fighting',
  'Fire',
  'Flying',
  'Ghost',
  'Grass',
  'Ground',
  'Ice',
  'Normal',
  'Poison',
  'Psychic',
  'Rock',
  'Steel',
  'Water'
];

const POKEMON_TYPES_COMBINATIONS: string[][] = [
  ['Bug'],
  ['Dark'],
  ['Dragon'],
  ['Electric'],
  ['Fairy'],
  ['Fighting'],
  ['Fire'],
  ['Flying'],
  ['Ghost'],
  ['Grass'],
  ['Ground'],
  ['Ice'],
  ['Normal'],
  ['Poison'],
  ['Psychic'],
  ['Rock'],
  ['Steel'],
  ['Water'],
  ['Bug', 'Dark'],
  ['Bug', 'Dragon'],
  ['Bug', 'Electric'],
  ['Bug', 'Fairy'],
  ['Bug', 'Fighting'],
  ['Bug', 'Fire'],
  ['Bug', 'Flying'],
  ['Bug', 'Ghost'],
  ['Bug', 'Grass'],
  ['Bug', 'Ground'],
  ['Bug', 'Ice'],
  ['Bug', 'Normal'],
  ['Bug', 'Poison'],
  ['Bug', 'Psychic'],
  ['Bug', 'Rock'],
  ['Bug', 'Steel'],
  ['Bug', 'Water'],
  ['Dark', 'Dragon'],
  ['Dark', 'Electric'],
  ['Dark', 'Fairy'],
  ['Dark', 'Fighting'],
  ['Dark', 'Fire'],
  ['Dark', 'Flying'],
  ['Dark', 'Ghost'],
  ['Dark', 'Grass'],
  ['Dark', 'Ground'],
  ['Dark', 'Ice'],
  ['Dark', 'Normal'],
  ['Dark', 'Poison'],
  ['Dark', 'Psychic'],
  ['Dark', 'Rock'],
  ['Dark', 'Steel'],
  ['Dark', 'Water'],
  ['Dragon', 'Electric'],
  ['Dragon', 'Fairy'],
  ['Dragon', 'Fighting'],
  ['Dragon', 'Fire'],
  ['Dragon', 'Flying'],
  ['Dragon', 'Ghost'],
  ['Dragon', 'Grass'],
  ['Dragon', 'Ground'],
  ['Dragon', 'Ice'],
  ['Dragon', 'Normal'],
  ['Dragon', 'Poison'],
  ['Dragon', 'Psychic'],
  ['Dragon', 'Rock'],
  ['Dragon', 'Steel'],
  ['Dragon', 'Water'],
  ['Electric', 'Fairy'],
  ['Electric', 'Fighting'],
  ['Electric', 'Fire'],
  ['Electric', 'Flying'],
  ['Electric', 'Ghost'],
  ['Electric', 'Grass'],
  ['Electric', 'Ground'],
  ['Electric', 'Ice'],
  ['Electric', 'Normal'],
  ['Electric', 'Poison'],
  ['Electric', 'Psychic'],
  ['Electric', 'Rock'],
  ['Electric', 'Steel'],
  ['Electric', 'Water'],
  ['Fairy', 'Fighting'],
  ['Fairy', 'Fire'],
  ['Fairy', 'Flying'],
  ['Fairy', 'Ghost'],
  ['Fairy', 'Grass'],
  ['Fairy', 'Ground'],
  ['Fairy', 'Ice'],
  ['Fairy', 'Normal'],
  ['Fairy', 'Poison'],
  ['Fairy', 'Psychic'],
  ['Fairy', 'Rock'],
  ['Fairy', 'Steel'],
  ['Fairy', 'Water'],
  ['Fighting', 'Fire'],
  ['Fighting', 'Flying'],
  ['Fighting', 'Ghost'],
  ['Fighting', 'Grass'],
  ['Fighting', 'Ground'],
  ['Fighting', 'Ice'],
  ['Fighting', 'Normal'],
  ['Fighting', 'Poison'],
  ['Fighting', 'Psychic'],
  ['Fighting', 'Rock'],
  ['Fighting', 'Steel'],
  ['Fighting', 'Water'],
  ['Fire', 'Flying'],
  ['Fire', 'Ghost'],
  ['Fire', 'Grass'],
  ['Fire', 'Ground'],
  ['Fire', 'Ice'],
  ['Fire', 'Normal'],
  ['Fire', 'Poison'],
  ['Fire', 'Psychic'],
  ['Fire', 'Rock'],
  ['Fire', 'Steel'],
  ['Fire', 'Water'],
  ['Flying', 'Ghost'],
  ['Flying', 'Grass'],
  ['Flying', 'Ground'],
  ['Flying', 'Ice'],
  ['Flying', 'Normal'],
  ['Flying', 'Poison'],
  ['Flying', 'Psychic'],
  ['Flying', 'Rock'],
  ['Flying', 'Steel'],
  ['Flying', 'Water'],
  ['Ghost', 'Grass'],
  ['Ghost', 'Ground'],
  ['Ghost', 'Ice'],
  ['Ghost', 'Normal'],
  ['Ghost', 'Poison'],
  ['Ghost', 'Psychic'],
  ['Ghost', 'Rock'],
  ['Ghost', 'Steel'],
  ['Ghost', 'Water'],
  ['Grass', 'Ground'],
  ['Grass', 'Ice'],
  ['Grass', 'Normal'],
  ['Grass', 'Poison'],
  ['Grass', 'Psychic'],
  ['Grass', 'Rock'],
  ['Grass', 'Steel'],
  ['Grass', 'Water'],
  ['Ground', 'Ice'],
  ['Ground', 'Normal'],
  ['Ground', 'Poison'],
  ['Ground', 'Psychic'],
  ['Ground', 'Rock'],
  ['Ground', 'Steel'],
  ['Ground', 'Water'],
  ['Ice', 'Normal'],
  ['Ice', 'Poison'],
  ['Ice', 'Psychic'],
  ['Ice', 'Rock'],
  ['Ice', 'Steel'],
  ['Ice', 'Water'],
  ['Normal', 'Poison'],
  ['Normal', 'Psychic'],
  ['Normal', 'Rock'],
  ['Normal', 'Steel'],
  ['Normal', 'Water'],
  ['Poison', 'Psychic'],
  ['Poison', 'Rock'],
  ['Poison', 'Steel'],
  ['Poison', 'Water'],
  ['Psychic', 'Rock'],
  ['Psychic', 'Steel'],
  ['Psychic', 'Water'],
  ['Rock', 'Steel'],
  ['Rock', 'Water'],
  ['Steel', 'Water']
];

const POKEMON_TYPE_EFFECTIVENESSES: TypeEffectiveness[] = [
  {
    MoveType: 'Bug',
    DefenseTypes: ['Bug'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dark'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Bug', 'Dark'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Bug', 'Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Bug', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Bug', 'Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Bug', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Bug', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Bug', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Bug', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Bug', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Bug', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Bug', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Bug', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Bug', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Bug', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Bug', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Bug', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Bug', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dark', 'Dragon'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dark', 'Electric'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dark', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dark', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dark', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dark', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dark', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dark', 'Grass'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dark', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dark', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dark', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dark', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dark', 'Psychic'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dark', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dark', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dark', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dragon', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dragon', 'Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dragon', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dragon', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dragon', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dragon', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dragon', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dragon', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dragon', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dragon', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dragon', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dragon', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dragon', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dragon', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Dragon', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Electric', 'Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Electric', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Electric', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Electric', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Electric', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Electric', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Electric', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Electric', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Electric', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Electric', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Electric', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Electric', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Electric', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Electric', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fairy', 'Fighting'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fairy', 'Fire'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fairy', 'Flying'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fairy', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fairy', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fairy', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fairy', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fairy', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fairy', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fairy', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fairy', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fairy', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fairy', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fighting', 'Fire'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fighting', 'Flying'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fighting', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fighting', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fighting', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fighting', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fighting', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fighting', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fighting', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fighting', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fighting', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fighting', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fire', 'Flying'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fire', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fire', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fire', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fire', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fire', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fire', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fire', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fire', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fire', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Fire', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Flying', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Flying', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Flying', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Flying', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Flying', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Flying', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Flying', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Flying', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Flying', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Flying', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ghost', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ghost', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ghost', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ghost', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ghost', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ghost', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ghost', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ghost', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ghost', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Grass', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Grass', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Grass', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Grass', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Grass', 'Psychic'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Grass', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Grass', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Grass', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ground', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ground', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ground', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ground', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ground', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ground', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ground', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ice', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ice', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ice', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ice', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ice', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Ice', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Normal', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Normal', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Normal', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Normal', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Normal', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Poison', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Poison', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Poison', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Poison', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Psychic', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Psychic', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Psychic', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Rock', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Rock', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Bug',
    DefenseTypes: ['Steel', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Bug'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dark'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Bug', 'Dark'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Bug', 'Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Bug', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Bug', 'Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Bug', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Bug', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Bug', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Bug', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Bug', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Bug', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Bug', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Bug', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Bug', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Bug', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Bug', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Bug', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Bug', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dark', 'Dragon'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dark', 'Electric'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dark', 'Fairy'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dark', 'Fighting'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dark', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dark', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dark', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dark', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dark', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dark', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dark', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dark', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dark', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dark', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dark', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dark', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dragon', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dragon', 'Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dragon', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dragon', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dragon', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dragon', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dragon', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dragon', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dragon', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dragon', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dragon', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dragon', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dragon', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dragon', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Dragon', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Electric', 'Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Electric', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Electric', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Electric', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Electric', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Electric', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Electric', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Electric', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Electric', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Electric', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Electric', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Electric', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Electric', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Electric', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fairy', 'Fighting'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fairy', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fairy', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fairy', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fairy', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fairy', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fairy', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fairy', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fairy', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fairy', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fairy', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fairy', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fairy', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fighting', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fighting', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fighting', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fighting', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fighting', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fighting', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fighting', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fighting', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fighting', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fighting', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fighting', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fighting', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fire', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fire', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fire', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fire', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fire', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fire', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fire', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fire', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fire', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fire', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Fire', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Flying', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Flying', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Flying', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Flying', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Flying', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Flying', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Flying', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Flying', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Flying', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Flying', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ghost', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ghost', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ghost', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ghost', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ghost', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ghost', 'Psychic'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ghost', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ghost', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ghost', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Grass', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Grass', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Grass', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Grass', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Grass', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Grass', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Grass', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Grass', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ground', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ground', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ground', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ground', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ground', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ground', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ground', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ice', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ice', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ice', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ice', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ice', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Ice', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Normal', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Normal', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Normal', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Normal', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Normal', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Poison', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Poison', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Poison', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Poison', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Psychic', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Psychic', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Psychic', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Rock', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Rock', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dark',
    DefenseTypes: ['Steel', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Bug'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dragon'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fairy'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Bug', 'Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Bug', 'Dragon'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Bug', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Bug', 'Fairy'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Bug', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Bug', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Bug', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Bug', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Bug', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Bug', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Bug', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Bug', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Bug', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Bug', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Bug', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Bug', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Bug', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dark', 'Dragon'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dark', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dark', 'Fairy'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dark', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dark', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dark', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dark', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dark', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dark', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dark', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dark', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dark', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dark', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dark', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dark', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dark', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dragon', 'Electric'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dragon', 'Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dragon', 'Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dragon', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dragon', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dragon', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dragon', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dragon', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dragon', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dragon', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dragon', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dragon', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dragon', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dragon', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Dragon', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Electric', 'Fairy'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Electric', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Electric', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Electric', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Electric', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Electric', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Electric', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Electric', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Electric', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Electric', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Electric', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Electric', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Electric', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Electric', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fairy', 'Fighting'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fairy', 'Fire'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fairy', 'Flying'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fairy', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fairy', 'Grass'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fairy', 'Ground'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fairy', 'Ice'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fairy', 'Normal'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fairy', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fairy', 'Psychic'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fairy', 'Rock'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fairy', 'Steel'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fairy', 'Water'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fighting', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fighting', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fighting', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fighting', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fighting', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fighting', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fighting', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fighting', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fighting', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fighting', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fighting', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fighting', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fire', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fire', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fire', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fire', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fire', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fire', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fire', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fire', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fire', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fire', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Fire', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Flying', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Flying', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Flying', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Flying', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Flying', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Flying', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Flying', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Flying', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Flying', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Flying', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ghost', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ghost', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ghost', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ghost', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ghost', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ghost', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ghost', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ghost', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ghost', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Grass', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Grass', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Grass', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Grass', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Grass', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Grass', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Grass', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Grass', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ground', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ground', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ground', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ground', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ground', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ground', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ground', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ice', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ice', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ice', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ice', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ice', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Ice', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Normal', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Normal', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Normal', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Normal', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Normal', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Poison', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Poison', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Poison', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Poison', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Psychic', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Psychic', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Psychic', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Rock', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Rock', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Dragon',
    DefenseTypes: ['Steel', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Bug'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dragon'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Electric'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ground'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Bug', 'Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Bug', 'Dragon'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Bug', 'Electric'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Bug', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Bug', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Bug', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Bug', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Bug', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Bug', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Bug', 'Ground'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Bug', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Bug', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Bug', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Bug', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Bug', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Bug', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Bug', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dark', 'Dragon'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dark', 'Electric'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dark', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dark', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dark', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dark', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dark', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dark', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dark', 'Ground'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dark', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dark', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dark', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dark', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dark', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dark', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dark', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dragon', 'Electric'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dragon', 'Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dragon', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dragon', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dragon', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dragon', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dragon', 'Grass'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dragon', 'Ground'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dragon', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dragon', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dragon', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dragon', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dragon', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dragon', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Dragon', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Electric', 'Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Electric', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Electric', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Electric', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Electric', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Electric', 'Grass'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Electric', 'Ground'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Electric', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Electric', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Electric', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Electric', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Electric', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Electric', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Electric', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fairy', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fairy', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fairy', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fairy', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fairy', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fairy', 'Ground'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fairy', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fairy', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fairy', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fairy', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fairy', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fairy', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fairy', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fighting', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fighting', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fighting', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fighting', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fighting', 'Ground'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fighting', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fighting', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fighting', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fighting', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fighting', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fighting', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fighting', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fire', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fire', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fire', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fire', 'Ground'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fire', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fire', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fire', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fire', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fire', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fire', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Fire', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Flying', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Flying', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Flying', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Flying', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Flying', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Flying', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Flying', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Flying', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Flying', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Flying', 'Water'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ghost', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ghost', 'Ground'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ghost', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ghost', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ghost', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ghost', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ghost', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ghost', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ghost', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Grass', 'Ground'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Grass', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Grass', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Grass', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Grass', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Grass', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Grass', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Grass', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ground', 'Ice'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ground', 'Normal'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ground', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ground', 'Psychic'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ground', 'Rock'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ground', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ground', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ice', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ice', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ice', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ice', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ice', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Ice', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Normal', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Normal', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Normal', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Normal', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Normal', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Poison', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Poison', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Poison', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Poison', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Psychic', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Psychic', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Psychic', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Rock', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Rock', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Electric',
    DefenseTypes: ['Steel', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Bug'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dark'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dragon'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Bug', 'Dark'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Bug', 'Dragon'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Bug', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Bug', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Bug', 'Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Bug', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Bug', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Bug', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Bug', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Bug', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Bug', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Bug', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Bug', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Bug', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Bug', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Bug', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Bug', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dark', 'Dragon'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dark', 'Electric'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dark', 'Fairy'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dark', 'Fighting'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dark', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dark', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dark', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dark', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dark', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dark', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dark', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dark', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dark', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dark', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dark', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dark', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dragon', 'Electric'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dragon', 'Fairy'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dragon', 'Fighting'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dragon', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dragon', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dragon', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dragon', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dragon', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dragon', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dragon', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dragon', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dragon', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dragon', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dragon', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Dragon', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Electric', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Electric', 'Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Electric', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Electric', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Electric', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Electric', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Electric', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Electric', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Electric', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Electric', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Electric', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Electric', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Electric', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Electric', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fairy', 'Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fairy', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fairy', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fairy', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fairy', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fairy', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fairy', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fairy', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fairy', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fairy', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fairy', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fairy', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fairy', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fighting', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fighting', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fighting', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fighting', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fighting', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fighting', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fighting', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fighting', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fighting', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fighting', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fighting', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fighting', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fire', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fire', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fire', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fire', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fire', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fire', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fire', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fire', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fire', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fire', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Fire', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Flying', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Flying', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Flying', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Flying', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Flying', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Flying', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Flying', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Flying', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Flying', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Flying', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ghost', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ghost', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ghost', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ghost', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ghost', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ghost', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ghost', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ghost', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ghost', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Grass', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Grass', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Grass', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Grass', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Grass', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Grass', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Grass', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Grass', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ground', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ground', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ground', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ground', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ground', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ground', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ground', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ice', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ice', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ice', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ice', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ice', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Ice', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Normal', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Normal', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Normal', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Normal', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Normal', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Poison', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Poison', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Poison', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Poison', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Psychic', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Psychic', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Psychic', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Rock', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Rock', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fairy',
    DefenseTypes: ['Steel', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Bug'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dark'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Bug', 'Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Bug', 'Dragon'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Bug', 'Electric'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Bug', 'Fairy'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Bug', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Bug', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Bug', 'Flying'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Bug', 'Ghost'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Bug', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Bug', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Bug', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Bug', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Bug', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Bug', 'Psychic'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Bug', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Bug', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Bug', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dark', 'Dragon'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dark', 'Electric'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dark', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dark', 'Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dark', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dark', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dark', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dark', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dark', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dark', 'Ice'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dark', 'Normal'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dark', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dark', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dark', 'Rock'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dark', 'Steel'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dark', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dragon', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dragon', 'Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dragon', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dragon', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dragon', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dragon', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dragon', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dragon', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dragon', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dragon', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dragon', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dragon', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dragon', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dragon', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Dragon', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Electric', 'Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Electric', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Electric', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Electric', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Electric', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Electric', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Electric', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Electric', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Electric', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Electric', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Electric', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Electric', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Electric', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Electric', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fairy', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fairy', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fairy', 'Flying'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fairy', 'Ghost'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fairy', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fairy', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fairy', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fairy', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fairy', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fairy', 'Psychic'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fairy', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fairy', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fairy', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fighting', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fighting', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fighting', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fighting', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fighting', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fighting', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fighting', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fighting', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fighting', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fighting', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fighting', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fighting', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fire', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fire', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fire', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fire', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fire', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fire', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fire', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fire', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fire', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fire', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Fire', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Flying', 'Ghost'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Flying', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Flying', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Flying', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Flying', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Flying', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Flying', 'Psychic'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Flying', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Flying', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Flying', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ghost', 'Grass'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ghost', 'Ground'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ghost', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ghost', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ghost', 'Poison'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ghost', 'Psychic'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ghost', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ghost', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ghost', 'Water'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Grass', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Grass', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Grass', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Grass', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Grass', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Grass', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Grass', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Grass', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ground', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ground', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ground', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ground', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ground', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ground', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ground', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ice', 'Normal'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ice', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ice', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ice', 'Rock'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ice', 'Steel'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Ice', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Normal', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Normal', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Normal', 'Rock'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Normal', 'Steel'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Normal', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Poison', 'Psychic'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Poison', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Poison', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Poison', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Psychic', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Psychic', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Psychic', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Rock', 'Steel'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Rock', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fighting',
    DefenseTypes: ['Steel', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Bug'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dragon'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Bug', 'Dark'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Bug', 'Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Bug', 'Electric'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Bug', 'Fairy'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Bug', 'Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Bug', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Bug', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Bug', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Bug', 'Grass'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Bug', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Bug', 'Ice'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Bug', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Bug', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Bug', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Bug', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Bug', 'Steel'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Bug', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dark', 'Dragon'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dark', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dark', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dark', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dark', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dark', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dark', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dark', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dark', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dark', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dark', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dark', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dark', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dark', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dark', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dark', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dragon', 'Electric'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dragon', 'Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dragon', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dragon', 'Fire'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dragon', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dragon', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dragon', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dragon', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dragon', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dragon', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dragon', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dragon', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dragon', 'Rock'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dragon', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Dragon', 'Water'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Electric', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Electric', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Electric', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Electric', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Electric', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Electric', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Electric', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Electric', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Electric', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Electric', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Electric', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Electric', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Electric', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Electric', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fairy', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fairy', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fairy', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fairy', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fairy', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fairy', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fairy', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fairy', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fairy', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fairy', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fairy', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fairy', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fairy', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fighting', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fighting', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fighting', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fighting', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fighting', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fighting', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fighting', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fighting', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fighting', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fighting', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fighting', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fighting', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fire', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fire', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fire', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fire', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fire', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fire', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fire', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fire', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fire', 'Rock'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fire', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Fire', 'Water'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Flying', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Flying', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Flying', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Flying', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Flying', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Flying', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Flying', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Flying', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Flying', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Flying', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ghost', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ghost', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ghost', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ghost', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ghost', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ghost', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ghost', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ghost', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ghost', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Grass', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Grass', 'Ice'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Grass', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Grass', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Grass', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Grass', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Grass', 'Steel'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Grass', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ground', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ground', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ground', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ground', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ground', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ground', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ground', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ice', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ice', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ice', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ice', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ice', 'Steel'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Ice', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Normal', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Normal', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Normal', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Normal', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Normal', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Poison', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Poison', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Poison', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Poison', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Psychic', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Psychic', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Psychic', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Rock', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Rock', 'Water'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Fire',
    DefenseTypes: ['Steel', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Bug'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Electric'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Bug', 'Dark'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Bug', 'Dragon'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Bug', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Bug', 'Fairy'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Bug', 'Fighting'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Bug', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Bug', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Bug', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Bug', 'Grass'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Bug', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Bug', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Bug', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Bug', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Bug', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Bug', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Bug', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Bug', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dark', 'Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dark', 'Electric'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dark', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dark', 'Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dark', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dark', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dark', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dark', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dark', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dark', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dark', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dark', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dark', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dark', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dark', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dark', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dragon', 'Electric'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dragon', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dragon', 'Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dragon', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dragon', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dragon', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dragon', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dragon', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dragon', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dragon', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dragon', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dragon', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dragon', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dragon', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Dragon', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Electric', 'Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Electric', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Electric', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Electric', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Electric', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Electric', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Electric', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Electric', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Electric', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Electric', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Electric', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Electric', 'Rock'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Electric', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Electric', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fairy', 'Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fairy', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fairy', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fairy', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fairy', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fairy', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fairy', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fairy', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fairy', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fairy', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fairy', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fairy', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fairy', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fighting', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fighting', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fighting', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fighting', 'Grass'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fighting', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fighting', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fighting', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fighting', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fighting', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fighting', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fighting', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fighting', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fire', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fire', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fire', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fire', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fire', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fire', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fire', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fire', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fire', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fire', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Fire', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Flying', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Flying', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Flying', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Flying', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Flying', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Flying', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Flying', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Flying', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Flying', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Flying', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ghost', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ghost', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ghost', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ghost', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ghost', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ghost', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ghost', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ghost', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ghost', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Grass', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Grass', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Grass', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Grass', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Grass', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Grass', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Grass', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Grass', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ground', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ground', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ground', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ground', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ground', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ground', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ground', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ice', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ice', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ice', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ice', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ice', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Ice', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Normal', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Normal', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Normal', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Normal', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Normal', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Poison', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Poison', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Poison', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Poison', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Psychic', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Psychic', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Psychic', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Rock', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Rock', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Flying',
    DefenseTypes: ['Steel', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Bug'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dark'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Normal'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Bug', 'Dark'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Bug', 'Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Bug', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Bug', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Bug', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Bug', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Bug', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Bug', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Bug', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Bug', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Bug', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Bug', 'Normal'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Bug', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Bug', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Bug', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Bug', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Bug', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dark', 'Dragon'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dark', 'Electric'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dark', 'Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dark', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dark', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dark', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dark', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dark', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dark', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dark', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dark', 'Normal'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dark', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dark', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dark', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dark', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dark', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dragon', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dragon', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dragon', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dragon', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dragon', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dragon', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dragon', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dragon', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dragon', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dragon', 'Normal'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dragon', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dragon', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dragon', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dragon', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Dragon', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Electric', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Electric', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Electric', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Electric', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Electric', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Electric', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Electric', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Electric', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Electric', 'Normal'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Electric', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Electric', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Electric', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Electric', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Electric', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fairy', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fairy', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fairy', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fairy', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fairy', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fairy', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fairy', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fairy', 'Normal'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fairy', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fairy', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fairy', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fairy', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fairy', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fighting', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fighting', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fighting', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fighting', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fighting', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fighting', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fighting', 'Normal'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fighting', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fighting', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fighting', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fighting', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fighting', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fire', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fire', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fire', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fire', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fire', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fire', 'Normal'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fire', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fire', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fire', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fire', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Fire', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Flying', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Flying', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Flying', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Flying', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Flying', 'Normal'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Flying', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Flying', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Flying', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Flying', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Flying', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ghost', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ghost', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ghost', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ghost', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ghost', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ghost', 'Psychic'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ghost', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ghost', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ghost', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Grass', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Grass', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Grass', 'Normal'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Grass', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Grass', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Grass', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Grass', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Grass', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ground', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ground', 'Normal'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ground', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ground', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ground', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ground', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ground', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ice', 'Normal'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ice', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ice', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ice', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ice', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Ice', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Normal', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Normal', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Normal', 'Rock'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Normal', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Normal', 'Water'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Poison', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Poison', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Poison', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Poison', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Psychic', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Psychic', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Psychic', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Rock', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Rock', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ghost',
    DefenseTypes: ['Steel', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Bug'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dragon'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Bug', 'Dark'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Bug', 'Dragon'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Bug', 'Electric'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Bug', 'Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Bug', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Bug', 'Fire'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Bug', 'Flying'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Bug', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Bug', 'Grass'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Bug', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Bug', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Bug', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Bug', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Bug', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Bug', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Bug', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Bug', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dark', 'Dragon'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dark', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dark', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dark', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dark', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dark', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dark', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dark', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dark', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dark', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dark', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dark', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dark', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dark', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dark', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dark', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dragon', 'Electric'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dragon', 'Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dragon', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dragon', 'Fire'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dragon', 'Flying'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dragon', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dragon', 'Grass'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dragon', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dragon', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dragon', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dragon', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dragon', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dragon', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dragon', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Dragon', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Electric', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Electric', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Electric', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Electric', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Electric', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Electric', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Electric', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Electric', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Electric', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Electric', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Electric', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Electric', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Electric', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Electric', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fairy', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fairy', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fairy', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fairy', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fairy', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fairy', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fairy', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fairy', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fairy', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fairy', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fairy', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fairy', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fairy', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fighting', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fighting', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fighting', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fighting', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fighting', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fighting', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fighting', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fighting', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fighting', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fighting', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fighting', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fighting', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fire', 'Flying'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fire', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fire', 'Grass'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fire', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fire', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fire', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fire', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fire', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fire', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fire', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Fire', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Flying', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Flying', 'Grass'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Flying', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Flying', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Flying', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Flying', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Flying', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Flying', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Flying', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Flying', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ghost', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ghost', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ghost', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ghost', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ghost', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ghost', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ghost', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ghost', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ghost', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Grass', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Grass', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Grass', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Grass', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Grass', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Grass', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Grass', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Grass', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ground', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ground', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ground', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ground', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ground', 'Rock'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ground', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ground', 'Water'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ice', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ice', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ice', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ice', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ice', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Ice', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Normal', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Normal', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Normal', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Normal', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Normal', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Poison', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Poison', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Poison', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Poison', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Psychic', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Psychic', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Psychic', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Rock', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Rock', 'Water'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Grass',
    DefenseTypes: ['Steel', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Bug'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Electric'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Flying'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Bug', 'Dark'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Bug', 'Dragon'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Bug', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Bug', 'Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Bug', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Bug', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Bug', 'Flying'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Bug', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Bug', 'Grass'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Bug', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Bug', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Bug', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Bug', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Bug', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Bug', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Bug', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Bug', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dark', 'Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dark', 'Electric'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dark', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dark', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dark', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dark', 'Flying'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dark', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dark', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dark', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dark', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dark', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dark', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dark', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dark', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dark', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dark', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dragon', 'Electric'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dragon', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dragon', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dragon', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dragon', 'Flying'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dragon', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dragon', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dragon', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dragon', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dragon', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dragon', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dragon', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dragon', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dragon', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Dragon', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Electric', 'Fairy'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Electric', 'Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Electric', 'Fire'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Electric', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Electric', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Electric', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Electric', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Electric', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Electric', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Electric', 'Poison'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Electric', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Electric', 'Rock'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Electric', 'Steel'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Electric', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fairy', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fairy', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fairy', 'Flying'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fairy', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fairy', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fairy', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fairy', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fairy', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fairy', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fairy', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fairy', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fairy', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fairy', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fighting', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fighting', 'Flying'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fighting', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fighting', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fighting', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fighting', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fighting', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fighting', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fighting', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fighting', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fighting', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fighting', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fire', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fire', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fire', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fire', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fire', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fire', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fire', 'Poison'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fire', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fire', 'Rock'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fire', 'Steel'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Fire', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Flying', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Flying', 'Grass'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Flying', 'Ground'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Flying', 'Ice'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Flying', 'Normal'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Flying', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Flying', 'Psychic'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Flying', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Flying', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Flying', 'Water'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ghost', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ghost', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ghost', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ghost', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ghost', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ghost', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ghost', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ghost', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ghost', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Grass', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Grass', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Grass', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Grass', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Grass', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Grass', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Grass', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Grass', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ground', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ground', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ground', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ground', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ground', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ground', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ground', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ice', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ice', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ice', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ice', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ice', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Ice', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Normal', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Normal', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Normal', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Normal', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Normal', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Poison', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Poison', 'Rock'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Poison', 'Steel'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Poison', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Psychic', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Psychic', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Psychic', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Rock', 'Steel'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Rock', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ground',
    DefenseTypes: ['Steel', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Bug'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dragon'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Bug', 'Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Bug', 'Dragon'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Bug', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Bug', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Bug', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Bug', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Bug', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Bug', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Bug', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Bug', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Bug', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Bug', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Bug', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Bug', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Bug', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Bug', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Bug', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dark', 'Dragon'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dark', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dark', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dark', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dark', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dark', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dark', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dark', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dark', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dark', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dark', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dark', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dark', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dark', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dark', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dark', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dragon', 'Electric'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dragon', 'Fairy'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dragon', 'Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dragon', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dragon', 'Flying'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dragon', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dragon', 'Grass'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dragon', 'Ground'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dragon', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dragon', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dragon', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dragon', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dragon', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dragon', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Dragon', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Electric', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Electric', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Electric', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Electric', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Electric', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Electric', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Electric', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Electric', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Electric', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Electric', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Electric', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Electric', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Electric', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Electric', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fairy', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fairy', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fairy', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fairy', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fairy', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fairy', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fairy', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fairy', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fairy', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fairy', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fairy', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fairy', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fairy', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fighting', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fighting', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fighting', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fighting', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fighting', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fighting', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fighting', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fighting', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fighting', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fighting', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fighting', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fighting', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fire', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fire', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fire', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fire', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fire', 'Ice'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fire', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fire', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fire', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fire', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fire', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Fire', 'Water'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Flying', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Flying', 'Grass'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Flying', 'Ground'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Flying', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Flying', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Flying', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Flying', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Flying', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Flying', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Flying', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ghost', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ghost', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ghost', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ghost', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ghost', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ghost', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ghost', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ghost', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ghost', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Grass', 'Ground'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Grass', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Grass', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Grass', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Grass', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Grass', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Grass', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Grass', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ground', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ground', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ground', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ground', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ground', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ground', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ground', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ice', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ice', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ice', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ice', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ice', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Ice', 'Water'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Normal', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Normal', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Normal', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Normal', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Normal', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Poison', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Poison', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Poison', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Poison', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Psychic', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Psychic', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Psychic', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Rock', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Rock', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Ice',
    DefenseTypes: ['Steel', 'Water'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Bug'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Bug', 'Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Bug', 'Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Bug', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Bug', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Bug', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Bug', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Bug', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Bug', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Bug', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Bug', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Bug', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Bug', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Bug', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Bug', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Bug', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Bug', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Bug', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dark', 'Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dark', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dark', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dark', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dark', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dark', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dark', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dark', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dark', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dark', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dark', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dark', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dark', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dark', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dark', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dark', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dragon', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dragon', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dragon', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dragon', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dragon', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dragon', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dragon', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dragon', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dragon', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dragon', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dragon', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dragon', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dragon', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dragon', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Dragon', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Electric', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Electric', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Electric', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Electric', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Electric', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Electric', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Electric', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Electric', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Electric', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Electric', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Electric', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Electric', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Electric', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Electric', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fairy', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fairy', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fairy', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fairy', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fairy', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fairy', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fairy', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fairy', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fairy', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fairy', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fairy', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fairy', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fairy', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fighting', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fighting', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fighting', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fighting', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fighting', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fighting', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fighting', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fighting', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fighting', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fighting', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fighting', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fighting', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fire', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fire', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fire', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fire', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fire', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fire', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fire', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fire', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fire', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fire', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Fire', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Flying', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Flying', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Flying', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Flying', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Flying', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Flying', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Flying', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Flying', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Flying', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Flying', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ghost', 'Grass'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ghost', 'Ground'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ghost', 'Ice'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ghost', 'Normal'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ghost', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ghost', 'Psychic'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ghost', 'Rock'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ghost', 'Steel'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ghost', 'Water'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Grass', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Grass', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Grass', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Grass', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Grass', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Grass', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Grass', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Grass', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ground', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ground', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ground', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ground', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ground', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ground', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ground', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ice', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ice', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ice', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ice', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ice', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Ice', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Normal', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Normal', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Normal', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Normal', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Normal', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Poison', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Poison', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Poison', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Poison', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Psychic', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Psychic', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Psychic', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Rock', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Rock', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Normal',
    DefenseTypes: ['Steel', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Bug'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fairy'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Bug', 'Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Bug', 'Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Bug', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Bug', 'Fairy'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Bug', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Bug', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Bug', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Bug', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Bug', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Bug', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Bug', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Bug', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Bug', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Bug', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Bug', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Bug', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Bug', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dark', 'Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dark', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dark', 'Fairy'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dark', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dark', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dark', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dark', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dark', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dark', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dark', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dark', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dark', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dark', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dark', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dark', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dark', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dragon', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dragon', 'Fairy'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dragon', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dragon', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dragon', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dragon', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dragon', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dragon', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dragon', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dragon', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dragon', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dragon', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dragon', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dragon', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Dragon', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Electric', 'Fairy'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Electric', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Electric', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Electric', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Electric', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Electric', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Electric', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Electric', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Electric', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Electric', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Electric', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Electric', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Electric', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Electric', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fairy', 'Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fairy', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fairy', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fairy', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fairy', 'Grass'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fairy', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fairy', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fairy', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fairy', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fairy', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fairy', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fairy', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fairy', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fighting', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fighting', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fighting', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fighting', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fighting', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fighting', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fighting', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fighting', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fighting', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fighting', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fighting', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fighting', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fire', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fire', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fire', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fire', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fire', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fire', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fire', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fire', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fire', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fire', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Fire', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Flying', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Flying', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Flying', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Flying', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Flying', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Flying', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Flying', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Flying', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Flying', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Flying', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ghost', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ghost', 'Ground'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ghost', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ghost', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ghost', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ghost', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ghost', 'Rock'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ghost', 'Steel'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ghost', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Grass', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Grass', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Grass', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Grass', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Grass', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Grass', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Grass', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Grass', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ground', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ground', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ground', 'Poison'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ground', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ground', 'Rock'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ground', 'Steel'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ground', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ice', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ice', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ice', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ice', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ice', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Ice', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Normal', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Normal', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Normal', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Normal', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Normal', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Poison', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Poison', 'Rock'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Poison', 'Steel'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Poison', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Psychic', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Psychic', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Psychic', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Rock', 'Steel'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Rock', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Poison',
    DefenseTypes: ['Steel', 'Water'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Bug'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dark'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Bug', 'Dark'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Bug', 'Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Bug', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Bug', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Bug', 'Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Bug', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Bug', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Bug', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Bug', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Bug', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Bug', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Bug', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Bug', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Bug', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Bug', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Bug', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Bug', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dark', 'Dragon'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dark', 'Electric'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dark', 'Fairy'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dark', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dark', 'Fire'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dark', 'Flying'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dark', 'Ghost'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dark', 'Grass'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dark', 'Ground'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dark', 'Ice'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dark', 'Normal'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dark', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dark', 'Psychic'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dark', 'Rock'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dark', 'Steel'],
    Effectiveness: 0.244140625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dark', 'Water'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dragon', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dragon', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dragon', 'Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dragon', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dragon', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dragon', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dragon', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dragon', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dragon', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dragon', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dragon', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dragon', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dragon', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dragon', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Dragon', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Electric', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Electric', 'Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Electric', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Electric', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Electric', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Electric', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Electric', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Electric', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Electric', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Electric', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Electric', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Electric', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Electric', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Electric', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fairy', 'Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fairy', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fairy', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fairy', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fairy', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fairy', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fairy', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fairy', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fairy', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fairy', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fairy', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fairy', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fairy', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fighting', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fighting', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fighting', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fighting', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fighting', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fighting', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fighting', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fighting', 'Poison'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fighting', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fighting', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fighting', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fighting', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fire', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fire', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fire', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fire', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fire', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fire', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fire', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fire', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fire', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fire', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Fire', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Flying', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Flying', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Flying', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Flying', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Flying', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Flying', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Flying', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Flying', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Flying', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Flying', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ghost', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ghost', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ghost', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ghost', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ghost', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ghost', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ghost', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ghost', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ghost', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Grass', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Grass', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Grass', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Grass', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Grass', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Grass', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Grass', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Grass', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ground', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ground', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ground', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ground', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ground', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ground', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ground', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ice', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ice', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ice', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ice', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ice', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Ice', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Normal', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Normal', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Normal', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Normal', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Normal', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Poison', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Poison', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Poison', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Poison', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Psychic', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Psychic', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Psychic', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Rock', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Rock', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Psychic',
    DefenseTypes: ['Steel', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Bug'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Bug', 'Dark'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Bug', 'Dragon'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Bug', 'Electric'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Bug', 'Fairy'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Bug', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Bug', 'Fire'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Bug', 'Flying'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Bug', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Bug', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Bug', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Bug', 'Ice'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Bug', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Bug', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Bug', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Bug', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Bug', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Bug', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dark', 'Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dark', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dark', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dark', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dark', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dark', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dark', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dark', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dark', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dark', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dark', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dark', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dark', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dark', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dark', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dark', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dragon', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dragon', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dragon', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dragon', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dragon', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dragon', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dragon', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dragon', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dragon', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dragon', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dragon', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dragon', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dragon', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dragon', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Dragon', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Electric', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Electric', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Electric', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Electric', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Electric', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Electric', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Electric', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Electric', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Electric', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Electric', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Electric', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Electric', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Electric', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Electric', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fairy', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fairy', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fairy', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fairy', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fairy', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fairy', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fairy', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fairy', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fairy', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fairy', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fairy', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fairy', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fairy', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fighting', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fighting', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fighting', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fighting', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fighting', 'Ground'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fighting', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fighting', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fighting', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fighting', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fighting', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fighting', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fighting', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fire', 'Flying'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fire', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fire', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fire', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fire', 'Ice'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fire', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fire', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fire', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fire', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fire', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Fire', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Flying', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Flying', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Flying', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Flying', 'Ice'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Flying', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Flying', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Flying', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Flying', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Flying', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Flying', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ghost', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ghost', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ghost', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ghost', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ghost', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ghost', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ghost', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ghost', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ghost', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Grass', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Grass', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Grass', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Grass', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Grass', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Grass', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Grass', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Grass', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ground', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ground', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ground', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ground', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ground', 'Rock'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ground', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ground', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ice', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ice', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ice', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ice', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ice', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Ice', 'Water'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Normal', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Normal', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Normal', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Normal', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Normal', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Poison', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Poison', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Poison', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Poison', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Psychic', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Psychic', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Psychic', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Rock', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Rock', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Rock',
    DefenseTypes: ['Steel', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Bug'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Electric'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fairy'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Bug', 'Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Bug', 'Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Bug', 'Electric'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Bug', 'Fairy'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Bug', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Bug', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Bug', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Bug', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Bug', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Bug', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Bug', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Bug', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Bug', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Bug', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Bug', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Bug', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Bug', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dark', 'Dragon'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dark', 'Electric'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dark', 'Fairy'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dark', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dark', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dark', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dark', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dark', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dark', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dark', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dark', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dark', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dark', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dark', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dark', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dark', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dragon', 'Electric'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dragon', 'Fairy'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dragon', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dragon', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dragon', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dragon', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dragon', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dragon', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dragon', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dragon', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dragon', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dragon', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dragon', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dragon', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Dragon', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Electric', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Electric', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Electric', 'Fire'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Electric', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Electric', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Electric', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Electric', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Electric', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Electric', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Electric', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Electric', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Electric', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Electric', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Electric', 'Water'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fairy', 'Fighting'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fairy', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fairy', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fairy', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fairy', 'Grass'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fairy', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fairy', 'Ice'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fairy', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fairy', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fairy', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fairy', 'Rock'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fairy', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fairy', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fighting', 'Fire'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fighting', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fighting', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fighting', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fighting', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fighting', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fighting', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fighting', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fighting', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fighting', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fighting', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fighting', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fire', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fire', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fire', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fire', 'Ground'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fire', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fire', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fire', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fire', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fire', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fire', 'Steel'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Fire', 'Water'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Flying', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Flying', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Flying', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Flying', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Flying', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Flying', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Flying', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Flying', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Flying', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Flying', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ghost', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ghost', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ghost', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ghost', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ghost', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ghost', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ghost', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ghost', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ghost', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Grass', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Grass', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Grass', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Grass', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Grass', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Grass', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Grass', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Grass', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ground', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ground', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ground', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ground', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ground', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ground', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ground', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ice', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ice', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ice', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ice', 'Rock'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ice', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Ice', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Normal', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Normal', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Normal', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Normal', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Normal', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Poison', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Poison', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Poison', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Poison', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Psychic', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Psychic', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Psychic', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Rock', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Rock', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Steel',
    DefenseTypes: ['Steel', 'Water'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Bug'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dragon'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Bug', 'Dark'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Bug', 'Dragon'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Bug', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Bug', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Bug', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Bug', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Bug', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Bug', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Bug', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Bug', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Bug', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Bug', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Bug', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Bug', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Bug', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Bug', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Bug', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dark', 'Dragon'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dark', 'Electric'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dark', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dark', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dark', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dark', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dark', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dark', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dark', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dark', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dark', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dark', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dark', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dark', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dark', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dark', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dragon', 'Electric'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dragon', 'Fairy'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dragon', 'Fighting'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dragon', 'Fire'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dragon', 'Flying'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dragon', 'Ghost'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dragon', 'Grass'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dragon', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dragon', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dragon', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dragon', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dragon', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dragon', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dragon', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Dragon', 'Water'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Electric', 'Fairy'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Electric', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Electric', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Electric', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Electric', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Electric', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Electric', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Electric', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Electric', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Electric', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Electric', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Electric', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Electric', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Electric', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fairy', 'Fighting'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fairy', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fairy', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fairy', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fairy', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fairy', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fairy', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fairy', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fairy', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fairy', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fairy', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fairy', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fairy', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fighting', 'Fire'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fighting', 'Flying'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fighting', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fighting', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fighting', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fighting', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fighting', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fighting', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fighting', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fighting', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fighting', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fighting', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fire', 'Flying'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fire', 'Ghost'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fire', 'Grass'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fire', 'Ground'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fire', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fire', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fire', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fire', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fire', 'Rock'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fire', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Fire', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Flying', 'Ghost'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Flying', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Flying', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Flying', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Flying', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Flying', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Flying', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Flying', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Flying', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Flying', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ghost', 'Grass'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ghost', 'Ground'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ghost', 'Ice'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ghost', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ghost', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ghost', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ghost', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ghost', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ghost', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Grass', 'Ground'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Grass', 'Ice'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Grass', 'Normal'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Grass', 'Poison'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Grass', 'Psychic'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Grass', 'Rock'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Grass', 'Steel'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Grass', 'Water'],
    Effectiveness: 0.390625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ground', 'Ice'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ground', 'Normal'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ground', 'Poison'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ground', 'Psychic'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ground', 'Rock'],
    Effectiveness: 2.56
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ground', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ground', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ice', 'Normal'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ice', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ice', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ice', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ice', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Ice', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Normal', 'Poison'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Normal', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Normal', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Normal', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Normal', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Poison', 'Psychic'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Poison', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Poison', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Poison', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Psychic', 'Rock'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Psychic', 'Steel'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Psychic', 'Water'],
    Effectiveness: 0.625
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Rock', 'Steel'],
    Effectiveness: 1.6
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Rock', 'Water'],
    Effectiveness: 1
  },
  {
    MoveType: 'Water',
    DefenseTypes: ['Steel', 'Water'],
    Effectiveness: 0.625
  }
];

Object.freeze(POKEMON_TYPES);
Object.freeze(POKEMON_TYPES_COMBINATIONS);
Object.freeze(POKEMON_TYPE_EFFECTIVENESSES);
POKEMON_TYPE_EFFECTIVENESSES.forEach((v) => {
  Object.freeze(v);
});

export { POKEMON_TYPES, POKEMON_TYPES_COMBINATIONS, POKEMON_TYPE_EFFECTIVENESSES };
