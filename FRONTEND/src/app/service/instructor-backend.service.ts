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
        localStorage.setItem("courses", JSON.stringify(res));
      }
    );

    let cachedCourses = of(JSON.parse(localStorage.getItem('courses')));

    cachedCourses.subscribe((courses) => {
        console.log(courses);
    });
    // console.dir(cachedCourses);
    
    return cachedCourses;
  }
}
