import * as moment from "moment";
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import {tap}  from 'rxjs/internal/operators';
 
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url: string = "http://localhost:3000/api/user/";
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
      this.currentUserSubject.next(user)
      res => this.setSession
      // let id: string;
      console.log('HERE!!!!!');
      console.log(localStorage.getItem('currentUser'));
      console.log(this.currentUserSubject.value.id);
    }))
  }
//   login(email:string, password:string ) {
//     return this.http.post<User>(this.url + 'login', {email: username, password: password})
//         .do(res => this.setSession) 
//         .shareReplay();
// }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn,'second');
  
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }  
  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }
  
  isLoggedOut() {
    return !this.isLoggedIn();
  }
  
  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }     
}
    
export interface User {
  id?:String;
  fullName?: String;
  email?: String;
  password?: String;
  profilePic?: String;
  biography?: String;
  about?: String;
  websiteUrl?: String;
  linkedIn?: String;
}