import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { AuthorComponent } from './components/author/author.component';

// componentes
import { BooksComponent } from './components/books/books.component';
import { AuthorsComponent } from './components/authors/authors.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'books', component: BooksComponent },
  { path: 'book', component: BookComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'editar-author/:id', component: AuthorComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule], providers: []})
export class AppRoutingModule { }
