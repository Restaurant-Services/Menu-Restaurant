import { Allergen } from '../allergen';

export const ALLERGENS: Allergen[] = [
  { id: 0, name: 'Vegen'},
  { id: 1, name: 'Vegetariano'},
  { id: 2, name: 'Verdure' },
  { id: 3, name: 'Glutine' },
  { id: 4, name: 'Soia' },
  { id: 5, name: 'Piccante' },
  { id: 6, name: 'Uova' },
  { id: 7, name: 'Frutta e Guscio' },
  { id: 8, name: 'Mais' },
  { id: 9, name: 'Latticini' },
  { id: 10, name: 'Maiale' },
  { id: 11, name: 'Crostacei' },
  { id: 12, name: 'Pesce' },
  { id: 13, name: 'Pesce Surgelato' },
  { id: 14, name: 'Abbattuto' },
  { id: 15, name: 'Surgelato' }
].sort((a: Allergen, b: Allergen) => {
  return a.id - b.id;
});
