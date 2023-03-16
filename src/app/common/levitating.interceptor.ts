import {
    HttpInterceptor,
    HttpEvent,
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpErrorResponse
} from '@angular/common/http';

import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';


@Injectable()
export class InterceptorService implements HttpInterceptor {

    constructor(public loaderservice: LoaderService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderservice.show();

        return next.handle(req.clone({
            withCredentials: true
        })).pipe(
            catchError((error: HttpErrorResponse) => {
                //Toastr
                return throwError(error);
            }),
            finalize(() => this.loaderservice.hide())
        );
    }

}
