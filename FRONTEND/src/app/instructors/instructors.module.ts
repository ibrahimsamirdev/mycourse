import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { InstructorsComponent } from './instructors.component';

const MY_ROUTES: Routes = [
  {path: '', component: InstructorsComponent},
  // {path: ':uuid', component: UserdetailsComponent, canActivate: [CorrectParamGuardService]}
];

@NgModule({
  declarations: [InstructorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MY_ROUTES)
  ]
})
export class InstructorsModule { }