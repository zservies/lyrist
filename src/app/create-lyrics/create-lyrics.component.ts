import { Component, OnInit } from '@angular/core';
import { LyricPost } from '../lyric-post';
import { LyricsService } from '../services/lyrics.service';

@Component({
  selector: 'app-create-lyrics',
  templateUrl: './create-lyrics.component.html',
  styleUrls: ['./create-lyrics.component.scss']
})
export class CreateLyricsComponent implements OnInit {

  lyricPost: LyricPost;
  title: string;
  author: string;
  body: string;

  submitPost() {
    this.lyricPost = {
      title: this.title,
      author: this.author,
      body: this.body
    };
    this.lyricService.setLyrics(this.lyricPost);
  }
  clearInputs() {
    this.title = '';
    this.author = '';
    this.body = '';
  }
  constructor(private lyricService: LyricsService) { }

  ngOnInit() {

  }

}
