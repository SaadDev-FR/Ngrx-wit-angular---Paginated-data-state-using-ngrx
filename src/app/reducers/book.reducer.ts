import { BookState, initialBookState } from '../state/book.state';
import { BookActions, LOAD_BOOKS, LOAD_BOOKS_SUCCESS, LOAD_BOOKS_FAILURE } from '../action/book.action';

export function bookReducer(state: BookState = initialBookState, action: BookActions): BookState {
    switch (action.type) {
      case LOAD_BOOKS:
        return {
          ...state,
          currentPage: action.payload.page
        };
      case LOAD_BOOKS_SUCCESS:
        return {
          ...state,
          booksByPage: {
            ...state.booksByPage,
            [action.payload.page]: action.payload.books
          }
        };
      case LOAD_BOOKS_FAILURE:
        return {
          ...state,
          // Optionally handle error state, leaving booksByPage unchanged
        };
      default:
        return state;
    }
  }
// export function bookReducer(state: BookState = initialBookState, action: BookActions): BookState {
//     switch (action.type) {
//       case LOAD_BOOKS:
//         return {
//           ...state,
//           currentPage: action.payload.page
//         };
//       case LOAD_BOOKS_SUCCESS:
//         return {
//           ...state,
//           books: action.payload.books
//         };
//       case LOAD_BOOKS_FAILURE:
//         return {
//           ...state,
//           books: []
//         };
//       default:
//         return state;
//     }
//   }