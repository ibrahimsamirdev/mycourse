import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { User, AuthenticationService } from '../services/authentication.service';
import { InstructorBackendService } from '../services/instructor-backend.service';
import { InstructorCourses, Course } from '../instructors.model';
import { style } from '@angular/animations';


@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['../styles.css']
})
export class CourseAddComponent implements OnInit {
  courseForm: FormGroup;

  user: User;
  public user_id = '';

  constructor(
    private service: InstructorBackendService,
    fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService ) {
      this.authenticationService.currentUser.subscribe(user=> this.user = user)
      this.user_id = <string>this.user['id'];

      this.courseForm = fb.group({
        titleFormControl : new FormControl('', [Validators.required] ),
        categoryFormControl : new FormControl('', [Validators.required] ),
        levelFormControl : new FormControl('', [Validators.required] ),
        prerequisitesFormControl : new FormControl('', [Validators.required] ),
        imageFormControl : new FormControl(''),
        topicFormControl : new FormControl('', [Validators.required] ),
        descriptionFormControl : new FormControl('', [Validators.required] ),
        publishedFormControl : new FormControl('')
      })
  }

  ngOnInit(): void {
  }

  saveCourse() {
    const course: Course = {
      title: this.courseForm.controls.titleFormControl.value,
      category: this.courseForm.controls.categoryFormControl.value,
      level: this.courseForm.controls.levelFormControl.value,
      prerequisites: this.courseForm.controls.prerequisitesFormControl.value,
      image: this.courseForm.controls.imageFormControl.value,
      topic: this.courseForm.controls.topicFormControl.value,
      description: this.courseForm.controls.descriptionFormControl.value,
      published: this.courseForm.controls.publishedFormControl.value,
      lectures: []
    }

    const formData = new FormData();
    formData.append('file', this.courseForm.get('imageFormControl').value);


    this.service.addCourse(this.user_id, course)
      .subscribe((result)=>{
        this.router.navigate(["/instructor"]);
    })
  }

}
