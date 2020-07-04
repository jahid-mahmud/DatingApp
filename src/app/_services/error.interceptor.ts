import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS} from '@angular/common/http'
import { from, Observable } from 'rxjs';
import {  throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable ()  
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe (
            catchError(error => {
                if(error === 401) {
                    return throwError (error.statusCode)
                }

                if(error instanceof HttpErrorResponse) {
                    const applicationError = error.headers.get('Application-Error');
                    if(applicationError) {
                        return throwError(applicationError)
                    }
                    const serverError = error.error;
                    var modelStateErrors = '';
                    if(serverError && typeof serverError === 'object') {
                        for (const key in serverError) {
                            if(serverError[key]) {
                                modelStateErrors += serverError[key] + '\n' ;
                            }
                        }
                    }
                    return throwError(modelStateErrors || serverError || 'server error')
                }
            })
        );
    }

}
export const ErrorInterceptorProveider = {
    provide : HTTP_INTERCEPTORS,
    useClass :ErrorInterceptor,
    multi:true

}