import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  navHome() {
    this.router.navigateByUrl('');
  }
  
  navCreate() {
    this.router.navigateByUrl('create');
  }
  navBrowse() {
    this.router.navigateByUrl('browse');
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
