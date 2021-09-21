import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  url = 'http://localhost:4000/api/authors/';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<any> {
    return this.http.get(this.url);
  }

  saveAuthor(author: Author): Observable<any> {
    return this.http.post(this.url, author);
  }

  obtainAuthor(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editAuthor(id: string, author: Author): Observable<any> {
    return this.http.put(this.url + id, author);
  }
}

