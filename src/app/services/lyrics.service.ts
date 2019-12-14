import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  lyricPosts = [];

  constructor() { }

  getLyrics() {
    return this.lyricPosts;
  }

  setLyrics(createLyric) {
    this.lyricPosts.push(createLyric);
  }
}
