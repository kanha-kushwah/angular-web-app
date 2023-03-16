import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoaderService } from './common/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'levitating';
  loader:any;
  
  constructor(public loaderService:LoaderService, public router:Router){
    this.loader = loaderService;
  }

  ngOnInit() {
    this.router.events.subscribe(x => {
      if(x instanceof NavigationEnd)
      {
        window.scrollTo(0, 0);
      }
    });
  }
}
