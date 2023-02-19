import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Appstate, Books } from './book';

export const selectBooks = createFeatureSelector<Books[]>('mybooks');

export const selectAppState = createFeatureSelector<Appstate>('appState');

export const selectBookById = (bookId: number) =>
  createSelector(selectBooks, (books: Books[]) => {
    var bookbyId = books.filter((_) => _.id == bookId);
    if (bookbyId.length == 0) {
      return null;
    }
    return bookbyId[0];
  });
