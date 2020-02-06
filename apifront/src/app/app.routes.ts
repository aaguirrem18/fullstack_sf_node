import { NgModule } from '@angular/core';
import { Routes, RouterModule, NavigationEnd } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UserComponent } from './components/user/user.component';
import { ErrorComponent } from './components/error/error.component';
import { BookeditComponent } from './components/bookedit/bookedit.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: BookComponent },
  { path: 'books/:id/edit', component: BookeditComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'account', component: UserComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
