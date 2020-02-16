import { Component, OnInit } from '@angular/core';
import { LyricPost } from '../interfaces/lyric-post.model';
import { LyricsService } from '../services/lyrics.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-create-lyrics',
  templateUrl: './create-lyrics.component.html',
  styleUrls: ['./create-lyrics.component.scss']
})
export class CreateLyricsComponent implements OnInit {

  title: string;
  author: string;
  body: string;
  private mode = 'create';
  private postId: string;
  post: LyricPost;

  submitPost() {
    if (this.mode === 'create') {
      this.lyricService.addPost(this.title, this.author, this.body);
      this.clearInputs();
    } else {
      this.lyricService.updatePost(this.postId, this.title, this.author, this.body);
    }

  }
  clearInputs() {
    this.title = '';
    this.author = '';
    this.body = '';
  }
  constructor(private lyricService: LyricsService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.post = this.lyricService.getPost(this.postId);
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

}
