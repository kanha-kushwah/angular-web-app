import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoaderService } from './common/loader.service';
import * as AOS from 'aos';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'levitating';
  loader:any;
  currentRoute:any;

  constructor(public loaderService:LoaderService, public router:Router,public loaderservice:LoaderService){
    this.loader = loaderService;
  }

  ngOnInit() {

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      this.currentRoute = event;
      this.loaderService.currentUrl = this.currentRoute.url;

    });

    this.router.events.subscribe(x => {
      if(x instanceof NavigationEnd)
      {
        window.scrollTo(0, 0);
      }
    });
    AOS.init();
  }
}
