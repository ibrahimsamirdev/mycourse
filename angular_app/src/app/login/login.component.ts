import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      usernameFormControl: new FormControl('', [Validators.required]),
      passwordFormControl: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

}
