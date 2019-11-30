import { Component, OnInit } from '@angular/core';
import { LyricPost } from '../lyric-post';

@Component({
  selector: 'app-create-lyrics',
  templateUrl: './create-lyrics.component.html',
  styleUrls: ['./create-lyrics.component.scss']
})
export class CreateLyricsComponent implements OnInit {

  lyricPost: LyricPost;
  lyricPosts = [];

  submitPost(title, author, body) {
    this.lyricPost = {
      title: title,
      author: author,
      body: body
    };
    this.lyricPosts.push(this.lyricPost);
    console.log(this.lyricPost);
    console.log(this.lyricPosts);
  }
  clearInputs(title, author, body) {
    this.lyricPost.author = "";
    this.lyricPost.title = "";
    this.lyricPost.body = ""
  }
  constructor() { }

  ngOnInit() {
  }

}
