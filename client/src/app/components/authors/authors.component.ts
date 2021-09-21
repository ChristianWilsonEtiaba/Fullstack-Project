import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  listAuthors: Author[] = [];

  constructor(private _authorService: AuthorService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtainAuthors();
  }

  obtainAuthors() {
    this._authorService.getAuthors().subscribe(data => {
      console.log(data);
      this.listAuthors = data;
    }, error => {
      console.log(error);
    })
  }

}
