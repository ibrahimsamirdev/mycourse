import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../student.service';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {

  private subscription: Subscription;
  id;
  lid;

  constructor(private activatedRoute: ActivatedRoute, public studentService: StudentsService) {
    this.subscription = activatedRoute.params.subscribe(
      (params: any) => {
        this.id = params['id']
        this.lid = params['lid']
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

}
