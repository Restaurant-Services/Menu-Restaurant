import { Allergen } from '../allergen';

export const ALLERGENS: Allergen[] = [
  new Allergen(0, 'Vegen'),
  new Allergen(1, 'Vegetariano'),
  new Allergen(2, 'Verdure'),
  new Allergen(3, 'Glutine'),
  new Allergen(4, 'Soia'),
  new Allergen(5, 'Piccante'),
  new Allergen(6, 'Uova'),
  new Allergen(7, 'Frutta e Guscio'),
  new Allergen(8, 'Mais'),
  new Allergen(9, 'Latticini'),
  new Allergen(10, 'Maiale'),
  new Allergen(11, 'Crostacei'),
  new Allergen(12, 'Pesce'),
  new Allergen(13, 'Pesce Surgelato'),
  new Allergen(14, 'Abbattuto'),
  new Allergen(15, 'Surgelato')
].sort(Allergen.sort);
