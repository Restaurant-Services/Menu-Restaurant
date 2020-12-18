import { RecipeType } from '../recipe-type';
import { AUTHORS } from './mock-authors';

export const RECIPE_TYPES: RecipeType[] = [
  new RecipeType('Antipasti', 'dumpling', AUTHORS[2]),
  new RecipeType('Insalate', 'lettuce', AUTHORS[2]),
  new RecipeType('Zuppe', 'noodles', AUTHORS[2]),
  new RecipeType('Riso', 'rice', AUTHORS[2]),
  new RecipeType('Spaghetti', 'hotnoodles', AUTHORS[2]),
  new RecipeType('Griglieria', 'tanghulu', AUTHORS[2]),
  new RecipeType('Fritti', 'shrimp', AUTHORS[0], 'Fritti & Tempura'),
  new RecipeType('Carne', 'pekingduck', AUTHORS[2], 'Secondi di carne'),
  new RecipeType('Pesce', 'fish', AUTHORS[2], 'Secondi di pesce'),
  new RecipeType('Contorni wok', 'wok', AUTHORS[1], 'Contorni al Wok'),
  new RecipeType('Poke', 'poke', AUTHORS[1]),
  new RecipeType('Tacos', 'tacos', AUTHORS[2]),
  new RecipeType('Hosomaki', 'hosomaki', AUTHORS[1]),
  new RecipeType('Uramaki', 'uramaki1', AUTHORS[1]),
  new RecipeType('Nigiri', 'nigiri', AUTHORS[1]),
  new RecipeType('Onigiri', 'onigiri', AUTHORS[1]),
  new RecipeType('Temaki', 'temaki', AUTHORS[1]),
  new RecipeType('Chirashi', 'chirashi', AUTHORS[1]),
  new RecipeType('Sashimi', 'salmon', AUTHORS[0]),
  // new RecipeType('Tartare', 'tartare', AUTHORS[]), // Secondo di pesce
  // new RecipeType('Carpaccio', '', AUTHORS[]), // Secondo di pesce
  new RecipeType('Gunkan', 'gunkan', AUTHORS[1]),
  new RecipeType('Mix', 'bento', AUTHORS[1], 'Sushi misto & Barche'),
  new RecipeType('Dolci', 'dessert', AUTHORS[2]),
  new RecipeType('Bevande', 'softdrinks', AUTHORS[1], 'Bevande analcoliche')
  // new RecipeType('Vini', 'wine', AUTHORS[], 'Vini Italiani')
];

RECIPE_TYPES.forEach((recipeType: RecipeType, index: number) => {
  recipeType.id = index;
});

export const EXTRA_SECTIONS: RecipeType[] = [
  new RecipeType('Credits'),
  new RecipeType('CookiePolicy'),
  new RecipeType('Summary')
];

EXTRA_SECTIONS.forEach((recipeType: RecipeType, index: number) => {
  recipeType.id = index - 3;
});
