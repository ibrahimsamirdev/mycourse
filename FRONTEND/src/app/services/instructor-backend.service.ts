import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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

export interface InstructorCourses{
  fullName: string;
  courses: Course[];
}

export interface Course{
  title: string;
  category: string;
  level: string;
  prerequisites: string;
  image: string;
  topic: string;
  description: string;
  published: boolean;
  lectures: [];
}
