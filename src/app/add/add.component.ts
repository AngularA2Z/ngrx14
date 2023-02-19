import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import {  Books } from '../book/store/book';
import { invokeSaveNewBookAPI } from '../book/store/book.actions';
// import { selectAppState } from '../book/store/book.selector';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(
    private store: Store,
    // private appStore: Store<Appstate>,
    private router: Router
  ) {}

  bookForm: Books = {
    id: 0,
    author: '',
    name: '',
    cost: 0,
  };

  ngOnInit(): void {}

  save() {
    this.store.dispatch(invokeSaveNewBookAPI({ newBook: this.bookForm }));
    this.router.navigate(['/']);
    // let apiStatus$ = this.appStore.pipe(select(selectAppState));
    // apiStatus$.subscribe((apState) => {
    //   if (apState.apiStatus == 'success') {
    //     this.appStore.dispatch(
    //       setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
    //     );
    //     this.router.navigate(['/']);
    //   }
    // });
  }
}
