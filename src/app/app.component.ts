import {Component, OnInit} from '@angular/core';
import {TodoService} from './app.service';
import Todo from './app.model';
import { Observable } from 'rxjs';
import { Book } from 'src/models/book.model';
import { Store } from '@ngrx/store';
import { LoadBooks } from './action/book.action';
import { getBooksForCurrentPage, getCurrentPage } from './selectors/book.selectors';
import { map } from 'rxjs/operators';

declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent  implements OnInit{
  books$: Observable<Book[]>;
  currentPage$: Observable<number>;
  constructor(private todoService: TodoService,private store: Store<any>) {
  }

  ngOnInit() {
    this.currentPage$ = this.store.select(getCurrentPage);
    this.loadPage(1); 
  }

  loadPage(page: number) {
    const params = { limit: 5 }; 
    this.store.dispatch(new LoadBooks({ params, page }));
    this.books$ = this.store.select(getBooksForCurrentPage);
  }
}