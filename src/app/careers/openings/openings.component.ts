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

  // myHtmlProperty = "<html> <body> <b>Technical Skills:</b> <ul> <li>REST APIs (Java)</li> <li>Rest API design patterns</li> <li>Web semantics and REST API</li> <li>Cloud-based infrastructures (AWS, Google Cloud, Azure, or Oracle Cloud)</li> <li>Serverless and microservices architectures</li> <li>Container-based architecture with Docker</li> <li>Agile methodologies</li> <li>Git</li> <li>Build pipelines and CI/CD tools</li> <li>Data structures and algorithms</li> <li>Object-oriented programming</li> <li>Modern design patterns</li> </ul> <b>Soft Skills:</b> <ul> <li>Problem-solving</li> <li>Attention to detail</li> <li>Time management</li> <li>Communication</li> <li>Teamwork</li> <li>Self-motivation</li> <li>Adaptability</li> <li>Collaborative work style</li> <li>Documentation</li> </ul> </body> </html>";
  getOpeningDetails(){
    //this.positionData = this.levitatingservice.allJobList;
    this.ajaxservice.getData(this.api.AllJobList)
    .subscribe((data:any)=>{
      this.positionData = data;
      
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
