import { Ingredient } from '../ingredient';

export const INGREDIENTS: Ingredient[] = [
  { id: 0, name: 'Anacardi'},
  { id: 1, name: 'Arachidi'},
  { id: 2, name: 'Avocado'},
  { id: 3, name: 'Cetriolo'},
  { id: 4, name: 'Cipolla fritte'},
  { id: 5, name: 'Edamame'},
  { id: 6, name: 'Guacamole'},
  { id: 7, name: 'Ketchup'},
  { id: 8, name: 'Ikura'},
  { id: 9, name: 'Maionese'},
  { id: 10, name: 'Mais'},
  { id: 11, name: 'Mandorle'},
  { id: 12, name: 'Mango'},
  { id: 13, name: 'Panna'},
  { id: 14, name: 'Pepe nero'},
  { id: 15, name: 'Philadelphia'},
  { id: 16, name: 'Piselli'},
  { id: 17, name: 'Prosciutto'},
  { id: 18, name: 'Salmone'},
  { id: 19, name: 'Salsa agrodolce'},
  { id: 20, name: 'Salsa al sesamo'},
  { id: 21, name: 'Salsa al tabasco'},
  { id: 22, name: 'Salsa teriyaki'},
  { id: 23, name: 'Sesamo'},
  { id: 24, name: 'Surimi'},
  { id: 25, name: 'Tobiko'},
  { id: 26, name: 'Uova'},
  { id: 27, name: 'Wakame'},
  { id: 28, name: 'Wasabi'},
  { id: 29, name: 'Zenzero'}
].sort((a: Ingredient, b: Ingredient) => {
  return a.id - b.id;
});
