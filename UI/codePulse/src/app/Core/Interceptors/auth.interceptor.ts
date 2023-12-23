import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieOptions, CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private cookieService : CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.shouldinterceptRequest(request))
    {
      const authRequest = request.clone({
        setHeaders: {
          'Authorization' : this.cookieService.get('Authorization')
        }
      });

      return next.handle(authRequest);
    }

    return next.handle(request);
  }

  //used to only pass authToken when addAuth=true which is for only add,update,delete request
  private shouldinterceptRequest(request : HttpRequest<any>) : boolean {
   return request.urlWithParams.indexOf('addAuth=true', 0) > -1? true:false;
  }
}
