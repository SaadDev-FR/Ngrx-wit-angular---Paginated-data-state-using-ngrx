import { Action } from '@ngrx/store';
import { Book } from '../../models/book.model';

export const LOAD_BOOKS = '[Book] Load Books';
export const LOAD_BOOKS_SUCCESS = '[Book] Load Books Success';
export const LOAD_BOOKS_FAILURE = '[Book] Load Books Failure';

export class LoadBooks implements Action {
  readonly type = LOAD_BOOKS;
  constructor(public payload: { params: any, page: number }) {}
}

export class LoadBooksSuccess implements Action {
  readonly type = LOAD_BOOKS_SUCCESS;
  constructor(public payload: { books: Book[], page: number }) {}
}

export class LoadBooksFailure implements Action {
  readonly type = LOAD_BOOKS_FAILURE;
  constructor(public payload: any) {}
}

export type BookActions = LoadBooks | LoadBooksSuccess | LoadBooksFailure;

// export const LOAD_BOOKS = '[Book] Load Books';
// export const LOAD_BOOKS_SUCCESS = '[Book] Load Books Success';
// export const LOAD_BOOKS_FAILURE = '[Book] Load Books Failure';

// export class LoadBooks implements Action {
//   readonly type = LOAD_BOOKS;
//   constructor(public payload: { params: any, page: number }) {}
// }

// export class LoadBooksSuccess implements Action {
//   readonly type = LOAD_BOOKS_SUCCESS;
//   constructor(public payload: { books: Book[] }) {}
// }

// export class LoadBooksFailure implements Action {
//   readonly type = LOAD_BOOKS_FAILURE;
//   constructor(public payload: any) {}
// }

// export type BookActions = LoadBooks | LoadBooksSuccess | LoadBooksFailure;