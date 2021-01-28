import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';



import { AppComponent } from './app.component';

// import { AppRoutingModule } from './app-routing.module';
// import { Route} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProductosComponent } from './productos/productos.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
// const google_oauth_client_id:string = "283244656754-tivjmjsd64snl9h5kkpj4a91m85l20gv.apps.googleusercontent.com"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '283244656754-tivjmjsd64snl9h5kkpj4a91m85l20gv.apps.googleusercontent.com'
            )
          },
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}