import {createAction , props } from '@ngrx/store' ;
import {Book } from '../books.model';

// Actions defined 

export const  addBook = createAction (
  '[BOOK LIST] Add Book' ,
  props <{bookId : string }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId: string }>()
);


export const retrievedBookList = createAction (
  '[BOOK COLLECTION] Retrieve book Success' ,
  props<{books : ReadonlyArray<Book>}>() 
); 



// export const addBook = createAction(
//   '[Book List] Add Book',
//   props<{ bookId: string }>()
// );
 
// export const removeBook = createAction(
//   '[Book Collection] Remove Book',
//   props<{ bookId: string }>()
// );
 
// export const retrievedBookList = createAction(
//   '[Book List/API] Retrieve Books Success',
//   props<{ books: ReadonlyArray<Book> }>()
// );