import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToPart(fragment:any){
    this.router.navigateByUrl('privacy#'+ fragment);

  }
  goToHome(fragment:any){
    this.router.navigateByUrl('home#'+ fragment);

  }

  ngAfterContentInit() {
    (() => {
      const nav:any = document.getElementById('test');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
          nav.classList.add("fixed-sec");
          document.body.style.paddingTop = '10';
      
        } else {
          nav.classList.remove("fixed-sec");
          document.body.style.paddingTop = '0';
          console.log(scroll)
        }
      });
    })
    ()
  }

}
