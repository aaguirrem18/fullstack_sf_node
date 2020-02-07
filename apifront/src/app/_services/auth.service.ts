import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { Auth } from '../auth';
import { CookieService } from 'ngx-cookie-service';
import { Router, CanActivate } from '@angular/router';

@Injectable()

export class AuthService {

    //public url: string;
    //readonly Login_URL = 'http://localhost/fullstack_sf_node/booksapi/public/api/login_check';
    //data: Observable<any>;
    cookieValue = 'UNKNOWN';

    constructor(private _http: HttpClient, private cookieService: CookieService, private router: Router ) {

    }
        
    setSession(token: string) {
        this.cookieService.set( 'jwtBearerToken', token );
    }  

    logout() {
        this.cookieService.delete('jwtBearerToken');        
    }

    canActivate() {

        this.cookieValue = this.cookieService.get('jwtBearerToken');
        //console.log(this.cookieValue);
        if (this.cookieValue != "") {
            return true;
        }else{
            this.router.navigate(['login']);
            return false;
        }
    }

}