export enum FilterType {
  GERAL,
  ECONOMIA,
  MECANICA,
  FACTIONS,
  OPCIONAIS,
}

export interface Plugin {
  _id?: string;
  name?: string;
  price?: number;
  image?: string;
  category?: string;
  description?: string;
  canEdit?: boolean;
  purchased?: boolean;
  downloads?: number;
  file: string;
}
