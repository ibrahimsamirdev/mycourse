import { Component, OnInit } from '@angular/core';
import { InstructorBackendService } from '../services/instructor-backend.service';
import {map} from 'rxjs/operators'

// <li *ngFor="let user of courses$ | async; let i=index"> 
//       <a [routerLink]="[i]">{{user.name.first}} {{user.name.last}}</a>
//     </li>

@Component({
  selector: 'app-instructors',
  template: `
  <div> 
  <h2> Online data </h2>
  <ol>
    <li *ngFor="let course of courses$ | async; let i=index"> 
      {{ course.courses | json }}
      {{course._id}}
    </li>
  </ol>
</div>
  `,
  styles: []
})
export class InstructorsComponent implements OnInit {

  public courses$

  constructor(private service: InstructorBackendService) { }

  ngOnInit() {
    this.getAllCourses();
  }

  getAllCourses() {
    console.log('processsing in user component');
    this.courses$ =
     this.service.getAllCourses();
    // .subscribe((courses) => {
    //   console.log(courses);
    // } );
    // console.dir(this.courses$)
  }

}
