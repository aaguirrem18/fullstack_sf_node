import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router"
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../_services/auth.service';
import { Auth } from '../../auth';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    access: boolean;
    message: string;
    form: FormGroup;
    data: any;
    cookieValue = 'UNKNOWN';
    readonly Login_URL = environment.apiUrl+'login_check';

    constructor(public fb: FormBuilder, private _http: HttpClient , private router: Router, private cookieService: CookieService, private _authServices: AuthService) {
      this.access = true;
      this.form = this.fb.group({email: [''],password: ['']});
    }

    submitForm() {

      let email = this.form.get('email').value;
      let pass = this.form.get('password').value;
      var json: Auth = {username: email, password: pass}
      let params = JSON.stringify(json);
      //console.log(params);
      let headers = new HttpHeaders().set('Content-Type','application/json');
      this._http.post(this.Login_URL, params, {headers: headers}).subscribe(
        (response) => { 
          //console.log(response),
          this.data = response;
          this._authServices.setSession(this.data.token);

          setTimeout(() => {
            this.router.navigate(['/home']);   
          }, 2000);

        },
        (error) => {this.access = false; this.message = error.error.message; console.log(error)}
      )
    }

    ngOnInit() {
    }

 
}
