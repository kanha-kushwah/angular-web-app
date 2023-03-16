import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  elem:any

  ngOnInit(): void {

  }


  openNav()  {
    this.elem = document.getElementById("mySidenav");
    //this.elem.classList += "highlight";
    this.elem.classList.add("mystyle");
    
  }
  
  closeNav()  {
    this.elem = document.getElementById("mySidenav");
    this.elem.classList.remove("mystyle");
  }


ngAfterContentInit() {
    (() => {
      const nav:any = document.getElementById('myHeader');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 1) {
          nav.classList.add("fixed-top");
          document.body.style.paddingTop = '10';
        } else {
          nav.classList.remove("fixed-top");
          document.body.style.paddingTop = '0';
          console.log(scroll)
        }
      });
    })
    ()
  }

}


