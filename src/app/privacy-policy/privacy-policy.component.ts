import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

declare const SEO:any;

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private router:Router,
    private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit(): void {
  
  
    this.titleService.setTitle(SEO.PrivacyPolicy.MetaTitle);

    this.metaTagService.updateTag(
      { name:'description', content: SEO.PrivacyPolicy.Description }
    );

    this.metaTagService.updateTag(
      { name: 'keywords', content: SEO.PrivacyPolicy.Keywords}
    );

    this.metaTagService.updateTag(
      { name: 'title',property: "og:title", content:SEO.PrivacyPolicy.MetaTag }
    );
    
    this.metaTagService.updateTag(
      { property: "og:title", content:SEO.PrivacyPolicy.MetaTag }
    );
    
    this.metaTagService.updateTag(
      { property : "og:url", content:SEO.PrivacyPolicy.MetaUrl}
    );
    
  
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
