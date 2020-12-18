import { Allergen } from '../allergen';

export const ALLERGENS: Allergen[] = [
  new Allergen('Vegen'),
  new Allergen('Vegetariano'),
  new Allergen('Verdure'),
  new Allergen('Glutine'),
  new Allergen('Soia'),
  new Allergen('Piccante'),
  new Allergen('Uova'),
  new Allergen('Frutta e Guscio'),
  new Allergen('Mais'),
  new Allergen('Latticini'),
  new Allergen('Maiale'),
  new Allergen('Crostacei'),
  new Allergen('Pesce'),
  new Allergen('Pesce Surgelato'),
  new Allergen('Abbattuto'),
  new Allergen('Surgelato')
].sort(Allergen.sort);

ALLERGENS.forEach((allergen: Allergen, index: number) => {
  allergen.id = index;
});
