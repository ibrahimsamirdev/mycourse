import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../student.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  private subscription: Subscription;
  public course;
  public id;

  constructor(private activatedRoute: ActivatedRoute, public studentsService: StudentsService) {
    this.subscription = activatedRoute.params.subscribe(
      (params: any) => this.id = params['id']
    );
    this.subscription = this.studentsService.getEnrolledCourse(10, this.id).subscribe((course) => {
      this.course = course.enrolled ? course.enrolled[0] : ""
      console.log(this.course);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {

  }

}
