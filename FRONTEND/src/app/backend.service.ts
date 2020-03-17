import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private url: string = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url + 'user/signup', user);
  }

}
