import { BookService } from "../book.service";
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { booksFetchAPISuccess, invokeBooksAPI } from "./book.actions";
import { selectBooks } from "./book.selector";
@Injectable()
export class BooksEffect {
  constructor(
    private actions$: Actions,
    private booksService: BookService,
    private store: Store
  ) {}
 
  loadAllBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeBooksAPI),
      withLatestFrom(this.store.pipe(select(selectBooks))),
      mergeMap(([, bookformStore]) => {
        if (bookformStore.length > 0) {
          return EMPTY;
        }
        return this.booksService
          .get()
          .pipe(map((data) => booksFetchAPISuccess({ allBooks: data })));
      })
    )
  );
}