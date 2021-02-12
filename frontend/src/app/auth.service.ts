import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUsersList() {
    this.http.get('http://localhost:3003/').subscribe(
      (response) => {
        console.log('USERS: ', response);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  createUser(user: User) {
    console.log('greetings from auth: ', user);
    this.getUsersList();
    this.http.post('http://localhost:3003/', user).subscribe(
      (response) => {
        console.log('the response: ', response);
      },
      (err) => {
        console.log('ERROR: ', err);
      }
    );
  }
}
