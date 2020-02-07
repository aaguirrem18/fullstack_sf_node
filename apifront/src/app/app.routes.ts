import { NgModule } from '@angular/core';
import { Routes, RouterModule, NavigationEnd } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UserComponent } from './components/user/user.component';
import { ErrorComponent } from './components/error/error.component';
import { BookeditComponent } from './components/bookedit/bookedit.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './_services/auth.service';

const APP_ROUTES: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthService]},
  { path: 'home', component: HomeComponent, canActivate: [AuthService]},
  { path: 'books', component: BooksComponent , canActivate: [AuthService]},
  { path: 'books/:id', component: BookComponent , canActivate: [AuthService]},
  { path: 'books/:id/edit', component: BookeditComponent , canActivate: [AuthService]},
  { path: 'categories', component: CategoriesComponent , canActivate: [AuthService]},
  { path: 'account', component: UserComponent , canActivate: [AuthService]},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
