import { createReducer, on } from '@ngrx/store';
import { Books } from './book';
import {
  booksFetchAPISuccess,
  deleteBookAPISuccess,
  fetchApiCommentSuccess,
  saveNewBookAPISucess,
  updateBookApiSucess,
} from './book.actions';

export const initialState: ReadonlyArray<Books> = [];

export const initialComment: ReadonlyArray<any> =[];

export const CommentReducer = createReducer(
  initialComment,
  on(fetchApiCommentSuccess, (state,{allcomments})=>{
    return allcomments
  })
)

export const BookReducer = createReducer(
  initialState,
  on(booksFetchAPISuccess, (state, { allBooks }) => {
    return allBooks;
  }),

  on(saveNewBookAPISucess, (state, { newBook }) => {
    let newState = [...state,newBook];
    return newState;
  }),

  on(updateBookApiSucess,(state, { updateBook }) => {
    let newState = state.filter((_) => _.id != updateBook.id);
    return [...newState,updateBook];
  }),

  on(deleteBookAPISuccess, (state, { id }) => {
    let newState =state.filter((_) => _.id != id);
    return newState;
  })
);

