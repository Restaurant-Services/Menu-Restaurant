import { Ingredient } from '../ingredient';

let index = 0;

export const INGREDIENTS: Ingredient[] = [
  new Ingredient(index++, 'Anacardi'),
  new Ingredient(index++, 'Arachidi'),
  new Ingredient(index++, 'Avocado'),
  new Ingredient(index++, 'Cetriolo'),
  new Ingredient(index++, 'Cipolla fritte'),
  new Ingredient(index++, 'Edamame'),
  new Ingredient(index++, 'Guacamole'),
  new Ingredient(index++, 'Ketchup'),
  new Ingredient(index++, 'Ikura'),
  new Ingredient(index++, 'Maionese'),
  new Ingredient(index++, 'Mais'),
  new Ingredient(index++, 'Mandorle'),
  new Ingredient(index++, 'Mango'),
  new Ingredient(index++, 'Panna'),
  new Ingredient(index++, 'Pepe nero'),
  new Ingredient(index++, 'Philadelphia'),
  new Ingredient(index++, 'Piselli'),
  new Ingredient(index++, 'Prosciutto'),
  new Ingredient(index++, 'Salmone'),
  new Ingredient(index++, 'Salsa agrodolce'),
  new Ingredient(index++, 'Salsa al sesamo'),
  new Ingredient(index++, 'Salsa al tabasco'),
  new Ingredient(index++, 'Salsa teriyaki'),
  new Ingredient(index++, 'Sesamo'),
  new Ingredient(index++, 'Surimi'),
  new Ingredient(index++, 'Tobiko'),
  new Ingredient(index++, 'Uova'),
  new Ingredient(index++, 'Wakame'),
  new Ingredient(index++, 'Wasabi'),
  new Ingredient(index++, 'Zenzero')
].sort(Ingredient.sort);
