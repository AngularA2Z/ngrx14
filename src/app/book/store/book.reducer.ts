import { createReducer, on} from "@ngrx/store";
import { Appstate, Books } from "./book";
import { booksFetchAPISuccess, setAPIStatus } from "./book.actions";
 
export const initialState: ReadonlyArray<Books> = [];
 
export const BookReducer = createReducer(
    initialState,
    on(booksFetchAPISuccess, (state, { allBooks }) => {
        return allBooks;
      })
);

export const initialStateAppstate: Readonly<Appstate> = {
  apiResponseMessage: '',
  apiStatus: '',
};
 
export const appReducer = createReducer(
  initialStateAppstate,
  on(setAPIStatus, (state, { apiStatus }) => {
    return {
      ...state,
      ...apiStatus
    };
  })
);