import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  constructor(public location:Location, public router:Router) { }

  ngOnInit(): void {
  }

  back(){
  //this.location.back();
  this.router.navigate(['/']);
  }

}
