import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {
  bookForm: FormGroup;
  titulo = 'Create book';
  id: string | null;
  
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _bookService: BookService,
              private aRouter: ActivatedRoute) { 
    this.bookForm = this.fb.group({
      book: ['', Validators.required],
      isbn: ['', Validators.required],
      author: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarBook() {
    const BOOK: Book = {
      name: this.bookForm.get('book')?.value,
      isbn: this.bookForm.get('isbn')?.value,
      author: this.bookForm.get('author')?.value,
    }

    if(this.id !== null){
      // Edit Book
      this._bookService.editBook(this.id, BOOK).subscribe(data => {
        this.toastr.info('El libro fue registrado con exito!', 'Libro Actualizado!');
        this.router.navigate(['/books']);
      }, error => {
      console.log(error);
      this.bookForm.reset();
    })
      
    } else {
      // Add Book
      console.log(BOOK);
      this._bookService.saveBook(BOOK).subscribe(data => {
      this.toastr.success('El libro fue registrado con exito!', 'Libro Registrado!');
      this.router.navigate(['/books']);
    }, error => {
      console.log(error);
      this.bookForm.reset();
    })
    }

  }

  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Edit book';
      this._bookService.obtainBook(this.id).subscribe(data => {
        this.bookForm.setValue({
          book: data.name,
          isbn: data.isbn,
          author: data.author,
        })
      })
    }
  }

}
