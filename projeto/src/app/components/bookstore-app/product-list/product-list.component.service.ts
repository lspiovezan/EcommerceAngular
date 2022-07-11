import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/Book';
import { Observable, of } from 'rxjs';

@Injectable()
export class BookService {
  private url = 'https://localhost:44382/api/bookstore';

  httpOptions = {
    Headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getBook() {
    return this.http.get(this.url);
  }

  getBookMock() {
    const livros = {
      id: 1,
      category: 'Romance',
      img: '../../../../assets/images/img1.jpg',
      quantity: 5,
      price: 12.5,
      name: 'Cinquenta tons de cinza',
    };
    return of(livros);
  }
}
