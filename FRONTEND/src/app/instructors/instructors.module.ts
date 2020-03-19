import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";

import { InstructorsComponent } from './instructors.component';
import { CourseAddComponent } from './course-add.component';
import { CourseEditComponent } from './course-edit.component';
import { LectureAddComponent } from './lecture-add.component';
import { LectureEditComponent } from './lecture-edit.component';

const MY_ROUTES: Routes = [
  {path: '', component: InstructorsComponent},
  // {path: ':uuid', component: UserdetailsComponent, canActivate: [CorrectParamGuardService]}
];

@NgModule({
  declarations: [
    InstructorsComponent, 
    CourseAddComponent, 
    CourseEditComponent, 
    LectureAddComponent, 
    LectureEditComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forChild(MY_ROUTES)
  ]
})
export class InstructorsModule { }
