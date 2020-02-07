var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var CategoriesComponent = /** @class */ (function () {
    /*newPost: Observable<any>;*/
    function CategoriesComponent(http) {
        this.http = http;
        this.ROOT_URL = 'http://booksapi.test/api/categories';
    }
    CategoriesComponent.prototype.getCategorieBy = function () {
        //this.posts = this.http.get(this.ROOT_URL /*+ '/posts', { params, headers }*/)    
        //let params = new HttpParams().set('userId', '1');
        //let headers = new HttpHeaders().set('Authorization', 'auth-token');
    };
    CategoriesComponent.prototype.ngOnInit = function () {
        this.categories = this.http.get(this.ROOT_URL /*+ '/posts', { params, headers }*/);
    };
    CategoriesComponent = __decorate([
        Component({
            selector: 'app-categories',
            templateUrl: './categories.component.html',
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
export { CategoriesComponent };
//# sourceMappingURL=categories.component.js.map