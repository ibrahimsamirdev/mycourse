import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> My Course App </h1>
    <h2> Instructor use case </h2>
    <app-instructors> </app-instructors>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycourse';
}
