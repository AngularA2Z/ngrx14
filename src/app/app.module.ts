import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BooksEffect } from './book/store/book.effect';
import { BookReducer } from './book/store/book.reducer';
import { PComponent } from './p/p.component';

@NgModule({
  declarations: [
    AppComponent,
    PComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookComponent,
    EffectsModule.forRoot([BooksEffect]),
    StoreModule.forFeature('mybooks', BookReducer),
    StoreModule.forRoot(BookReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
