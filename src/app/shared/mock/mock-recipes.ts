import {Recipe} from '../recipe';

export const RECIPES: Recipe[] = [
  {
    id: 1,
    code: '1',
    name: 'Involtini Vegetariani',
    type: [
      {
        id: 1,
        name: 'Antipasto'
      }
    ],
    description: 'Involtini fritti ripieni di verza, carote e cipolle',
    price: 2.0,
    pieces: 2
  }
];
