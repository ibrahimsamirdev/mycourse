import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BackendService } from '../services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(
    fb: FormBuilder,
    private router: Router,
     private backendService: BackendService) {
    this.form = fb.group({
      firstNameFormControl : new FormControl('', [Validators.required] ),
      lastNameFormControl : new FormControl('', [Validators.required] ),
      emailFormControl : new FormControl('', [Validators.required, Validators.email] ),
      passwordFormControl : new FormControl('', [Validators.required] ),
      confirmPasswordFormControl : new FormControl('', [Validators.required] ),
      // profilePictureNameFormControl : new FormControl(),
      // bioFormControl : new FormControl('',),
      // aboutFormControl : new FormControl(''),
      // websiteFormControl : new FormControl(''),
      // linkedinFormControl : new FormControl('' )
    })
   }
   ngOnInit(): void {
   }


  save(){
    this.backendService.createUser({
      fullName:  this.form.controls.firstNameFormControl.value + this.form.controls.lastNameFormControl.value, 
      email: this.form.controls.emailFormControl.value,
      password: this.form.controls.passwordFormControl.value,
    }).subscribe((result)=>{
      this.router.navigate(["/login"]);
    })
  }

}
