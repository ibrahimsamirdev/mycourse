import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorBackendService {

  constructor(public http: HttpClient) { }

  public getAllCourses() {
    let onlineData = this.http.get('http://localhost:3000/api/courses/')

    onlineData.subscribe( res => {
        localStorage.setItem("courses", JSON.stringify(res['results']));
      }
    );

    // let courses = of(JSON.parse(localStorage.getItem('courses')));

    // console.dir(courses);
    
    return onlineData;
  }
}
