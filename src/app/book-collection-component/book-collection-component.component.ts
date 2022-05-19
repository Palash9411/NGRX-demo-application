import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book-list/books.model';

@Component({
  selector: 'app-book-collection-component',
  templateUrl: './book-collection-component.component.html',
  styleUrls: ['./book-collection-component.component.css']
})
export class BookCollectionComponentComponent implements OnInit {

  constructor() { }
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
  ngOnInit() {
  }

}