import { Component, OnInit } from '@angular/core';
import { InstructorBackendService, InstructorCourses, Course } from '../services/instructor-backend.service';
import {map} from 'rxjs/operators'

// <li *ngFor="let user of courses$ | async; let i=index"> 
//       <a [routerLink]="[i]">{{user.name.first}} {{user.name.last}}</a>
//     </li>

@Component({
  selector: 'app-instructors',
  templateUrl: './instructor.component.html',
//   template: `
// <div class="container">
//   <div class="row">
//       <div class="col-md-4 course-card" *ngFor="let course of coursesToDisplay$">
//           <mat-card>
//               <mat-card-header>
//                 <mat-card-title>{{course.title}}</mat-card-title>
//               </mat-card-header>
//               <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg">
//               <mat-card-content>
//                 <p>
//                 {{course.description}}
//                 </p>
//               </mat-card-content>
//               <mat-card-actions>
//                 <button mat-button>Register</button>
//               </mat-card-actions>
//             </mat-card>
//       </div>
//   </div>
// </div>
//   `,
styleUrls: ['../home/home.component.css']
})
export class InstructorsComponent implements OnInit {

  public courses$: InstructorCourses[] = [];
  public coursesToDisplay$: Course[] = [];

  constructor(private service: InstructorBackendService) { }

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

  // getAllCourses() {
  //   console.log('processsing in user component');
  //   this.courses$ =
  //    this.service.getAllCourses();
  // }

}
