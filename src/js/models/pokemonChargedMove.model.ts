export interface PokemonChargedMove {
  Duration: number;
  EnergyDelta: number;
  Name: string;
  Power: number;
  StaminaLossScaler: number;
  Type: string;
  CriticalChance?: number;
  HealScalar?: number;
}
