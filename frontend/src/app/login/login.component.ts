import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Create a data model for this later.
  user = {
    username: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.user);
  }


}
