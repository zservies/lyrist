import { Component, OnInit, Injectable } from '@angular/core';
import { LyricsService } from '../services/lyrics.service';
import { Subscription } from 'rxjs';
import { LyricPost } from '../lyric-post';

@Component({
  selector: 'app-browse-lyrics',
  templateUrl: './browse-lyrics.component.html',
  styleUrls: ['./browse-lyrics.component.scss']
})

@Injectable({providedIn: 'root'})
export class BrowseLyricsComponent implements OnInit {

  lyricPosts = [];
  private lyricsSub: Subscription;

  constructor(public lyricsService: LyricsService) { }

  ngOnInit() {
    this.lyricsService.getLyrics();
    this.lyricsSub = this.lyricsService.getLyricsUpdateListener()
      .subscribe((lyrics: LyricPost[]) => {
        this.lyricPosts = lyrics;
      });
  }

  ngOnDestroy() {
    this.lyricsSub.unsubscribe();
  }


}
