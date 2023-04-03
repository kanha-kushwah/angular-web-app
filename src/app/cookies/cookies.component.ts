import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

declare const SEO:any;


@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

  constructor(private router:Router, private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit(): void {


    this.titleService.setTitle(SEO.Cookies.MetaTitle);

    this.metaTagService.updateTag(
      { name:'description', content: SEO.Cookies.Description }
    );

    this.metaTagService.updateTag(
      { name: 'keywords', content: SEO.Cookies.Keywords}
    );

    this.metaTagService.updateTag(
      { name: 'title', content:SEO.Cookies.MetaTag }
    );

    this.metaTagService.updateTag(
      { property: "og:title", content:SEO.Cookies.MetaTag }
    );
    
    this.metaTagService.updateTag(
      { property : "og:url", content:SEO.Cookies.MetaUrl}
    );

  }


  goToHome(fragment:any){
    this.router.navigateByUrl('home#'+ fragment);

  }

}
