import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AjaxService, API } from '../common/levitating.ajaxsevice';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent implements OnInit {
  contactDetails!:FormGroup;
  isSubmitted = false;
  api = new API();
  joinValue:any="Join Us";
  title:any;
  captcha = false;

  constructor(public fb:FormBuilder, public ajaxservice:AjaxService, public router:Router) { }

  ngOnInit(): void { 
    let value = localStorage.getItem('join');
    this.joinValue = value;

    if(this.joinValue == '1')
    {
     this.title = "JOIN ME ON MY JOURNEY";
    }
    else{
      this.title = "Join Us";
    }

    this.contactDetails = this.fb.group({
      name: ['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$')]],
      position : ['',[Validators.required]],
      description:['']
    })
  }

  get f(){
    return this.contactDetails.controls;
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
      if(this.captcha){
      let contactData = {
        candidateName:this.contactDetails.value.name,
        candidateEmail:this.contactDetails.value.email,
        logState: "1",
        candidateDesrciption:this.contactDetails.value.description
      }
      // this.router.navigate(['/']);
      this.ajaxservice.postData(this.api.contactDetails,contactData)
      .subscribe((data:any)=>{
        this.router.navigate(['/thankyou']);
        this.contactDetails.reset();
      })
    }
    }
  }

}
