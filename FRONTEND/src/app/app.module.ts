import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const MY_ROUTES : Routes = [
  { path: 'courses', loadChildren: () => import('./instructors/instructors.module').then(m => m.InstructorsModule) },
  // { path: '**', component: FriendlyErrorComponent }
  // { path: 'friendlyError', redirectTo: '/friendlyError' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(MY_ROUTES) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
