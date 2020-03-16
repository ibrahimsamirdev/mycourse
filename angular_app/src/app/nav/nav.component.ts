import { Component, OnInit } from '@angular/core';
import { User, AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: User;
  
  router: any;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(user=> this.user = user);
  }

  ngOnInit(): void {

  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
