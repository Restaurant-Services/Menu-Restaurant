import {RecipeType} from './recipe-type';
import {Ingredient} from './ingredient';

export interface Recipe {
  id: number;
  code: string;
  name: string;
  type: RecipeType[];
  description: string;
  price: number;
  pieces: number;
  ingredients: Ingredient[];
}
