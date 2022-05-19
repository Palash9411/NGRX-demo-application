import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../books.model';

@Component({
  selector: 'app-book-list-component',
  templateUrl: './book-list-component.component.html',
  styleUrls: ['./book-list-component.component.css']
})
export class BookListComponentComponent implements OnInit {

  constructor() { }
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
  ngOnInit() {
  }

}