import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevitatingService {

  constructor() { }



  allJobList = [
    {
      jobId: 1,
      jobTitle: "java developer",
      jobDescription: "good skills in creating API",
      logDatetime: "2023-03-03T03:11:21.037+00:00",
      logState: 1,
      jobRequirement: "hands on experice in java",
      skillsQualifications: "java, spring MVC, SQL",
      requiredExperience: "3- 5 years experiance",
      jobLocation: "work from anywhere",
      costTocompany: "10,00,000"
  },
  {
      jobId: 2,
      jobTitle: "Angular developer",
      jobDescription: "good skills in front end",
      logDatetime: "2023-03-03T03:11:21.037+00:00",
      logState: 1,
      jobRequirement: "hands on experice in angular",
      skillsQualifications: "Angular, html, css",
      requiredExperience: "3- 5 years experiance",
      jobLocation: "work from anywhere",
      costTocompany: "10,00,000"
  },
  {
    jobId: 3,
    jobTitle: "Senior Angular Consultant",
    jobDescription: "Designing, coding, testing, and deploying the application.\r\n\tDebugging issues in the application code to ensure it is working correctly.\r\n\tIntegrating third-party libraries with the codebase to extend its functionality.\r\n\tCommunicating with other team members on any pending tasks or changes in the project.  \r\n\tEnsuring that all code complies with best practices and standards set by the company or organization they work for.",
    logDatetime: "2023-03-15T02:08:53.972+00:00",
    logState: 1,
    jobRequirement: "Strategize and development",
    skillsQualifications: "Postgraduation in Computer Science",
    requiredExperience: "10 years",
    jobLocation: "Goa",
    costTocompany: "25 LPA"
  }
  ];

  testQuestions = [
    /* { 
      text:'#5F3A96', 
      color1:'#000', 
      color:'#FFDBA6', 
      no:'01',
      que:'If you need to record your daily tasks, where would you record it ?', 
      ans1:'Plain Sheet (word doc., plain paper etc)', 
      ans2:'Tabulated Sheet (excel, to-do tool etc)',
      img:'../../../assets/images/first-img.png',
    },
    { 
      color1:'#fff', 
      color:'#5F3A96',
      no:'02',
      que:'When are you most productive ?', 
      ans1:'When you work alone', 
      ans2:'When you work with a team',
      img:'../../../assets/images/two.png',
    },
    {  
      color1:'#fff', 
      color:'#FF6464',
      no:'03',
      que:'If given access to 1 million USD, what would you do  ?', 
      ans1:'Set aside that money as savings and continue doing what you currently do', 
      ans2:'Quit what you currently do and start on your own dream project',
      img:'../../../assets/images/three.png',
    },
    {  
      color1:'#fff', 
      color:'rgba(30, 30, 30, 0.49)',
      no:'04',
      que:'How many skills have you mastered till date ?', 
      ans1:'One or none', 
      ans2:'More than One',
      img:'../../../assets/images/four.png',
    },
    {  
      color1:'#fff', 
      color:'#0D5568',
      no:'05',
      que:'How many skills have you mastered inlast 12 months ?', 
      ans1:'One or none', 
      ans2:'More than One',
      img:'../../../assets/images/five.png',
    },
    {  
      color1:'#fff', 
      color:'#FEAC3F',
      no:'06',
      que:'What is your reaction to constant changes ?', 
      ans1:'Resistance', 
      ans2:'Resilience',
      img:'',
      img1:'../../../assets/images/six.png',
    },
    {  
      color1:'#fff',
      color:'#083B5E',
      no:'07',
      que:'In your decision making metrics, what takes higher precedence ?', 
      ans1:'Rationality', 
      ans2:'Compassion',
      img:'../../../assets/images/seven.png',
    } , */





    /* {
        fieldId: 1,
        id: "0",
        fieldName: "If you need to record your daily tasks, where would you record it ?",
        cid: "0",
        fieldSequenceId: 1,
        isMandatory: 1,
        dataTypeId: 11,
        dataTypeName: null,
        comboId: 0,
        comboValue: null,
        fieldInlineData:
        {
          color1:'#000', 
          textcolor:"#5F3A96",
          image_path:"../../../assets/images/first-img.png",
          bgcolor:"#ffdba6",
          options:[
          {key:1, value:"Plain Sheet (word doc., plain paper etc)"},
          {key:2, value:"Tabulated Sheet (excel, to-do tool etc)"}
          ]
        },
        presetFieldLimitGT: null,
        presetFieldLimitLT: null,
        computeFieldLimit: null,
        arithmeticOperationId: null,
        previousFieldId: 0,
        nextFieldId: 0,
        formId: 1,
        accountId: 1,
        logMemberId: 1,
        logMemberName: "Rajiv",
        logDatetime: "2023-03-09T10:48:09.652+00:00",
        logState: 1,
        logActive: 1
    },
    {
      fieldId: 2,
      color1:'#fff', 
      id: "0",
      fieldName: "When are you most productive ?",
      cid: "0",
      fieldSequenceId: 2,
      isMandatory: 1,
      dataTypeId: 11,
      dataTypeName: null,
      comboId: 0,
      comboValue: null,
      fieldInlineData:
      {
        textcolor:"#ffffff",
        image_path:"../../../assets/images/two.png",
        bgcolor:"#5f3a96",
        options:[
        {key:1, value:"When you work alone"},
        {key:2, value:"When you work with a team"}
        ]
      },
      presetFieldLimitGT: null,
      presetFieldLimitLT: null,
      computeFieldLimit: null,
      arithmeticOperationId: null,
      previousFieldId: 0,
      nextFieldId: 0,
      formId: 1,
      accountId: 1,
      logMemberId: 1,
      logMemberName: "Rajiv",
      logDatetime: "2023-03-09T10:48:09.652+00:00",
      logState: 1,
      logActive: 1
  },
  {
    fieldId: 3,
    id: "0",
    fieldName: "If given access to 1 million USD, what would you do ?",
    cid: "0",
    fieldSequenceId: 3,
    isMandatory: 1,
    dataTypeId: 11,
    dataTypeName: null,
    comboId: 0,
    comboValue: null,
    fieldInlineData:
    {
      color1:'#fff', 
      textcolor:"#ffffff",
      image_path:"../../../assets/images/three.png",
      bgcolor:"#ff6464",
      options:[
      {key:1, value:"Set aside that money as savings and continue doing what you currently do"},
      {key:2, value:"Quit what you currently do and start on your own dream project"}
      ]
    },
    presetFieldLimitGT: null,
    presetFieldLimitLT: null,
    computeFieldLimit: null,
    arithmeticOperationId: null,
    previousFieldId: 0,
    nextFieldId: 0,
    formId: 1,
    accountId: 1,
    logMemberId: 1,
    logMemberName: "Rajiv",
    logDatetime: "2023-03-09T10:48:09.652+00:00",
    logState: 1,
    logActive: 1
},
{
  fieldId: 4,
  id: "0",
  fieldName: "If given access to 1 million USD, what would you do ?",
  cid: "0",
  fieldSequenceId: 4,
  isMandatory: 1,
  dataTypeId: 11,
  dataTypeName: null,
  comboId: 0,
  comboValue: null,
  fieldInlineData:
  {
    color1:'#fff', 
    textcolor:"#ffffff",
    image_path:"../../../assets/images/four.png",
    bgcolor:"#ff6464",
    options:[
    {key:1, value:"asd"},
    {key:2, value:"qqwe"}
    ]
  },
  presetFieldLimitGT: null,
  presetFieldLimitLT: null,
  computeFieldLimit: null,
  arithmeticOperationId: null,
  previousFieldId: 0,
  nextFieldId: 0,
  formId: 1,
  accountId: 1,
  logMemberId: 1,
  logMemberName: "Rajiv",
  logDatetime: "2023-03-09T10:48:09.652+00:00",
  logState: 1,
  logActive: 1
},
{
  fieldId: 5,
  id: "0",
  fieldName: "If given access to 1 million USD, what would you do ?",
  cid: "0",
  fieldSequenceId: 5,
  isMandatory: 1,
  dataTypeId: 11,
  dataTypeName: null,
  comboId: 0,
  comboValue: null,
  fieldInlineData:
  {
    color1:'#fff', 
    textcolor:"#ffffff",
    image_path:"../../../assets/images/five.png",
    bgcolor:"#91918f",
    options:[
    {key:1, value:"asd"},
    {key:2, value:"qqwe"}
    ]
  },
  presetFieldLimitGT: null,
  presetFieldLimitLT: null,
  computeFieldLimit: null,
  arithmeticOperationId: null,
  previousFieldId: 0,
  nextFieldId: 0,
  formId: 1,
  accountId: 1,
  logMemberId: 1,
  logMemberName: "Rajiv",
  logDatetime: "2023-03-09T10:48:09.652+00:00",
  logState: 1,
  logActive: 1
},
{
  fieldId: 6,
  id: "0",
  fieldName: "If given access to 1 million USD, what would you do ?",
  cid: "0",
  fieldSequenceId: 6,
  isMandatory: 1,
  dataTypeId: 11,
  dataTypeName: null,
  comboId: 0,
  comboValue: null,
  fieldInlineData:
  {
    color1:'#fff', 
    textcolor:"#ffffff",
    image_path:"",
    bgcolor:"#0d5568",
    options:[
    {key:1, value:"asd"},
    {key:2, value:"qqwe"}
    ]
  },
  presetFieldLimitGT: null,
  presetFieldLimitLT: null,
  computeFieldLimit: null,
  arithmeticOperationId: null,
  previousFieldId: 0,
  nextFieldId: 0,
  formId: 1,
  accountId: 1,
  logMemberId: 1,
  logMemberName: "Rajiv",
  logDatetime: "2023-03-09T10:48:09.652+00:00",
  logState: 1,
  logActive: 1
},
{
  fieldId: 7,
  id: "0",
  fieldName: "If given access to 1 million USD, what would you do ?",
  cid: "0",
  fieldSequenceId: 7,
  isMandatory: 1,
  dataTypeId: 11,
  dataTypeName: null,
  comboId: 0,
  comboValue: null,
  fieldInlineData:
  {
    color1:'#fff', 
    textcolor:"#ffffff",
    image_path:"../../../assets/images/seven.png",
    bgcolor:"#ff6464",
    options:[
    {key:1, value:"asd"},
    {key:2, value:"qqwe"}
    ]
  },
  presetFieldLimitGT: null,
  presetFieldLimitLT: null,
  computeFieldLimit: null,
  arithmeticOperationId: null,
  previousFieldId: 0,
  nextFieldId: 0,
  formId: 1,
  accountId: 1,
  logMemberId: 1,
  logMemberName: "Rajiv",
  logDatetime: "2023-03-09T10:48:09.652+00:00",
  logState: 1,
  logActive: 1
} */



/* {
  "fieldId": 1,
  "id": "0",
  "fieldName": "Question1",
  "cid": "0",
  "fieldSequenceId": 1,
  "isMandatory": 1,
  "dataTypeId": 11,
  "dataTypeName": null,
  "comboId": 0,
  "comboValue": null,
  "fieldInlineData": "{\"textcolor\":\"\", \"image_path\":\"\", \"bgcolor\":\"\", \"options\":\"[{\"key\":1, \"value\":\"Yes\"}, {\"key\":2, \"value\":\"No\"}]\"}",
  "presetFieldLimitGT": null,
  "presetFieldLimitLT": null,
  "computeFieldLimit": null,
  "arithmeticOperationId": null,
  "previousFieldId": 0,
  "nextFieldId": 0,
  "formId": 1,
  "accountId": 1,
  "logMemberId": 1,
  "logMemberName": "Rajiv",
  "logDatetime": "2023-03-09T10:48:09.652+00:00",
  "logState": 1,
  "logActive": 1
}, */

  ];

  answerList: any[]=[];

  submitted_data =  {
    field_id1: {
      "field_id": "",
      "field_value": "",
      "combo_id": "",
      "data_type_id": ""
    },
    field_id2: {
      "field_id": "",
      "field_value": "",
      "combo_id": "",
      "data_type_id": ""
    },
    field_id3: {
      "field_id": "",
      "field_value": "",
      "combo_id": "",
      "data_type_id": ""
    },
    field_id4: {
      "field_id": "",
      "field_value": "",
      "combo_id": "",
      "data_type_id": ""
    },
    field_id5: {
      "field_id": "",
      "field_value": "",
      "combo_id": "",
      "data_type_id": ""
    },
    field_id6: {
      "field_id": "",
      "field_value": "",
      "combo_id": "",
      "data_type_id": ""
    },
    field_id7: {
      "field_id": "",
      "field_value": "",
      "combo_id": "",
      "data_type_id": ""
    }
  }

}
