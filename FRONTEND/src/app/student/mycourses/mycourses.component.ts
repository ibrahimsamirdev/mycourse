import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../student.service';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {

  constructor(public studentService: StudentsService) { }

  ngOnInit(): void {
    this.studentService.dosome("Mycourses")
  }

}
