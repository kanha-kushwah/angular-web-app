import { HttpClient, HttpHeaders } from "@angular/common/http";
import { core } from "@angular/compiler";
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

    /* recaptcha(data:any){
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post('https://www.google.com/recaptcha/api/siteverify',data, {headers: headers}).pipe(
        map(res=>{
            return res;
        })
    )
    } */

    getDataAccess(url: string,data:any): Observable<any> {
        return this.http.get<any>(`${url}${data}`)
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

    uploadMedia(url: string,file:any) {
        const endpoint = url;
        /* const formData: FormData = new FormData();
        formData.append('file', file); 
        .post(endpoint, file, { headers: { 'Content-Type': 'multipart/formData' } })
        */
        return this.http
            .post(endpoint, file)
            .pipe(
                map(res => {
                    return res;
                })
            );
    }

    public uploadFile(url:any,formData:any, options?:any): Observable<any> {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'multipart/formData');
        options = options ? options : headers;
        return this.http.post(url, formData, options);
      }
      
}



export class API {
   // http://localhost:8080/le/getQuestions?formID=1
    baseUrl = "http://ec2-13-233-184-38.ap-south-1.compute.amazonaws.com:8080/le/";

    getQues = this.baseUrl+"getQuestions?formID=1";
    submit_ans = this.baseUrl + "submit-answers";
    OtpVerification = this.baseUrl + 'fetch-details?passcode=';
    AllJobList = this.baseUrl + "AlljobList";
    jobApplication = this.baseUrl + "submit/job-application";
    contactDetails = this.baseUrl + "submit/contact-details";

    constructor() {}
}