import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  lyricPosts = [];
  exampleUrl = '/assets/data/example.json';

  constructor(private http: HttpClient) { }

  getLyrics() {
    return this.lyricPosts;
  }

  setLyrics(createLyric) {
    this.lyricPosts.push(createLyric);
  }

  getExample(): Observable<any> {
    return this.http.get(this.exampleUrl);
  }
}
