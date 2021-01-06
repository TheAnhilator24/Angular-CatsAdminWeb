import { Component } from '@angular/core';
// import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
// import { authConfig } from './sso.config';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // 283244656754-tivjmjsd64snl9h5kkpj4a91m85l20gv.apps.googleusercontent.com
  // MTMuwrQYAljYbEgjcBGZjgmr

  title = 'CatsControlApp';
  user:any;
  
  constructor (private socioAuthServ: AuthService) {

  }



  signIn(platform:string):void {
    platform = GoogleLoginProvider.PROVIDER_ID;
    this.socioAuthServ.signIn(platform).then((response)=>{
            console.log(platform + " logged in user data is=",
                    response);
            this.user = response;
    });
    // export declare class SocialUser {
              // provider: string;
              // id: string;
              // email: string;
              // name: string;
              // photoUrl: string;
              // firstName: string;
              // lastName: string;
              // authToken: string;    

  }

  signOut():void {
     this.socioAuthServ.signOut();
  }
}
