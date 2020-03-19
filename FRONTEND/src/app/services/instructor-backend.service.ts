import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { InstructorCourses, Course, Lecture } from '../instructors.model';
import { map, flatMap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstructorBackendService {

  private url: string = "http://localhost:3000/api";

  constructor(public http: HttpClient) { }

  public getByUserId(userId): Observable<InstructorCourses[]> {
    return this.http.get<InstructorCourses[]>(this.url + `/courses/byuser/${userId}`);
  }

  public addCourse(userId, course: Course): Observable<Course> {
      return this.http.post<Course>(this.url + `/courses/add/${userId}`, course);
  }

  public addLecture(courseId, lecture: Lecture): Observable<Lecture> {
    return this.http.post<Lecture>(this.url + `/lectures/add/${courseId}`, lecture);
}

  public getAllCourses() {
    let onlineUsers = this.http.get('http://localhost:3000/api/courses/')

    onlineUsers.subscribe( res => {
        localStorage.setItem("courses", JSON.stringify(res));
      }
    );

    let cachedUsers = of(JSON.parse(localStorage.getItem('courses')));

    cachedUsers.subscribe((courses) => {
        console.log(courses);
    });
    
    return cachedUsers;
  }
}
