import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';

@Injectable()

export class BookServices{

    public url: string;
    readonly ROOT_URL = 'http://booksapi.test/api/books';
    data: Observable<any>;

	constructor(private _http: HttpClient){
    }
    
    getBookBy(id_book) {
        //let json = JSON.stringify(user_to_login);
        //let params = json;
        //let headers = new Headers({'Content-Type': 'application/json'});
        //let headers = new HttpHeaders().set('Authorization', 'auth-token');
        return this._http.get(this.ROOT_URL+'/'+id_book/*, params, {headers: headers}*/).pipe(map(res => res));

    }

    getBook() {
        return this._http.get(this.ROOT_URL /*, params, {headers: headers}*/).pipe(map(res => res));
        //this.posts = this.http.get(this.ROOT_URL /*+ '/posts', { params, headers }*/)    
        //let params = new HttpParams().set('userId', '1');
        //let headers = new HttpHeaders().set('Authorization', 'auth-token');
      }
    
      getEdit(data) {
        //return this._http.post(this.ROOT_URL + '/posts', json);
      }

}