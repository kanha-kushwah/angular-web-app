import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { LoaderService } from 'src/app/common/loader.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public loaderservice:LoaderService,public router:Router,) { }
  elem:any;
 
  ngOnInit(): void {
  
    console.log(' loaderservice.currentUrl',this.loaderservice.currentUrl)
     
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000
    });

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



  blue = false;
  white = true;
ngAfterContentInit() {
    (() => {
      const nav:any = document.getElementById('myHeader');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          nav.classList.add("fixed-top");
          document.body.style.paddingTop = '10';
          this.blue = true;
          this.white = false;
        } else {
          nav.classList.remove("fixed-top");
          document.body.style.paddingTop = '0';
          console.log(scroll)
          this.white = true;
          this.blue = false;
        }
      });
    })
    ()
  }

  goToPart(fragment:any){
    this.router.navigateByUrl('home#'+ fragment);
  }

}


