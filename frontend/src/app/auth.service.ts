import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
import { Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUsers() {}

  createUser(user: User) {
    console.log('greetings from auth: ', user);
    this.http.post('http://localhost:3003/', user).subscribe((response) => {
      console.log('the response: ', response);
    });
  }
}
