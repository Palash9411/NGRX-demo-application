import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GoogleBooksService } from './book-list/book.service';
import { addBook, removeBook, retrievedBookList } from './book-list/state/book.action';
import { selectBookCollection, selectBooks } from './book-list/state/books.selectors';
 


 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);
 
  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }
 
  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }
 
  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {}
 
  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }
}