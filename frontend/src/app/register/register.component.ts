import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  // Create model for this later.
  user = {
    name: '',
    username: '',
    password: '',
  };
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  register() {
    this.authService.createUser(this.user);
  }
}
