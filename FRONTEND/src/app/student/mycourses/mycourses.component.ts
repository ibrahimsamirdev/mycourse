import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../student.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {
  private subscription: Subscription;
  public courses = [];
  constructor(public studentsService: StudentsService) { }

  ngOnInit(): void {
    this.subscription = this.studentsService.getAllEnrolls(10).subscribe((courses) => {
      this.courses = courses[0] ? courses[0].enrolled : ""
      // console.log(this.courses);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
