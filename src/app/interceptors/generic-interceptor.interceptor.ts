import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GenericInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let req = request.clone({
      setHeaders: {
        Authorization: `Bearer saadasldfnslfnlsdnflnsdfdns`
      }
  });

    return next.handle(req);
  }
}
