import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AjaxService, API } from '../common/levitating.ajaxsevice';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent implements OnInit {
  contactDetails!:FormGroup;
  isSubmitted = false;
  api = new API();
  joinValue:any="JOIN US";
  title:any;
  captcha = false;
  token: string|undefined;
  lengthD:any=0;
  constructor(public fb:FormBuilder, public ajaxservice:AjaxService, public router:Router,private recaptchaV3Service: ReCaptchaV3Service) { }

  ngOnInit(): void { 
    let value = localStorage.getItem('join');
    this.joinValue = value;

    if(this.joinValue == '1')
    {
     this.title = "JOIN ME";
    }
    else{
      this.title = "JOIN US";
    }

    this.contactDetails = this.fb.group({
      name: ['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$')]],
      position : ['',[Validators.required]],
      description:[''],
      recaptcha:['']
    })
  }
  // recaptcha:['',[Validators.required]]

  get f(){
    return this.contactDetails.controls;
  }

   checkLength(){
    let count = this.contactDetails.value.description;
    this.lengthD = count.length;
     console.log('length',this.lengthD)
  }

  checkValue(event:any){
    console.log('check value',event.target.checked)
    this.captcha = event.target.checked;
  }

  ngOnDistroy(){
    localStorage.removeItem('join');
  }

  submitDetails(){
    console.log('form',this.contactDetails)

    if(this.contactDetails.invalid)
    {
      this.isSubmitted = true;
    }else{
      this.isSubmitted = false;
      // if(this.captcha){

      this.recaptchaV3Service.execute('importantAction')
        .subscribe((token: string) => {
          console.debug(`Token [${token}] generated`);
          this.ajaxservice.recaptcha(token)
          .subscribe((data:any)=>{
            console.log('recaptcha responce',data)
          })

        });

      let contactData = {
        candidateName:this.contactDetails.value.name,
        candidateEmail:this.contactDetails.value.email,
        logState: "1",
        candidateDesrciption:this.contactDetails.value.description,
        submitFrom:this.title
      }
      // this.router.navigate(['/']);
      this.ajaxservice.postData(this.api.contactDetails,contactData)
      .subscribe((data:any)=>{
        this.router.navigate(['/thankyou']);
        this.contactDetails.reset();
      })
       // }
    }
  }

}
