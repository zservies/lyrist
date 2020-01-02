import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { LyricPost } from '../lyric-post';

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
        "http://localhost:3000/api/posts"
      )
      .subscribe(postData => {
        this.lyricPosts = postData.posts;
        this.lyricsUpdated.next([...this.lyricPosts]);
      });
  }

  getPostUpdateListener() {
    return this.lyricsUpdated.asObservable();
  }

  addPost(title: string, author: string, body: string) {
    const post: LyricPost = { id: null, title: title, author: author, body: body };
    this.http
      .post<{ message: string }>("http://localhost:3000/api/posts", post)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.lyricPosts.push(post);
        this.lyricsUpdated.next([...this.lyricPosts]);
      });
  }

  getExample(): Observable<any> {
    return this.http.get(this.exampleUrl);
  }


}
