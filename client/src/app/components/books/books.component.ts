import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  listBooks: Book[] = [];
  
  constructor(private _bookService: BookService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtainBooks();
  }


  obtainBooks() {
    this._bookService.getBooks().subscribe(data => {
      console.log(data);
      this.listBooks = data;
    }, error => {
      console.log(error);
    })
  }

  deleteBook(id: any) {
    this._bookService.deleteBook(id).subscribe(data => {
      this.toastr.error('El libro fue eliminado con exito' ,'Book Eliminado');
      this.obtainBooks();
    }, error => {
      console.log(error);
    })
  }

}
