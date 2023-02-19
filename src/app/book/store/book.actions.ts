import { createAction, props } from '@ngrx/store';
import { Books } from './book';
 
export const invokeBooksAPI = createAction(
  '[Books API] Invoke Books Fetch API'
);
 
export const booksFetchAPISuccess = createAction(
  '[Books API] Fetch API Success',
  props<{ allBooks: Books[] }>()
);