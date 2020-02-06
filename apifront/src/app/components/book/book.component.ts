import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BookServices } from "../book.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [BookServices]
})
export class BookComponent implements OnInit {

  id: any;
  data: any;
  error: boolean;

  constructor(private _bookServices:BookServices, private route: ActivatedRoute,private router: Router ) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  public callGet() {
    this._bookServices.getBookBy( this.id ).subscribe(
      response => {
        console.log(response);
        this.data = response;
        this.error = false;
      },
      error => {
        this.error = true;
        console.log('error');
      }
    )
  }
  

  ngOnInit() {
      this.callGet();
  }
}
