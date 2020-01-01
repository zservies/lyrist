import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { LyricPost } from '../lyric-post';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  lyricPosts: LyricPost[] = [];
  exampleUrl = '/assets/data/example.json';
  lyricsUpdated = new Subject<LyricPost[]>();

  constructor(private http: HttpClient) { }

  getLyrics() {
    // return this.http.get('http://localhost:3000/api/posts'); // TODO: Make api url dynamic.
    // return of(this.lyricPosts);
    return this.http
      .get<{message: string; posts: LyricPost[]}>('http://localhost:3000/api/posts')
        .subscribe((postData) => {
          this.lyricPosts = postData.posts;
          this.lyricsUpdated.next([...this.lyricPosts]);
        });
  }

  setLyrics(createLyric) {
    this.lyricPosts.push(createLyric);
  }

  getExample(): Observable<any> {
    return this.http.get(this.exampleUrl);
  }

  getLyricsUpdateListener() {
    return this.lyricsUpdated.asObservable();
  }
}
