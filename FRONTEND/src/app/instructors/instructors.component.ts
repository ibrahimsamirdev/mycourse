import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User, AuthenticationService } from '../services/authentication.service';
import { InstructorBackendService } from '../services/instructor-backend.service';
import { InstructorCourses, Course } from '../instructors.model';

import {map} from 'rxjs/operators'

@Component({
  selector: 'app-instructors',
  // templateUrl: './instructor.component.html',
  template: `
  <div class="home-welcome">   
        <div class="col-md-6">
            <div class="welcome-message">INSTRUCTOR COURSES</div>
        </div>
        <div class="col-md-6">
            <!-- <img src="../../assets/home.jpg"> -->
        </div>
</div>
<div>
  <mat-toolbar color="primary">
    <!-- <button mat-button routerLink="/addCourse">Add Course</button> -->
    <button mat-raised-button [routerLink]="['addCourse',user_id]">Add Course</button>
  </mat-toolbar>
</div>
<div class="container">
  <div class="row">
      <div class="col-md-4 course-card" *ngFor="let course of coursesToDisplay$">
          <mat-card>
              <mat-card-header>
                <mat-card-title>{{course.title}}</mat-card-title>
              </mat-card-header>
              <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg">
              <mat-card-content>
                <p>
                {{course.description}}
                </p>
                <input [value]="course._id" #course_id>  [course_id]={{course_id.value}}
              </mat-card-content>
              <mat-card-actions>
                <button mat-button>Edit</button>
                <button mat-button [routerLink]="['addLecture',course_id.value]">Add Lecture</button>
              </mat-card-actions>
            </mat-card>
      </div>
  </div>
</div>
  `,
  styleUrls: ['../home/home.component.css']
})
export class InstructorsComponent implements OnInit {
  // @Input() course_id;

  public courses$: InstructorCourses[] = [];
  public coursesToDisplay$: Course[] = [];

  user: User;
  
  public user_id = '';
  constructor(
    private service: InstructorBackendService, 
    private router: Router,
    private authenticationService: AuthenticationService ) { 
    this.authenticationService.currentUser.subscribe(user=> this.user = user)
    this.user_id = <string>this.user['id'];
    // console.log('kjasdfjlk;afdsl;jkafljk;af');
    console.log(this.user_id);
  }

  ngOnInit() {
    // console.dir(this.user_id);
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
