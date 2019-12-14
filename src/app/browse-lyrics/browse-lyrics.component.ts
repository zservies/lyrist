import { Component, OnInit, Injectable } from '@angular/core';
import { LyricsService } from '../services/lyrics.service';

@Component({
  selector: 'app-browse-lyrics',
  templateUrl: './browse-lyrics.component.html',
  styleUrls: ['./browse-lyrics.component.scss']
})

@Injectable({providedIn: 'root'})
export class BrowseLyricsComponent implements OnInit {

  lyricPosts = [];

  constructor(public lyricsService: LyricsService) { }

  ngOnInit() {
    this.lyricPosts = [...this.lyricsService.getLyrics()];
  }

}
