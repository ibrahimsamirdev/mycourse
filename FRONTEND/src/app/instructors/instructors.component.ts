import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User, AuthenticationService } from '../services/authentication.service';
import { InstructorBackendService } from '../services/instructor-backend.service';
import { InstructorCourses, Course } from '../instructors.model';

import {map} from 'rxjs/operators'

@Component({
  selector: 'app-instructors',
  templateUrl: './instructor.component.html',
//   template: `<mat-toolbar color="primary">
//   <!-- <button mat-button routerLink="/addCourse">Add Course</button> -->
//   <button mat-button (click)="addInstructorCourse(user_id)">Add Course</button>
// </mat-toolbar>`,
  styleUrls: ['../home/home.component.css']
})
export class InstructorsComponent implements OnInit {

  public courses$: InstructorCourses[] = [];
  public coursesToDisplay$: Course[] = [];

  user: User;
  
  public user_id = '5e6d2721959ebc15c0909a41';

  constructor(
    private service: InstructorBackendService, 
    private router: Router,
    private authenticationService: AuthenticationService ) { 
    this.authenticationService.currentUser.subscribe(user=> this.user = user)
  }

  ngOnInit() {
    console.dir(this.user);
    this.service.getByUserId(this.user_id).subscribe(result => {
      this.getCoursesToDisplay(result);
      console.log(this.coursesToDisplay$);
    });
  }

  private getCoursesToDisplay(courses: InstructorCourses[]){
    courses.forEach((userCourse: InstructorCourses) => {
      userCourse.courses.forEach(course => {
        this.coursesToDisplay$.push(course);
      });
    })
  }
}
