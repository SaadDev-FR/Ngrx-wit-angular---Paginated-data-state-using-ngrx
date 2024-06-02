import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from '../state/book.state';

export const getBookState = createFeatureSelector<BookState>('books');

export const getBooksByPage = createSelector(
  getBookState,
  (state: BookState) => state.booksByPage
);

export const getBooksForCurrentPage = createSelector(
  getBooksByPage,
  getBookState,
  (booksByPage, state) => booksByPage[state.currentPage] || []
);

export const getCurrentPage = createSelector(
  getBookState,
  (state: BookState) => state.currentPage
);
// export const getBookState = createFeatureSelector<BookState>('books');

// export const getBooks = createSelector(
//   getBookState,
//   (state: BookState) => state.books
// );

// export const getCurrentPage = createSelector(
//   getBookState,
//   (state: BookState) => state.currentPage
// );