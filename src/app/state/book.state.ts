import { Book } from '../../models/book.model';

export interface BookState {
  booksByPage: { [page: number]: Book[] };
  currentPage: number;
}

export const initialBookState: BookState = {
  booksByPage: {},
  currentPage: 1
};

// export interface BookState {
//   books: Book[];
//   currentPage: number;
// }

// export const initialBookState: BookState = {
//   books: [],
//   currentPage: 1
// };
