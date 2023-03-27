import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ters-condition',
  templateUrl: './ters-condition.component.html',
  styleUrls: ['./ters-condition.component.scss']
})
export class TersConditionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToPart(fragment:any){
    this.router.navigateByUrl('terms#'+ fragment);

  }
  goToHome(fragment:any){
    this.router.navigateByUrl('home#'+ fragment);

  }

}
