import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})

export class AuthorComponent implements OnInit {
  authorForm: FormGroup;
  titulo = 'Author';
  id: string | null;
  
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _authorService: AuthorService,
              private aRouter: ActivatedRoute) { 
    this.authorForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarAuthor() {
    const AUTHOR: Author = {
      firstName: this.authorForm.get('firstName')?.value,
      lastName: this.authorForm.get('lastName')?.value,
    }

    if(this.id !== null){
      // Edit Author
      this._authorService.editAuthor(this.id, AUTHOR).subscribe(data => {
        this.toastr.info('El libro fue registrado con exito!', 'Libro Actualizado!');
        this.router.navigate(['/books']);
      }, error => {
      console.log(error);
      this.authorForm.reset();
    })

    } else {
      // Add Author
      console.log(AUTHOR);
      this._authorService.saveAuthor(AUTHOR).subscribe(data => {
      this.toastr.success('El libro fue registrado con exito!', 'Libro Registrado!');
      this.router.navigate(['/books']);
    }, error => {
      console.log(error);
      this.authorForm.reset();
    })
    }

  }

  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar author';
      this._authorService.obtainAuthor(this.id).subscribe(data => {
        this.authorForm.setValue({
          firstName: data.firstName,
          lastName: data.lastName,
        })
      })
    }
  }

}
