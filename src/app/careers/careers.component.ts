import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

declare const SEO:any;

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  constructor( private titleService: Title,
    private metaTagService: Meta) { }

  ngOnInit(): void {


    this.titleService.setTitle(SEO.Careers.MetaTitle);

    this.metaTagService.updateTag(
      { name:'description', content: SEO.Careers.Description }
    );

    this.metaTagService.updateTag(
      { name: 'keywords', content: SEO.Careers.Keywords}
    );

    this.metaTagService.updateTag(
      { name: 'title', content:SEO.Careers.MetaTag }
    );

    this.metaTagService.updateTag(
      { property: "og:title", content:SEO.Careers.MetaTag }
    );
    
    this.metaTagService.updateTag(
      { property : "og:url", content:SEO.Careers.MetaUrl}
    );

  }

}
