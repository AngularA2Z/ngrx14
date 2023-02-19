import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import {  Books } from '../book/store/book';
import { invokeSaveNewBookAPI } from '../book/store/book.actions';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(
    private store: Store,
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
  }
}
