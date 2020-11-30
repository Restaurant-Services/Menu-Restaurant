import { Ingredient } from '../ingredient';

export const INGREDIENTS: Ingredient[] = [
  new Ingredient(0, 'Anacardi'),
  new Ingredient(1, 'Arachidi'),
  new Ingredient(2, 'Avocado'),
  new Ingredient(3, 'Cetriolo'),
  new Ingredient(4, 'Cipolla fritte'),
  new Ingredient(5, 'Edamame'),
  new Ingredient(6, 'Guacamole'),
  new Ingredient(7, 'Ketchup'),
  new Ingredient(8, 'Ikura'),
  new Ingredient(9, 'Maionese'),
  new Ingredient(10, 'Mais'),
  new Ingredient(11, 'Mandorle'),
  new Ingredient(12, 'Mango'),
  new Ingredient(13, 'Panna'),
  new Ingredient(14, 'Pepe nero'),
  new Ingredient(15, 'Philadelphia'),
  new Ingredient(16, 'Piselli'),
  new Ingredient(17, 'Prosciutto'),
  new Ingredient(18, 'Salmone'),
  new Ingredient(19, 'Salsa agrodolce'),
  new Ingredient(20, 'Salsa al sesamo'),
  new Ingredient(21, 'Salsa al tabasco'),
  new Ingredient(22, 'Salsa teriyaki'),
  new Ingredient(23, 'Sesamo'),
  new Ingredient(24, 'Surimi'),
  new Ingredient(25, 'Tobiko'),
  new Ingredient(26, 'Uova'),
  new Ingredient(27, 'Wakame'),
  new Ingredient(28, 'Wasabi'),
  new Ingredient(29, 'Zenzero')
].sort((a: Ingredient, b: Ingredient) => {
  return a.id - b.id;
});
