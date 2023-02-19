import { createReducer, on } from '@ngrx/store';
import { Books } from './book';
import {
  booksFetchAPISuccess,
  saveNewBookAPISucess,
  // setAPIStatus,
  updateBookApiSucess,
} from './book.actions';

export const initialState: ReadonlyArray<Books> = [];

export const BookReducer = createReducer(
  initialState,
  on(booksFetchAPISuccess, (state, { allBooks }) => {
    return allBooks;
  }),

  on(saveNewBookAPISucess, (state, { newBook }) => {
    let newState = [...state];
    newState.unshift(newBook);
    return newState;
  }),

  on(updateBookApiSucess,(state, { updateBook }) => {
    let newState = state.filter((_) => _.id != updateBook.id);
    newState.unshift(updateBook);
    return newState;
  })
);

// export const initialStateAppstate: Readonly<Appstate> = {
//   apiResponseMessage: '',
//   apiStatus: '',
// };

// export const appReducer = createReducer(
//   initialStateAppstate,
//   on(setAPIStatus, (state, { apiStatus }) => {
//     return {
//       ...state,
//       ...apiStatus,
//     };
//   })
// );
