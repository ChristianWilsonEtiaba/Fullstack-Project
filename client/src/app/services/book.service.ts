import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = 'http://localhost:4000/api/books/';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteBook(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveBook(book: Book): Observable<any> {
    return this.http.post(this.url, book);
  }

  obtainBook(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editBook(id: string, book: Book): Observable<any> {
    return this.http.put(this.url + id, book);
  }
}
