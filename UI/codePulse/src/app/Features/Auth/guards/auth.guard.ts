import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../Services/auth.service';
import {jwtDecode} from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {

  const cookieService = inject(CookieService);
  const authService = inject(AuthService);
  const user = authService.getUser();
  const router = inject(Router);
  //check for usr logged in or not by JWT token
  let token = cookieService.get('Authorization');
   
  if(token){
    //decode token
    token = token.replace('Bearer', '');
    const decodedToken : any = jwtDecode(token);

    //check if token is expired
    const expiry = decodedToken.exp * 1000;
    const currentTime = new Date().getTime();

    if(expiry < currentTime){
      //logout if expired
      authService.logout();
      return router.createUrlTree(['/login'], {queryParams: {returnUrl : state.url}})
    }
    else{
      // token is still valid
      if(user?.roles.includes('Writer')){
        return true;
      }
      else{
        alert('Unauthorized');
        return false;
      }
    }
  }
  else{
    //logout
    authService.logout();
    return router.createUrlTree(['/login'], {queryParams: {returnUrl : state.url}})
  }

};
