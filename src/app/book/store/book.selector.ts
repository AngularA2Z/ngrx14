import { createFeatureSelector } from '@ngrx/store';
import { Books } from './book';
 
export const selectBooks = createFeatureSelector<Books[]>('mybooks');