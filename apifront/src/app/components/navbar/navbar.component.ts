import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logoutbutton: boolean;

  constructor(private _authServices: AuthService, private router: Router) {
      this.logoutbutton = false;

  }

  ngOnInit(){
    if(this._authServices.canActivate()){
      this.logoutbutton = true;
    } 
  }
 
  logout(){
    this._authServices.logout();

    setTimeout(() => {
      this.router.navigate(['/login']);   
    }, 1000);

  }


}
