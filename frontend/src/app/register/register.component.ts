import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // Create model for this later.
  user = {
    name: '',
    email: '',
    password: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.user);
  }

}
