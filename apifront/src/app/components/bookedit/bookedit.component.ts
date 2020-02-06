import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BookServices } from "../book.service";
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from '../../post';


@Component({
  selector: 'app-bookedit',
  templateUrl: './bookedit.component.html',
  //styleUrls: ['./bookedit.component.scss']
  providers: [BookServices]

})
export class BookeditComponent implements OnInit {

  readonly ROOT_URL = 'http://booksapi.test/api/books';
  
  id: any;
  books: any;
  error: boolean;
  newPost: Observable<any>
  result: any;

  constructor(private _bookServices:BookServices, private route: ActivatedRoute,private router: Router, private _http: HttpClient) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  public callGet() {
    this._bookServices.getBookBy( this.id ).subscribe(
      response => {
        //console.log(response);
        this.books = response;
        this.error = false;
      },
      error => {
        this.error = true;
        //console.log('error');
      }
    )
  }
  
    makePost() {

      var json: Post = {
        title: 'test',
        description: 'test',
        autor: 'test',
        anno: 2020,
        img: '',
        categorie: 'api/categorie/1',
      }

      // make it work!! 
      let params = JSON.stringify(json);
      let headers = new HttpHeaders().set('Content-Type','application/json');
      this.result = this._http.post(this.ROOT_URL, params, {headers: headers});
      
    }

  ngOnInit() {
      this.callGet();
  }
}
