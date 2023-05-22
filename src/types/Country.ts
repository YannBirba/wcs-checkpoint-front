import { Continent } from "./Continent";

export type Country = {
  code?: number;
  name?: string;
  native?: string;
  phone?: string;
  continent?: Continent;
  capital: string;
  currency: string;
  emoji?: string;
  emojiU?: string;
};
