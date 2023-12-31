import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AjaxService, API } from 'src/app/common/levitating.ajaxsevice';
import { LevitatingService } from 'src/app/common/levitating.service';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.scss']
})
export class CongratulationsComponent implements OnInit {
  api = new API();
  isSubmitted = false;
  userDetail !: FormGroup;
  latitude:any;
  longitude:any;
  token: string|undefined;
  constructor(public levitservice:LevitatingService,
              public ajaxservice:AjaxService, public fb:FormBuilder, public router:Router) {
                this.token = undefined;
               }

  ngOnInit(): void {
    this.getLatLong();
    this.userDetail = this.fb.group({
      name: ['',Validators.required],
      email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}')]],
      recaptcha:['',[Validators.required]]
    })
  }
  // recaptcha:['',[Validators.required]]

  get f(){
    return this.userDetail.controls;
  }

  getLatLong(){
    navigator.geolocation.getCurrentPosition(resp => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      })
  }


  submitAns(){
  this.isSubmitted = true;

  console.log('valueee',this.userDetail)
  if(this.userDetail.invalid)
  {
    this.isSubmitted = true;
  }else{
    this.isSubmitted = false;
    // this.router.navigate(['/openings']);

    /* this.recaptchaV3Service.execute('importantAction')
        .subscribe((token: string) => {
          console.debug(`Token [${token}] generated`);
          this.ajaxservice.recaptcha(token)
          .subscribe((data:any)=>{
            console.log('recaptcha responce',data)
          })
        }); */

  let data = {
    form_id: "1",
    account_Id : "1",
    logState:"1",
    form_name: "Career Questions",
    candidate_name: this.userDetail.value.name,
    candidate_email: this.userDetail.value.email,
    candidate_ID : "",
    latitude: this.latitude,
    longitude: this.longitude,
    gps_accuracy: "",
    submitted_data: this.levitservice.submitted_data
  }

  console.log('valueee',data)

  this.ajaxservice.postData(this.api.submit_ans,data)
  .subscribe((data:any)=>{
    // this.router.navigate(['/openings']);
    this.router.navigate(['/testCongrates']);

    
  })
    
  }


  }


}
