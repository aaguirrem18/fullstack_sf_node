import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BookServices } from "../../_services/book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  //styleUrls: ['./books.component.scss']
  providers: [BookServices]

})

export class BooksComponent implements OnInit {

  books: any;
  error: boolean;

  constructor(private _bookServices:BookServices, private route: ActivatedRoute,private router: Router ) {
  }

 
  public callGet() {
    this._bookServices.getBook().subscribe(
      response => {
        console.log(response);
        this.books = response;
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
