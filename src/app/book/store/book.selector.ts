import { createFeatureSelector } from '@ngrx/store';
import { Appstate, Books } from './book';
 
export const selectBooks = createFeatureSelector<Books[]>('mybooks');

export const selectAppState = createFeatureSelector<Appstate>('appState');