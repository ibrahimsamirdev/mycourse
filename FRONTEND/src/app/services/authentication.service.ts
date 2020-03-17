import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import {tap}  from 'rxjs/internal/operators';
 
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url: string = "http://localhost:3000/user/";
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(this.url + 'login', {email: username, password: password})
    .pipe( tap((user: User) => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}

export interface User {
  fullName?: String;
  email?: String;
  password?: String;
  profilePic?: String;
  biography?: String;
  about?: String;
  websiteUrl?: String;
  linkedIn?: String;
}