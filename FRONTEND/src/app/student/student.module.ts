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
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [MycoursesComponent, CourseComponent, LectureComponent, LecturesComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forChild([
      { path: '', component: MycoursesComponent },
      { path: 'course/:id', component: CourseComponent, children: [{ path: ':lid', component: LecturesComponent }] },
    ])
  ],
  bootstrap: [MycoursesComponent]
})
export class StudentModule { }
