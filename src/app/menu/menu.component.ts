import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  userLogged: SocialUser | {name: '', photoUrl: ''} = {name: '', photoUrl: ''};
  isLogged: boolean | false = false;

  constructor(private authService: SocialAuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(
      data => {
        console.log( 'MenuComponent: ' + data);
        this.userLogged = data;
        this.isLogged = (this.userLogged != null);
      }
     );    
  }

  signOut(): void {
    this.authService.signOut().then(
      data=> {
        this.router.navigate(['/login']);
      }
    );
  }

}
