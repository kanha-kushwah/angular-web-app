import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-test-congrates',
  templateUrl: './test-congrates.component.html',
  styleUrls: ['./test-congrates.component.scss']
})
export class TestCongratesComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
    //this.route.navigate(['/openings']);
  }

  

}
