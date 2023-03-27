import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  goToHome(fragment:any){
    this.router.navigateByUrl('home#'+ fragment);

  }

}
