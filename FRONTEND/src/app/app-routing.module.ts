import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseinfoComponent } from './courseinfo/courseinfo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
    // canActivate: [AuthGurad],
  },
  {
    path: "login",
    component: LoginComponent
  },
  // {
  //   path: "mycourses",
  //   component: LoginComponent,
  //   canActivate: [AuthGuard],
  // },
  {
    path: "home/courseinfo/:id",
    component: CourseinfoComponent
    // canActivate: [AuthGurad],
  },
  {
    path: "signup",
    component: SignupComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
