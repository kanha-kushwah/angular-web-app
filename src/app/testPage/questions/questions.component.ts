import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AjaxService, API } from 'src/app/common/levitating.ajaxsevice';
import { LevitatingService } from 'src/app/common/levitating.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  i=0;
  questions:any[]=[];
  public api = new API();

  constructor(public router:Router,
              public levitservice:LevitatingService,
              public ajaxservice:AjaxService) { }

  ngOnInit(): void {
    this.levitservice.answerList = [];
    this.getQues();
  }









  getQues(){
    this.ajaxservice.getData(this.api.getQues)
    .subscribe(data=>{
    
     this.questions = data;

     for(let i=0;i<this.questions.length;i++)
     {
      let json = JSON.parse(this.questions[i].fieldInlineData);
      this.questions[i].fieldInlineData = json;
      if(i==5)
      {
        this.questions[i].fieldInlineData.image_path = ''
      }
       if(i==0){
        this.questions[i].color1 = '#000'; 
       }
       else{
        this.questions[i].color1 = '#fff';
       }
     }

     console.log('getting que data',this.questions)

    })
  }

  next(event1:any, data2:any){
    console.log('next',this.i)
    if(this.i<6)
    {
      this.selectedAns(this.questions[this.i].fieldInlineData.options[0].value,data2);
      this.i++;
    }
    else if(this.i==6){
      this.router.navigate(['/congratulations']);
    }
  }

  previous(){
    if(this.i<7)
    {
      this.i--;
    }
  }

  selectedAns(value:any, data:any){

  if(this.i == 0)
  {
    this.levitservice.submitted_data.field_id1.combo_id = data.comboId;
    this.levitservice.submitted_data.field_id1.data_type_id = data.dataTypeId;
    this.levitservice.submitted_data.field_id1.field_id = data.fieldId;
    this.levitservice.submitted_data.field_id1.field_value = value;
  }
  else if(this.i == 1)
  {
    this.levitservice.submitted_data.field_id2.combo_id = data.comboId;
    this.levitservice.submitted_data.field_id2.data_type_id = data.dataTypeId;
    this.levitservice.submitted_data.field_id2.field_id = data.fieldId;
    this.levitservice.submitted_data.field_id2.field_value = value;
  }
  else if(this.i == 2)
  {
    this.levitservice.submitted_data.field_id3.combo_id = data.comboId;
    this.levitservice.submitted_data.field_id3.data_type_id = data.dataTypeId;
    this.levitservice.submitted_data.field_id3.field_id = data.fieldId;
    this.levitservice.submitted_data.field_id3.field_value = value;
  }
  else if(this.i == 3)
  {
    this.levitservice.submitted_data.field_id4.combo_id = data.comboId;
    this.levitservice.submitted_data.field_id4.data_type_id = data.dataTypeId;
    this.levitservice.submitted_data.field_id4.field_id = data.fieldId;
    this.levitservice.submitted_data.field_id4.field_value = value;
  }
  else if(this.i == 4)
  {
    this.levitservice.submitted_data.field_id5.combo_id = data.comboId;
    this.levitservice.submitted_data.field_id5.data_type_id = data.dataTypeId;
    this.levitservice.submitted_data.field_id5.field_id = data.fieldId;
    this.levitservice.submitted_data.field_id5.field_value = value;
  }
  else if(this.i == 5)
  {
    this.levitservice.submitted_data.field_id6.combo_id = data.comboId;
    this.levitservice.submitted_data.field_id6.data_type_id = data.dataTypeId;
    this.levitservice.submitted_data.field_id6.field_id = data.fieldId;
    this.levitservice.submitted_data.field_id6.field_value = value;
  }
  else if(this.i == 6)
  {
    this.levitservice.submitted_data.field_id7.combo_id = data.comboId;
    this.levitservice.submitted_data.field_id7.data_type_id = data.dataTypeId;
    this.levitservice.submitted_data.field_id7.field_id = data.fieldId;
    this.levitservice.submitted_data.field_id7.field_value = value;
  }

  }
}

