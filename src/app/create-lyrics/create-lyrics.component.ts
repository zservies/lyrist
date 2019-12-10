import { Component, OnInit } from '@angular/core';
import { LyricPost } from '../lyric-post';

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
  lyricPosts = [];

  submitPost() {
    this.lyricPost = {
      title: this.title,
      author: this.author,
      body: this.body
    };
    this.lyricPosts.push(this.lyricPost);
    console.log(this.lyricPost);
    console.log(this.lyricPosts);
  }
  clearInputs() {
    this.title = '';
    this.author = '';
    this.body = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
