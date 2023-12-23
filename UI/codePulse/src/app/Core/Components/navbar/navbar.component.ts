import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Features/Auth/Models/user.model';
import { AuthService } from 'src/app/Features/Auth/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  user? : User;

  constructor(private authService : AuthService, private router : Router){

  }
  
  ngOnInit(): void {
    this.authService.user()
    .subscribe({
      next : (rsp) =>{
        this.user = rsp;
      }
    });

    this.user = this.authService.getUser();
  }

  onlogout() : void{
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
