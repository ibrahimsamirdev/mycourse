import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      firstNameFormControl : new FormControl('', [Validators.required] ),
      lastNameFormControl : new FormControl('', [Validators.required] ),
      emailFormControl : new FormControl('', [Validators.required, Validators.email] ),
      passwordNameFormControl : new FormControl('', [Validators.required] ),
      confirmPasswordNameFormControl : new FormControl('', [Validators.required] ),
      profilePictureNameFormControl : new FormControl(),
      bioFormControl : new FormControl('',),
      aboutFormControl : new FormControl(''),
      websiteFormControl : new FormControl(''),
      linkedinFormControl : new FormControl('' )
    })
   }

  ngOnInit(): void {
  }

}
