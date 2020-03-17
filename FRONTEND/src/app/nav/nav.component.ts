import { Component } from '@angular/core';
import { User, AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  user: User;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {
    this.authenticationService.currentUser.subscribe(user=> this.user = user);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }

}
