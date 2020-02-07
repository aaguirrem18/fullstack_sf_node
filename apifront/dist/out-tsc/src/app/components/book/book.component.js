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
import { ActivatedRoute } from "@angular/router";
import { from } from 'rxjs';
var BookComponent = /** @class */ (function () {
    /*newPost: Observable<any>;*/
    function BookComponent(http, route) {
        this.http = http;
        this.route = route;
        this.ROOT_URL = 'http://booksapi.test/api/books';
    }
    BookComponent.prototype.getBookBy = function () {
        //this.function = true;
        var id = this.id = this.route.snapshot.paramMap.get("id");
        console.log(this.ROOT_URL + '/' + id);
        this.asdasdas = this.http.get(this.ROOT_URL + '/' + id /*+ '/posts', { params, headers }*/);
        //this.posts = this.http.get(this.ROOT_URL /*+ '/posts', { params, headers }*/)    
        //let params = new HttpParams().set('userId', '1');
        //let headers = new HttpHeaders().set('Authorization', 'auth-token');
        var data = from(fetch('/api/endpoint'));
        console.log(this.asdasdas);
        var myArrStr = JSON.stringify(this.asdasdas);
        // "["bacon","letuce","tomatoes"]"
        console.log(JSON.parse(myArrStr));
        // ["bacon","letuce","tomatoes"]
    };
    BookComponent.prototype.ngOnInit = function () {
        this.getBookBy();
    };
    BookComponent = __decorate([
        Component({
            selector: 'app-book',
            templateUrl: './book.component.html',
            styleUrls: ['./book.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, ActivatedRoute])
    ], BookComponent);
    return BookComponent;
}());
export { BookComponent };
//# sourceMappingURL=book.component.js.map