import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  lyricPosts = [];
  exampleUrl = '/assets/data/example.json';

  constructor(private http: HttpClient) { }

  getLyrics(): Observable<any> {
    return of(this.lyricPosts);
  }

  setLyrics(createLyric) {
    this.lyricPosts.push(createLyric);
  }

  getExample(): Observable<any> {
    return this.http.get(this.exampleUrl);
  }
}
