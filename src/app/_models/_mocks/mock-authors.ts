import { Author } from '../author';

export const AUTHORS: Author[] = [
  new Author('Eucalyp'),
  new Author('Freepik'),
  new Author('mangsaabguru')
].sort(Author.sort);

AUTHORS.forEach((author: Author, index: number) => {
  author.id = index;
});
