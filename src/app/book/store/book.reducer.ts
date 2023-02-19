import { createReducer, on} from "@ngrx/store";
import { Books } from "./book";
import { booksFetchAPISuccess } from "./book.actions";
 
export const initialState: ReadonlyArray<Books> = [];
 
export const BookReducer = createReducer(
    initialState,
    on(booksFetchAPISuccess, (state, { allBooks }) => {
        return allBooks;
      })
);