import {retrievedBookList  } from './book.action';
import {createReducer ,on } from '@ngrx/store' ; 
import {Book } from '../books.model';


export const initialState: ReadonlyArray<Book> = [];


export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);