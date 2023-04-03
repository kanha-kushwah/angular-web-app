import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { Meta, Title } from '@angular/platform-browser';

declare const SEO:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public router:Router,
    private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit(): void {

    this.titleService.setTitle(SEO.About.MetaTitle);

    this.metaTagService.updateTag(
      { name:'description', content: SEO.About.Description }
    );

    this.metaTagService.updateTag(
      { name: 'keywords', content: SEO.About.Keywords}
    );

    this.metaTagService.updateTag(
      { name: 'title',property: "og:title", content:SEO.About.MetaTag }
    );
    
    this.metaTagService.updateTag(
      { property: "og:title", content:SEO.About.MetaTag }
    );

    
    this.metaTagService.updateTag(
      { property : "og:url", content:SEO.About.MetaUrl}
    );
    
    
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
