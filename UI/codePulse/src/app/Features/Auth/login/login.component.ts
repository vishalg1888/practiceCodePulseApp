import { Component } from '@angular/core';
import { LoginRequest } from '../Models/login-request.model';
import { AuthService } from '../Services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model:LoginRequest;

  constructor(private authService : AuthService, private cookieService : CookieService,
    private route : Router){
    this.model = {
      email : '',
      password : ''
    }
  }

  onFormSubmit() : void{
    console.log(this.model);
    this.authService.login(this.model)
    .subscribe({
      next : (rsp) => {
        // set auth token to cookie
        this.cookieService.set('Authorization', `Bearer ${rsp.token}`,
        undefined, '/',undefined,true,'Strict');

        //set user to local storage
        this.authService.setUser({
          email: rsp.email,
          roles:rsp.roles
        });
        // redirect back to home
        this.route.navigateByUrl('/');
      }
    });
  }

}
