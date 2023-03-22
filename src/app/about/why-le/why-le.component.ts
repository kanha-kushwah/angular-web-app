import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-why-le',
  templateUrl: './why-le.component.html',
  styleUrls: ['./why-le.component.scss']
})
export class WhyLEComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  goToJoin(){
    localStorage.setItem('join','1');  
    this.router.navigate(['/joinus']);
    }

}
