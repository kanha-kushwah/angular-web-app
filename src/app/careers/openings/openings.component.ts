import { Component, OnInit } from '@angular/core';
import { AjaxService, API } from 'src/app/common/levitating.ajaxsevice';
import { LevitatingService } from 'src/app/common/levitating.service';

@Component({
  selector: 'app-openings',
  templateUrl: './openings.component.html',
  styleUrls: ['./openings.component.scss']
})
export class OpeningsComponent implements OnInit {
  public api = new API();
  positionData:any[]=[];
  constructor(public ajaxservice:AjaxService,  public levitatingservice:LevitatingService) { }

  ngOnInit(): void {
    this.getOpeningDetails();
  }

  getOpeningDetails(){
    this.positionData = this.levitatingservice.allJobList;
    this.ajaxservice.getData(this.api.AllJobList)
    .subscribe((data:any)=>{

    })
  }

  appliJob(id:any,title:any){
   let applydata = {
    id : id,
    title : title
   }
   localStorage.setItem('positionDetail',JSON.stringify(applydata));
  }
}
