import { Component, OnInit, Injectable } from '@angular/core';
import { CreateLyricsService } from '../create-lyrics/create-lyrics.service';
import { LyricPost } from '../lyric-post';

@Component({
  selector: 'app-browse-lyrics',
  templateUrl: './browse-lyrics.component.html',
  styleUrls: ['./browse-lyrics.component.scss']
})

@Injectable({providedIn: 'root'})
export class BrowseLyricsComponent implements OnInit {

  post;
  lyricPosts = [];

  constructor(public lyricsService: CreateLyricsService) { }

  ngOnInit() {
    this.post = this.lyricsService.getLyricPosts();
    this.lyricPosts.push(this.post);
  }

}
