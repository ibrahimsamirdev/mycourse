import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService, User } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error: string = null;
  constructor(fb: FormBuilder, 
    private router: Router,
    private authenticationService: AuthenticationService) { 
    this.form = fb.group({
      usernameFormControl: new FormControl('', [Validators.required]),
      passwordFormControl: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  login(){
   this.authenticationService.login(
      this.form.controls.usernameFormControl.value,
      this.form.controls.passwordFormControl.value).subscribe(result =>{
      if(result){
        this.router.navigate(["/home"]);
        this.error = null;
    }
    else {
      this.error = "Incorrect Username or Password"
    }
  }, () => {
    this.error = "Incorrect Username or Password"
  });
 
  }

 
}
