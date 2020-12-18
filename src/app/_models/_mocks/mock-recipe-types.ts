import { RecipeType } from '../recipe-type';
import { AUTHORS } from './mock-authors';

let index = 0;

export const RECIPE_TYPES: RecipeType[] = [
  new RecipeType(index++, 'Antipasti', 'dumpling', AUTHORS[2]),
  new RecipeType(index++, 'Insalate', 'lettuce', AUTHORS[2]),
  new RecipeType(index++, 'Zuppe', 'noodles', AUTHORS[2]),
  new RecipeType(index++, 'Riso', 'rice', AUTHORS[2]),
  new RecipeType(index++, 'Spaghetti', 'hotnoodles', AUTHORS[2]),
  new RecipeType(index++, 'Griglieria', 'tanghulu', AUTHORS[2]),
  new RecipeType(index++, 'Fritti', 'shrimp', AUTHORS[0], 'Fritti & Tempura'),
  new RecipeType(index++, 'Carne', 'pekingduck', AUTHORS[2], 'Secondi di carne'),
  new RecipeType(index++, 'Pesce', 'fish', AUTHORS[2], 'Secondi di pesce'),
  new RecipeType(index++, 'Contorni wok', 'wok', AUTHORS[1], 'Contorni al Wok'),
  new RecipeType(index++, 'Poke', 'poke', AUTHORS[1]),
  new RecipeType(index++, 'Tacos', 'tacos', AUTHORS[2]),
  new RecipeType(index++, 'Hosomaki', 'hosomaki', AUTHORS[1]),
  new RecipeType(index++, 'Uramaki', 'uramaki1', AUTHORS[1]),
  new RecipeType(index++, 'Nigiri', 'nigiri', AUTHORS[1]),
  new RecipeType(index++, 'Onigiri', 'onigiri', AUTHORS[1]),
  new RecipeType(index++, 'Temaki', 'temaki', AUTHORS[1]),
  new RecipeType(index++, 'Chirashi', 'chirashi', AUTHORS[1]),
  new RecipeType(index++, 'Sashimi', 'salmon', AUTHORS[0]),
  // new RecipeType(index++, 'Tartare', 'tartare', AUTHORS[]), // Secondo di pesce
  // new RecipeType(index++, 'Carpaccio', '', AUTHORS[]), // Secondo di pesce
  new RecipeType(index++, 'Gunkan', 'gunkan', AUTHORS[1]),
  new RecipeType(index++, 'Mix', 'bento', AUTHORS[1], 'Sushi misto & Barche'),
  new RecipeType(index++, 'Dolci', 'dessert', AUTHORS[2]),
  new RecipeType(index++, 'Bevande', 'softdrinks', AUTHORS[1], 'Bevande analcoliche')
  // new RecipeType(index++, 'Vini', 'wine', AUTHORS[], 'Vini Italiani')
].sort(RecipeType.sort);

export const EXTRA_SECTIONS: RecipeType[] = [
  new RecipeType(-3, 'Credits'),
  new RecipeType(-2, 'CookiePolicy'),
  new RecipeType(-1, 'Summary')
].sort(RecipeType.sort);
