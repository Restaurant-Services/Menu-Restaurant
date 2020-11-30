import { RecipeType } from '../recipe-type';
import { AUTHORS } from './mock-authors';

export const RECIPE_TYPES: RecipeType[] = [
  new RecipeType(0, 'Antipasti', 'dumpling', AUTHORS[2]),
  new RecipeType(1, 'Insalate', 'lettuce', AUTHORS[2]),
  new RecipeType(2, 'Zuppe', 'noodles', AUTHORS[2]),
  new RecipeType(3, 'Riso', 'rice', AUTHORS[2]),
  new RecipeType(4, 'Spaghetti', 'hotnoodles', AUTHORS[2]),
  new RecipeType(5, 'Griglieria', 'tanghulu', AUTHORS[2]),
  new RecipeType(6, 'Fritti', 'shrimp', AUTHORS[0], 'Fritti & Tempura'),
  new RecipeType(7, 'Carne', 'pekingduck', AUTHORS[2], 'Secondi di carne'),
  new RecipeType(8, 'Pesce', 'fish', AUTHORS[2], 'Secondi di pesce'),
  new RecipeType(9, 'Contorni wok', 'wok', AUTHORS[1], 'Contorni al Wok'),
  new RecipeType(10, 'Poke', 'poke', AUTHORS[1]),
  new RecipeType(11, 'Tacos', 'tacos', AUTHORS[2]),
  new RecipeType(12, 'Hosomaki', 'hosomaki', AUTHORS[1]),
  new RecipeType(13, 'Uramaki', 'uramaki1', AUTHORS[1]),
  new RecipeType(14, 'Nigiri', 'nigiri', AUTHORS[1]),
  new RecipeType(15, 'Onigiri', 'onigiri', AUTHORS[1]),
  new RecipeType(16, 'Temaki', 'temaki', AUTHORS[1]),
  new RecipeType(17, 'Chirashi', 'chirashi', AUTHORS[1]),
  new RecipeType(18, 'Sashimi', 'salmon', AUTHORS[0]),
  // new RecipeType(19, 'Tartare', 'tartare', AUTHORS[]), // Secondo di pesce
  // new RecipeType(20, 'Carpaccio', '', AUTHORS[]), // Secondo di pesce
  new RecipeType(19, 'Gunkan', 'gunkan', AUTHORS[1]),
  new RecipeType(20, 'Mix', 'bento', AUTHORS[1], 'Sushi misto & Barche'),
  new RecipeType(21, 'Dolci', 'dessert', AUTHORS[2]),
  new RecipeType(22, 'Bevande', 'softdrinks', AUTHORS[1], 'Bevande analcoliche')
  // new RecipeType(23, 'Vini', 'wine', AUTHORS[], 'Vini Italiani')
].sort(RecipeType.sort);

export const EXTRA_SECTIONS: RecipeType[] = [
  new RecipeType(-2, 'Credits', null, null),
  new RecipeType(-1, 'Summary', null, null)
].sort(RecipeType.sort);
