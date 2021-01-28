import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  socialUser: SocialUser | null =null;
  userLogged: SocialUser | null =null;
  isLogged: boolean | false = false;

  constructor(private authService: SocialAuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(
        data => {
          this.userLogged = data;
          this.isLogged = (this.userLogged != null);
        }
    );
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data =>{
        this.socialUser = data;
        this.isLogged = true;
        console.log(data);
        this.router.navigate(['/']);
      }
    );
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data => {
        this.socialUser = data;
        this.isLogged = true;
        console.log(data);
      }
    );
  }

  signOut(): void {
    this.authService.signOut();
  }
}
