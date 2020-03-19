import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private baseUrl: string = "http://localhost:3000/api/"

  constructor(public http: HttpClient) { }

  public getAllEnrolls(userId): Observable<any> {
    return this.http.get(this.baseUrl + 'enrolls/5e7371b4d80dd980c3ec0038')
  }
  public getEnrolledCourse(userId, id): Observable<any> {
    return this.http.get(this.baseUrl + 'enrolls/5e7371b4d80dd980c3ec0038/' + id)
  }
}
