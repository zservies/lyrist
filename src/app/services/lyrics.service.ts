import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { LyricPost } from '../interfaces/lyric-post.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  private lyricPosts: LyricPost[] = [];
  exampleUrl = '/assets/data/example.json';
  private lyricsUpdated = new Subject<LyricPost[]>();

  constructor(private http: HttpClient) { }
  getPost(id: string) {
    return{...this.lyricPosts.find(p => p.id === id)};
  }
  getPosts() {
    this.http
      .get<{ message: string; posts: any }>(
        'http://localhost:3000/api/posts'
      )
      // Transform the response coming from MongoDB to return a different object without _id.
      .pipe(map((postData) => {
        return postData.posts.map(post => {
          return {
            id: post._id,
            title: post.title,
            author: post.author,
            body: post.body
          }
        });
      }))
      .subscribe(transformedPosts => {
        // Checks if lyricPosts is empty - meaning no new posts have been added. If no new posts -> load what is stored.
        // If new posts -> add what is stored to the newest posts array.
        if (this.lyricPosts.length === 0) {
          this.lyricPosts = transformedPosts;
        } else {
          this.lyricPosts.concat(transformedPosts); // Adds fetched data from backend to lyircPosts array.
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
      .post<{ message: string, postId: string }>('http://localhost:3000/api/posts', post)
      .subscribe(responseData => {
        const postId = responseData.postId; // Post ID from MongoDB.
        post.id = postId; // Add postId to post.
        this.lyricPosts.push(post);
        this.lyricsUpdated.next([...this.lyricPosts]);
      });
  }

  updatePost(id: string, title: string, author: string, body: string) {
    const post: LyricPost = {id, title, author, body};
    this.http.put('http://localhost:3000/api/posts/' + id, post)
      .subscribe(response => console.log(response));
  }

  deletePost(postId: string) {
    this.http.delete('http://localhost:3000/api/posts/' + postId)
      .subscribe(() => {
        // Returns subset of lyricPosts array. Removes deleted post from array.
        const updatedLyrics = this.lyricPosts.filter(lyric => lyric.id !== postId);
        this.lyricPosts = updatedLyrics;
        this.lyricsUpdated.next([...this.lyricPosts]);
      });
  }
}
