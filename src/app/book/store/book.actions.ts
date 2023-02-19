import { createAction, props } from '@ngrx/store';
import { Appstate, Books } from './book';
 
export const invokeBooksAPI = createAction(
  '[Books API] Invoke Books Fetch API'
);
 
export const booksFetchAPISuccess = createAction(
  '[Books API] Fetch API Success',
  props<{ allBooks: Books[] }>()
);

export const setAPIStatus = createAction(
  '[API] success or failure status',
  props<{apiStatus: Appstate}>()
);

export const invokeSaveNewBookAPI = createAction(
  '[Books API] Inovke save new book api',
  props<{ newBook: Books }>()
);
 
export const saveNewBookAPISucess = createAction(
  '[Books API] save new book api success',
  props<{ newBook: Books }>()
);

export const updateBookApi = createAction(
  '[Books Api] update book api',
  props<{updateBook: Books}>()
)
export const updateBookApiSucess = createAction(
  '[Books Api] update book api success',
  props<{updateBook: Books}>()
)