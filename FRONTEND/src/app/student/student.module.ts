import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { CourseComponent } from './course/course.component';
import { LectureComponent } from './lecture/lecture.component';
import { LecturesComponent } from './lectures/lectures.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MycoursesComponent, CourseComponent, LectureComponent, LecturesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MycoursesComponent },
      { path: 'course/:id', component: CourseComponent, children: [{ path: ':lid', component: LecturesComponent }] },
    ])
  ],
  bootstrap: [MycoursesComponent]
})
export class StudentModule { }
