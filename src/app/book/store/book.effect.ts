import { BookService } from '../book.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import {
  booksFetchAPISuccess,
  invokeBooksAPI,
  invokeSaveNewBookAPI,
  saveNewBookAPISucess,
  setAPIStatus,
  updateBookApi,
  updateBookApiSucess,
} from './book.actions';
import { selectBooks } from './book.selector';
import { Appstate } from './book';
@Injectable()
export class BooksEffect {
  constructor(
    private actions$: Actions,
    private booksService: BookService,
    private store: Store,
    private appStore: Store<Appstate>
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

  saveNewBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeSaveNewBookAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.booksService.create(action.newBook).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return saveNewBookAPISucess({ newBook: data });
          })
        );
      })
    );
  });

  updateBookAPI$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(updateBookApi),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.booksService.update(action.updateBook).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return updateBookApiSucess({ updateBook: data });
          })
        );
      })
    );
  });
}
