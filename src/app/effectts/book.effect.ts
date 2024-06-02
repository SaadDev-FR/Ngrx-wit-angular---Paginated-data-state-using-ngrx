import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { TodoService } from '../app.service';
import { LoadBooks, LOAD_BOOKS, LoadBooksSuccess, LoadBooksFailure } from '../action/book.action';
import { Book } from 'src/models/book.model';
import { getBooksByPage } from '../selectors/book.selectors';

@Injectable()
export class BookEffects {
  constructor(
    private actions$: Actions,
    private bookService: TodoService,
    private store: Store<any>
  ) {}
// @Effect()
// loadBooks$ = this.actions$.pipe(
//   ofType<LoadBooks>(LOAD_BOOKS),
//   mergeMap((action) => {
//     const params = action.payload.params;
//     return this.bookService.getBooks().pipe(
//       map((books: Book[]) => new LoadBooksSuccess({ books })),
//       catchError(error => of(new LoadBooksFailure(error)))
//     );
//   })
// );
@Effect()
loadBooks$ = this.actions$.pipe(
  ofType<LoadBooks>(LOAD_BOOKS),
  withLatestFrom(this.store.select(getBooksByPage)),
  mergeMap(([action, booksByPage]) => {
    const page = action.payload.page;
    const params = action.payload.params;

  if(page == 1)
    {
        if (booksByPage[page]) {
            // If page data already exists in the store, don't make the API call
            return of(new LoadBooksSuccess({ books: booksByPage[page], page }));
          } else {
            // If page data doesn't exist, make the API call
            return this.bookService.getBooks({ ...params, page }).pipe(
              map((books: Book[]) => new LoadBooksSuccess({ books, page })),
              catchError(error => of(new LoadBooksFailure(error)))
            );
          }
    }
    else
    {
        if (booksByPage[page]) {
            // If page data already exists in the store, don't make the API call
            return of(new LoadBooksSuccess({ books: booksByPage[page], page }));
          } else {
            // If page data doesn't exist, make the API call
            return this.bookService.getProducts({ ...params, page }).pipe(
              map((books: Book[]) => new LoadBooksSuccess({ books, page })),
              catchError(error => of(new LoadBooksFailure(error)))
            );
          }
    }
  })
);
}
