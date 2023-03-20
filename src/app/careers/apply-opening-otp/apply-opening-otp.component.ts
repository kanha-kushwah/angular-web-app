import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxService, API } from 'src/app/common/levitating.ajaxsevice';

@Component({
  selector: 'app-apply-opening-otp',
  templateUrl: './apply-opening-otp.component.html',
  styleUrls: ['./apply-opening-otp.component.scss']
})
export class ApplyOpeningOtpComponent implements OnInit {
  otp:any;
  api = new API();
  isOtpValid = false;
  positionDetail1:any;
  
  constructor(public router:Router, public location:Location,
              public ajaxservice:AjaxService) { }

  ngOnInit(): void {
    this.positionDetail1 = JSON.parse(localStorage.getItem('positionDetail') || '{}');
  }

  getOtp(){
  console.log('otp length',this.otp.length)
  if(this.otp.length == 6)
  {
  // this.router.navigate(['/filldetails']);
  //let passcode = this.otp;
  const formData = new FormData();
  formData.append('passcode',this.otp);
  
  this.ajaxservice.postData(this.api.OtpVerification,formData)
  .subscribe((data1)=>{
   if(data1.status == 200)
   {
    let data = data1;
    this.otp = '';
   /* let data = {
    "candidateId": 152,
    "candidateName": "abc",
    "candidateEmail": "xyz@ab",
    "candidateCode": "333569",
    "logDatetime": "2023-03-14T09:57:58.796+00:00",
    "logState": 1
   } */
   
   localStorage.setItem('userDetails',JSON.stringify(data));

   this.isOtpValid = false;
   this.router.navigate(['/filldetails']);
   }
   else{
   this.otp = '';
   this.isOtpValid = true;
   }
  })
  this.otp = '';
  }

  }

  back(){
    this.location.back();
   }
 

}
