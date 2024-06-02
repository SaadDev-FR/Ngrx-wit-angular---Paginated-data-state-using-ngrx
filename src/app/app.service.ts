import {Injectable} from '@angular/core';
import Todo from './app.model';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';


@Injectable()
export class TodoService {
  todoList: Todo[] = [];

  constructor(private http: HttpClient) {
  }

  getBooks(params: any):  Observable<Book[]> 
  {
   return this.http.get<Book[]>(`https://freetestapi.com/api/v1/books?limit=5`);
  }
  getProducts(params: any):  Observable<Book[]> 
  {
   return this.http.get<Book[]>(`https://fakestoreapi.com/products?limit=5`);
  }

  getAll(): Todo[] {
    return this.todoList;
  }

  get(name: string): Todo {
    return this.todoList.filter(todo => todo.name === name).pop();
  }

  add(todo: Todo): TodoService {
    const isExists = this.get(todo.name);
    if (isExists || todo.name === undefined || todo.name.trim() === '') {
      return;
    }

    this.todoList.push(todo);
    return this;
  }

  delete(name: string): TodoService {
    this.todoList = this.todoList.filter(todo => todo.name !== name);
    return this;
  }

  toggle(name: string): Todo {
    const todo = this.get(name);
    todo.isDone = !todo.isDone;
    return todo;
  }
}
