import { BookService } from './product-list.component.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  bookService: BookService;
  livros: any;

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  ngOnInit(): void {
    // this.livros = this.bookService.getBookMock().subscribe((data) => {
    //   this.livros = data;
    // });

    this.livros = this.bookService.getBook().subscribe((data) => {
      this.livros = data;
    });
  }
}
