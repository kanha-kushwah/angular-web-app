import { Location } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AjaxService, API } from 'src/app/common/levitating.ajaxsevice';
import { ReCaptchaV3Service } from 'ng-recaptcha';

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
  lengthD:any=0;
  token: string|undefined;
  constructor(public fb:FormBuilder, public location:Location, public router:Router, public ajaxservice:AjaxService, private recaptchaV3Service: ReCaptchaV3Service) { }

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
      description:[''],
      recaptcha:['']
    })
  }
  // recaptcha:['',[Validators.required]]


  checkLength(){
    let count = this.fillDetails.value.description;
    this.lengthD = count.length;
     console.log('length',this.lengthD)
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


  // const formData = new FormData();
  this.isSubmitted = true;
  
  console.log('valueee',this.fillDetails)

  if(this.fillDetails.invalid)
  {
    this.isSubmitted = true;
  }else{
    this.isSubmitted = false;

    this.recaptchaV3Service.execute('importantAction')
        .subscribe((token: string) => {
          console.debug(`Token [${token}] generated`);
          this.ajaxservice.recaptcha(token)
          .subscribe((data:any)=>{
            console.log('recaptcha responce',data)
          })

        });


    let fullpath:any = this.fillDetails.value.file;
    let filename:any = fullpath.split('\\').pop().split('/').pop();
    
    // this.router.navigate(['/congrates']);

    /* let passData = {
      jobId:this.positionDetail1.id,
      candidateName:this.userDetails1.candidateName,
      candidateEmail: this.userDetails1.candidateEmail,
      candidatePhone: '',
      linkedinProfile: this.fillDetails.value.linkdinLink,
      resume:this.resume,
      professionalSummary:this.fillDetails.value.description      
    }


    const blobOverrides = new Blob([JSON.stringify(passData)], {
      type: 'application/json',
    }); */

  const formData = new FormData();
  formData.append('file',this.filedata);
  //formData.append('jobdetails',blobOverrides);
  formData.append('jobId',this.positionDetail1.id);
  formData.append('candidateName',this.userDetails1.candidateName);
  formData.append('candidateEmail',this.userDetails1.candidateEmail);
  formData.append('candidatePhone','');
  formData.append('linkedinProfile',this.fillDetails.value.linkdinLink);
  formData.append('resume',this.resume);
  formData.append('professionalSummary',this.fillDetails.value.description);
  formData.append('candidateID',this.userDetails1.candidateID);
  

  /* let params = new HttpParams();
  params.append('file', this.filedata);
  params.append('jobdetails',JSON.stringify(blobOverrides)); */

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
  this.router.navigate(['/congrates']);
  }

}
