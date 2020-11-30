import { Allergen } from '../allergen';

let index = 0;

export const ALLERGENS: Allergen[] = [
  new Allergen(index++, 'Vegen'),
  new Allergen(index++, 'Vegetariano'),
  new Allergen(index++, 'Verdure'),
  new Allergen(index++, 'Glutine'),
  new Allergen(index++, 'Soia'),
  new Allergen(index++, 'Piccante'),
  new Allergen(index++, 'Uova'),
  new Allergen(index++, 'Frutta e Guscio'),
  new Allergen(index++, 'Mais'),
  new Allergen(index++, 'Latticini'),
  new Allergen(index++, 'Maiale'),
  new Allergen(index++, 'Crostacei'),
  new Allergen(index++, 'Pesce'),
  new Allergen(index++, 'Pesce Surgelato'),
  new Allergen(index++, 'Abbattuto'),
  new Allergen(index++, 'Surgelato')
].sort(Allergen.sort);
