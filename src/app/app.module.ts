import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {SocialLoginModule, AuthServiceConfig, GoogleLoginProvider} from 'angularx-social-login';
import { SocialLoginModule } from "angularx-social-login";  // , AuthServiceConfig
import { GoogleLoginProvider, FacebookLoginProvider} from "angularx-social-login"; /// LinkedInLoginProvider


import { AppComponent } from './app.component';

// import { AppRoutingModule } from './app-routing.module';
// import { Route} from '@angular/router';
import { HomeComponent } from './home/home.component';
// import {HttpClientModule } from '@angular/common/http';
// import { OAuthModule } from 'angular-oauth2-oidc';
const google_oauth_client_id:string = "283244656754-tivjmjsd64snl9h5kkpj4a91m85l20gv.apps.googleusercontent.com"
let config = new AuthServiceConfig([
   {
    id:GoogleLoginProvider.PROVIDER_ID,
    provider:new GoogleLoginProvider(google_oauth_client_id)
   }
])

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    SocialLoginModule.initialize(config)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule {
 
}