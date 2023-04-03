import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

declare const SEO:any;

@Component({
  selector: 'app-ters-condition',
  templateUrl: './ters-condition.component.html',
  styleUrls: ['./ters-condition.component.scss']
})
export class TersConditionComponent implements OnInit {

  constructor(private router:Router,
    private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit(): void {

    this.titleService.setTitle(SEO.TermsofService.MetaTitle);

    this.metaTagService.updateTag(
      { name:'description', content: SEO.TermsofService.Description }
    );

    this.metaTagService.updateTag(
      { name: 'keywords', content: SEO.TermsofService.Keywords}
    );

    this.metaTagService.updateTag(
      { name: 'title',property: "og:title", content:SEO.TermsofService.MetaTag }
    );
    
    this.metaTagService.updateTag(
      { property: "og:title", content:SEO.TermsofService.MetaTag }
    );
    
    this.metaTagService.updateTag(
      { property : "og:url", content:SEO.TermsofService.MetaUrl}
    );

  }

  goToPart(fragment:any){
    this.router.navigateByUrl('terms#'+ fragment);

  }
  goToHome(fragment:any){
    this.router.navigateByUrl('home#'+ fragment);

  }

}
