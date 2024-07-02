export enum FilterType {
  ALL,
  OPTIONALS,
  ECONOMY,
  FACTIONS,
  MECHANICS,
}

export interface Plugin {
  name?: string;
  price?: number;
  icon?: string;
  tag?: string;
  description?: string;
  canEdit?: boolean;
  purchased?: boolean;
}
