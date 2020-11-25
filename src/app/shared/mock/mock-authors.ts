import { Author } from '../author';

export const AUTHORS: Author[] = [
  { id: 0, name: 'Eucalyp' },
  { id: 1, name: 'Freepik' },
  { id: 2, name: 'mangsaabguru' }
].sort((a: Author, b: Author) => {
  return a.id - b.id;
});
