import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
// import { SocialUser } from "angularx-social-login";
// import { SocialAuthService } from "angularx-social-login";
import {ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  auth2:any;
  // 283244656754-tivjmjsd64snl9h5kkpj4a91m85l20gv.apps.googleusercontent.com
  // MTMuwrQYAljYbEgjcBGZjgmr
  title = 'CatsControlApp';
  show: boolean = false;
  Name: string = "";

  

}
