import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http"
const user: User = {
  fullName: "hiwi",
  email: "hiwi",
  password: "hiwi",
  profilePic: "hiwi",
  biography: "hiwi",
  about: "hiwi",
  websiteUrl: "hiwi",
  linkedIn: "hiwi",
}
 
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): User {
    if (username == 'hiwi' && password == 'hiwi') {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }
    return null;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}

}

export interface User {
  fullName: String,
  email: String,
  password: String,
  profilePic: String,
  biography: String,
  about: String,
  websiteUrl: String,
  linkedIn: String,
}