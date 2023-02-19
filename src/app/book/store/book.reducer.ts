import { createReducer } from "@ngrx/store";
import { Books } from "./book";
 
export const initialState: ReadonlyArray<Books> = [];
 
export const BookReducer = createReducer(
    initialState
);