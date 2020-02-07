import { Component,OnInit } from '@angular/core';
import { AuthService } from '../app/_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  logged: boolean;

  constructor(private _authServices: AuthService) {
    this.logged = false;
  }

  ngOnInit() {
    if(this._authServices.canActivate()){
      this.logged = true;
    }
  }

}
