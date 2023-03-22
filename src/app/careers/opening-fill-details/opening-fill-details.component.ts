import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AjaxService, API } from 'src/app/common/levitating.ajaxsevice';

@Component({
  selector: 'app-opening-fill-details',
  templateUrl: './opening-fill-details.component.html',
  styleUrls: ['./opening-fill-details.component.scss']
})
export class OpeningFillDetailsComponent implements OnInit {
  fillDetails !: FormGroup;
  isSubmitted = false;
  resume : any = 'Upload Resume (only PDF):';
  userDetails1:any;
  positionDetail1:any;
  api = new API();

  constructor(public fb:FormBuilder, public location:Location, public router:Router, public ajaxservice:AjaxService) { }

  ngOnInit(): void {
    this.userDetails1 = JSON.parse(localStorage.getItem('userDetails') || '{}');
    this.positionDetail1 = JSON.parse(localStorage.getItem('positionDetail') || '{}');

    console.log('getting details',this.userDetails1,'====',this.positionDetail1)

    this.fillDetails = this.fb.group({
      position : [''],
      name: ['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}')]],
      linkdinLink:[''],
      file:['',[Validators.required]],
      description:['']
    })
  }

  filedata:any;
  fileChange(event:any){
  console.log('target file',event.target.files[0])
  this.filedata = event.target.files[0];

  console.log('file',this.filedata)
     
    let fullpath:any = this.fillDetails.value.file;
    let filename:any = fullpath.split('\\').pop().split('/').pop();
    this.resume = filename;
  }

  get f(){
    return this.fillDetails.controls;
  }

  back(){
   this.location.back();
  }

  submitDetails(){

  const formData = new FormData();
  formData.append('file',this.filedata);

  this.isSubmitted = true;
  
  console.log('valueee',this.fillDetails)

  if(this.fillDetails.invalid)
  {
    this.isSubmitted = true;
  }else{
    this.router.navigate(['/congrates']);
    this.isSubmitted = false;

    let fullpath:any = this.fillDetails.value.file;
    let filename:any = fullpath.split('\\').pop().split('/').pop();
    
    // this.router.navigate(['/congrates']);

    let passData = {
      jobId:this.positionDetail1.id,
      candidateName:this.userDetails1.candidateName,
      candidateEmail: this.userDetails1.candidateEmail,
      candidatePhone: '',
      linkedinProfile: this.fillDetails.value.linkdinLink,
      resume:this.resume,
      professionalSummary:this.fillDetails.value.description      
    }

    console.log('strig',JSON.stringify(passData))
    formData.append('jobdetails',JSON.stringify(passData));

    /* this.ajaxservice.postDataFile(this.api.jobApplication,passData,formData)
    .subscribe((data:any)=>{
      this.router.navigate(['/congrates']);
    }) */

    /* this.ajaxservice.uploadFile(this.api.jobApplication,formData)
    .subscribe((data:any)=>{
      this.router.navigate(['/congrates']);
    }) */

    this.ajaxservice.uploadMedia(this.api.jobApplication,formData)
    .subscribe((data:any)=>{
      this.router.navigate(['/congrates']);
    })

    //console.log('ppppppp',passData)
  }
  
  }

}
