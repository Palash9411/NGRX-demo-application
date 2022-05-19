import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { booksReducer } from './book-list/state/books.reducer';
import { collectionReducer } from './book-list/state/collection.reducer';
import { StoreModule } from '@ngrx/store';
import { BookListComponentComponent } from './book-list/book-list-component/book-list-component.component';
import { BookCollectionComponentComponent } from './book-collection-component/book-collection-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpClientModule,
    FormsModule ,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer })
     ],
  declarations: [ AppComponent, HelloComponent ,BookListComponentComponent,BookCollectionComponentComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
