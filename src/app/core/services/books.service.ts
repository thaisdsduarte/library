import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from '../interfaces/books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  url = 'http://localhost:3000/livros';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  listBooks(): Observable<Books[]> {
    return this.httpClient.get<Books[]>(this.url).pipe();
  }

  getBookById(bookId: number): Observable<any> {
    return this.httpClient.get<any>(this.url+'/'+bookId).pipe();
  }

  createBook(book: any): Observable<any> {
    return this.httpClient.post<any>(this.url, JSON.stringify(book), this.httpOptions).pipe();
  }

  updateBook(book: any, bookId: number): Observable<any> {
    return this.httpClient.put<any>(this.url+'/'+bookId, JSON.stringify(book), this.httpOptions).pipe();
  }

  deleteBook(bookId: number): Observable<any> {
    return this.httpClient.delete<any>(this.url+'/'+bookId, this.httpOptions).pipe();
  }
}
