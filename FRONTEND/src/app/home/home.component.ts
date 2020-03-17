import { Component, OnInit } from '@angular/core';
import { BackendService, Courses, Course } from '../backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses: Courses[] = [];
  coursesToDisplay: Course[] = [];
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getCourses().subscribe(result => {
      this.getCoursesToDisplay(result);
      console.log(this.coursesToDisplay);
    })
  }

  private getCoursesToDisplay(courses: Courses[]){
    courses.forEach((userCourse: Courses) => {
      userCourse.courses.forEach(course => {
        this.coursesToDisplay.push(course);
      });
    })
  }
}
