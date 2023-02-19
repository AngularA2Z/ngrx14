import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BooksEffect } from './book/store/book.effect';
import { appReducer, BookReducer } from './book/store/book.reducer';
import { PComponent } from './p/p.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookComponent,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([BooksEffect]),
    StoreModule.forFeature('mybooks', BookReducer),
    StoreModule.forRoot({ appState: appReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
