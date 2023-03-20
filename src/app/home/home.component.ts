import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AjaxService, API } from '../common/levitating.ajaxsevice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 contactDetails!:FormGroup;
 isSubmitted = false;
 api = new API();
 captcha = false;

  constructor(public fb:FormBuilder, public ajaxservice:AjaxService, public router:Router) { }

  ngOnInit(): void {
    localStorage.setItem('join','0'); 
    this.contactDetails = this.fb.group({
      name: ['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}')]],
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
        this.contactDetails.reset();
        this.router.navigate(['/thankyou']);
      })
     }
    }
  }

}
