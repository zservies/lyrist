import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { LyricPost } from '../interfaces/lyric-post.model';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  private lyricPosts: LyricPost[] = [];
  exampleUrl = '/assets/data/example.json';
  private lyricsUpdated = new Subject<LyricPost[]>();

  constructor(private http: HttpClient) { }

  getPosts() {
    this.http
      .get<{ message: string; posts: LyricPost[] }>(
        'http://localhost:3000/api/posts'
      )
      .subscribe(postData => {
        // Checks if lyricPosts is empty - meaning no new posts have been added. If no new posts -> load what is stored.
        // If new posts -> add what is stored to the newest posts array.
        if (this.lyricPosts.length === 0) {
          this.lyricPosts = postData.posts;
        } else {
          this.lyricPosts.concat(postData.posts); // Adds fetched data from backend to lyircPosts array.
        }
        this.lyricsUpdated.next([...this.lyricPosts]);
      });
  }

  getPostUpdateListener() {
    return this.lyricsUpdated.asObservable();
  }

  addPost(title: string, author: string, body: string) {
    const post: LyricPost = { id: null, title, author, body };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/posts', post)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.lyricPosts.push(post);
        this.lyricsUpdated.next([...this.lyricPosts]);
      });
  }
}
