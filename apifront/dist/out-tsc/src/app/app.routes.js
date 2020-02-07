var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UserComponent } from './components/user/user.component';
import { ErrorComponent } from './components/error/error.component';
var APP_ROUTES = [
    { path: 'home', component: HomeComponent },
    { path: 'books', component: BooksComponent },
    { path: 'book/:id', component: BookComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'account', component: UserComponent },
    //{ path: 'heroe/:id', component: CategoriesComponent },
    { path: '**', component: ErrorComponent },
];
var FeatureRoutingModule = /** @class */ (function () {
    function FeatureRoutingModule() {
    }
    FeatureRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(APP_ROUTES)],
            exports: [RouterModule]
        })
    ], FeatureRoutingModule);
    return FeatureRoutingModule;
}());
export { FeatureRoutingModule };
//# sourceMappingURL=app.routes.js.map