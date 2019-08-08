import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ErrorApiHandlerService} from "../services/error-api-handler.service";

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {
  constructor(public errorDialogService: ErrorApiHandlerService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
          reason: (error && error.error && error.error.reason) ? error.error.reason : error.error.message,
          status: error.status
        };
        this.errorDialogService.openDialog(data);
        return throwError(error);
      }));
  }
}
