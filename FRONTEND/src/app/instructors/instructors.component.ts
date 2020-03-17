import { Component, OnInit } from '@angular/core';
import { InstructorBackendService } from '../service/instructor-backend.service';
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
    <li *ngFor="let course of (courses$ | async).results"> 
      {{course.title}}
      {{course.category}}
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
    console.log('processsing in user component');
    this.courses$ = this.service.getAllCourses();
    console.log(this.courses$);
  }

}
