import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000
    });

  }

  goToJoin(){
  localStorage.setItem('join','1');  
  this.router.navigate(['/joinus']);
  }

  
}
