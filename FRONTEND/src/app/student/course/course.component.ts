import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  private subscription: Subscription;
  id;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (params: any) => this.id = params['id']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {

  }

}
