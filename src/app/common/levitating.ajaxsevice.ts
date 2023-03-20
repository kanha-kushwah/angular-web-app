import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AjaxService {
    constructor(private http:HttpClient){

    }

    getData(url: string): Observable<any> {
     return this.http.get<any>(url)
     .pipe(
        map(res => {
            return res;
        })
     )
    }

    postData(url: string, body: any): Observable<any> {
        return this.http.post<any>(url,body)
        .pipe(
            map(res => {
                return res;
            })
        );
    }

    postDataFile(url: string, body: any,fData:any): Observable<any> {
        return this.http.post<any>(url,body,fData)
        .pipe(
            map(res => {
                return res;
            })
        );
    }
}



export class API {
    // https://fa2e-2406-b400-a9-850e-583-2393-80b0-aa46.ngrok.io/api/getQuestions?formID=1
    //getQues = "https://orko-dev-api.azurewebsites.net/api/v1/smart_forms/form1/1";
    //baseUrl = "https://fa2e-2406-b400-a9-850e-583-2393-80b0-aa46.ngrok.io/api/";
    
    baseUrl = "http://ec2-13-233-184-38.ap-south-1.compute.amazonaws.com:8080/api/";

    getQues = this.baseUrl+"getQuestions?formID=1";
    submit_ans = this.baseUrl + "submit-answers";
    OtpVerification = this.baseUrl + 'fetch-details';
    AllJobList = this.baseUrl + "AlljobList";
    jobApplication = this.baseUrl + "submit/job-application";
    contactDetails = this.baseUrl + "submit/contact-details";

    constructor() {}
}