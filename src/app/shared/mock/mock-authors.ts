import { Author } from '../author';

let index = 0;

export const AUTHORS: Author[] = [
  new Author(index++, 'Eucalyp'),
  new Author(index++, 'Freepik'),
  new Author(index++, 'mangsaabguru')
].sort(Author.sort);
