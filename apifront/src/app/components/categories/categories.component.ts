import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  //styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  readonly ROOT_URL = 'http://booksapi.test/api/categories';

  categories: any;
  /*newPost: Observable<any>;*/

  constructor(private http: HttpClient) {}

  getCategorieBy() {
    //this.posts = this.http.get(this.ROOT_URL /*+ '/posts', { params, headers }*/)    
    //let params = new HttpParams().set('userId', '1');
    //let headers = new HttpHeaders().set('Authorization', 'auth-token');
  }


  ngOnInit() {
    this.categories = this.http.get(this.ROOT_URL /*+ '/posts', { params, headers }*/)    

  }

}
