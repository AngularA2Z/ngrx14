import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { selectBooks } from './store/book.selector';
import { invokeBooksAPI } from './store/book.actions';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule,
    RouterModule,  
],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(private store: Store) {}
  books$ = this.store.pipe(select(selectBooks));

  ngOnInit(): void {
    this.store.dispatch(invokeBooksAPI());
  }

}
