import { Component } from '@angular/core';
import { LoaderService } from './common/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'levitating';
  loader:any;
  
  constructor(public loaderService:LoaderService){
    this.loader = loaderService;
  }
}
