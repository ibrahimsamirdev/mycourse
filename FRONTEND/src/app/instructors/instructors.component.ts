import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InstructorBackendService } from '../services/instructor-backend.service';
import { InstructorCourses, Course } from '../instructors.model';

import {map} from 'rxjs/operators'

@Component({
  selector: 'app-instructors',
  templateUrl: './instructor.component.html',
  styleUrls: ['../home/home.component.css']
})
export class InstructorsComponent implements OnInit {

  public courses$: InstructorCourses[] = [];
  public coursesToDisplay$: Course[] = [];

  constructor(private service: InstructorBackendService, private router: Router) { }

  ngOnInit() {
    this.service.getByUserId('5e6d2721959ebc15c0909a41').subscribe(result => {
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

  addInstructorCourse(userId) {
    this.router.navigate([`/addCourse/${userId}`]);
  }

  editInstructorCourse(courseId) {
    this.router.navigate([`/editCourse/${courseId}`]);
  }
}
