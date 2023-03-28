import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AjaxService, API } from '../common/levitating.ajaxsevice';
import { Directive, ElementRef, HostListener } from '@angular/core';
import * as AOS from 'aos';


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
 lengthD:any=0;
 token: string|undefined;
  constructor(public fb:FormBuilder, public ajaxservice:AjaxService, public router:Router,private el: ElementRef) {  this.token = undefined; }

  ngOnInit(): void {
    localStorage.setItem('join','0'); 
    this.contactDetails = this.fb.group({
      name: ['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}')]],
      position : ['',[Validators.required]],
      description:[''],
      recaptcha:['',[Validators.required]]
    })

    AOS.init({
      easing: 'ease-out-back',
      duration: 1000
    });

  }

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


  submitDetails(){
    console.log('form',this.contactDetails)

    if(this.contactDetails.status == "INVALID")
    {
      this.isSubmitted = true;
    }else{
      this.isSubmitted = false;

    
       /*  this.recaptchaV3Service.execute('importantAction')
        .subscribe((token: string) => {
          console.debug(`Token [${token}] generated`);
          this.ajaxservice.recaptcha(token)
          .subscribe((data:any)=>{
            console.log('recaptcha responce',data)
          })

        }); */
      

      // if(this.captcha){
        /* if (this.contactDetails.invalid) {
          for (const control of Object.keys(this.contactDetails.controls)) {
            this.contactDetails.controls[control].markAsTouched();
          }
          return;
        }else{ */
      let contactData = {
        candidateName:this.contactDetails.value.name,
        candidateEmail:this.contactDetails.value.email,
        logState: this.contactDetails.value.position,
        candidateDesrciption:this.contactDetails.value.description,
        submitFrom:'homePage'
      }

      // this.router.navigate(['/']);
      
      this.ajaxservice.postData(this.api.contactDetails,contactData)
      .subscribe((data:any)=>{
        this.contactDetails.reset();
        this.router.navigate(['/thankyou']);
      })
     //}
    }
  }

  
  @HostListener('input') onInput() {
    this.adjust();
  }
  
  

  
  private adjust(): void {
    this.el.nativeElement.style.overflow = 'hidden';
    this.el.nativeElement.style.height = 'auto';
    this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
  }
  
  /* onCaptchaResponse(){
    this.recaptchaV3Service.execute('importantAction')
    .subscribe((token: string) => {
      console.debug(`Token [${token}] generated`);
    });
  } */

  // public send(form: any): void {
  //   if (form.invalid) {
  //     for (const control of Object.keys(form.controls)) {
  //       form.controls[control].markAsTouched();
  //     }
  //     return;
  //   }

  //   this.recaptchaV3Service.execute('importantAction')
  //   .subscribe((token: string) => {
  //     console.debug(`Token [${token}] generated`);
  //   });
  // }

}
