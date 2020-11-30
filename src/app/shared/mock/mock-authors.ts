import { Author } from '../author';

export const AUTHORS: Author[] = [
  new Author(0, 'Eucalyp'),
  new Author(1, 'Freepik'),
  new Author(2, 'mangsaabguru')
].sort(Author.sort);
