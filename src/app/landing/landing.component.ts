import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  // TODO: This is just a placeholder for Spotify's login - a seperate component will be defined later.
  spotifyLogin() {
    console.log('works!');
  }

  constructor() { }

  ngOnInit() {
  }

}
