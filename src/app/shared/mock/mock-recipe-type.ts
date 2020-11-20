import {RecipeType} from '../recipe-type';
import {AUTHORS} from './mock-authors';

export const RECIPE_TYPES: RecipeType[] = [
  new RecipeType(0, 'Antipasti', 'dumpling', AUTHORS[2]),
  new RecipeType(1, 'Insalate', 'lettuce', AUTHORS[2]),
  new RecipeType(2, 'Zuppe', 'noodles', AUTHORS[2]),
  new RecipeType(3, 'Riso', 'rice', AUTHORS[2]),
  new RecipeType(4, 'Spaghetti', 'hotnoodles', AUTHORS[2]),
  new RecipeType(5, 'Griglieria', 'tanghulu', AUTHORS[2]),
  new RecipeType(6, 'Fritti', 'shrimp', AUTHORS[0]),
  new RecipeType(7, 'Carne', 'pekingduck', AUTHORS[2]),
  new RecipeType(8, 'Pesce', 'fish', AUTHORS[2]),
  new RecipeType(9, 'Poke', 'poke', AUTHORS[1]),
  new RecipeType(10, 'Tacos', 'tacos', AUTHORS[2]),
  new RecipeType(11, 'Hosomaki', 'hosomaki', AUTHORS[1]),
  new RecipeType(12, 'Uramaki', 'uramaki1', AUTHORS[1]),
  new RecipeType(13, 'Nigiri', 'nigiri', AUTHORS[1]),
  new RecipeType(14, 'Onigiri', 'onigiri', AUTHORS[1]),
  new RecipeType(15, 'Temaki', 'temaki', AUTHORS[1]),
  new RecipeType(16, 'Chirashi', 'chirashi', AUTHORS[1]),
  new RecipeType(17, 'Sashimi', 'salmon', AUTHORS[0]),
  // new RecipeType(18, 'Tartare', 'tartare', AUTHORS[]), // Secondo di pesce
  // new RecipeType(19, 'Carpaccio', '', AUTHORS[]), // Secondo di pesce
  new RecipeType(18, 'Gunkan', 'gunkan', AUTHORS[1]),
  new RecipeType(19, 'Mix', 'bento', AUTHORS[1]),
  new RecipeType(20, 'Dolci', 'dessert', AUTHORS[2]),
  new RecipeType(21, 'Bevande', 'softdrinks', AUTHORS[1])
];

export const EXTRA_SECTIONS: RecipeType[] = [
  new RecipeType(-2, 'Credits', null, null),
  new RecipeType(-1, 'Summary', null, null)
];
