import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { CourseComponent } from './course/course.component';
import { LectureComponent } from './lecture/lecture.component';
import { LecturesComponent } from './lectures/lectures.component';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [MycoursesComponent, CourseComponent, LectureComponent, LecturesComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    RouterModule.forChild([
      { path: '', component: MycoursesComponent },
      { path: 'course/:id', component: CourseComponent, children: [{ path: ':lid', component: LecturesComponent }] },
    ])
  ],
  bootstrap: [MycoursesComponent]
})
export class StudentModule { }
