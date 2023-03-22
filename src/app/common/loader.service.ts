import { Injectable } from "@angular/core";

@Injectable()
export class LoaderService {

    currentUrl:any='/home';

    public isLoading : number;
    constructor(){
        this.isLoading = 0;
    }

    show(){
        setTimeout(()=>{
            this.isLoading = this.isLoading + 1;
        },0)
    }

    hide(){
        setTimeout(()=>{
            this.isLoading = this.isLoading - 1;
        },0)
    }
}