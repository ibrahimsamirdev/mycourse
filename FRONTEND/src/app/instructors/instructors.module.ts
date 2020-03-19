import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
// import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { InstructorsComponent } from './instructors.component';
import { CourseAddComponent } from './course-add.component';
import { CourseEditComponent } from './course-edit.component';
import { LectureAddComponent } from './lecture-add.component';
import { LectureEditComponent } from './lecture-edit.component';

const MY_ROUTES: Routes = [
  {path: '', component: InstructorsComponent},
  {path: 'addCourse/:uuid', component: CourseAddComponent },
  {path: 'addLecture/:ucid', component: LectureAddComponent }
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
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(MY_ROUTES)
  ]
})
export class InstructorsModule { }
