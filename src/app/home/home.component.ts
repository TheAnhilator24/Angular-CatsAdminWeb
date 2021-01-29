import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userLogged: SocialUser | { name: '', photoUrl: '' } = { name: '', photoUrl: '' };
  isLogged: boolean | false = false;

  constructor(private authService: SocialAuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(
      data => {
        console.log('LoginModule: ' + data);
        this.userLogged = data;
        this.isLogged = (this.userLogged != null);
      }
    );
  }

}
