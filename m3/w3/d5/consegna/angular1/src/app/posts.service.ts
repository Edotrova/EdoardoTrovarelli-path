import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  ApiPosts: string = "http://localhost:3000/posts"


  getAllPosts():Observable<Posts[]> {
    return this.http.get<Posts[]>(this.ApiPosts)
  }

  addPosts(post: Posts) {
    return this.http.post<Posts>(this.ApiPosts,post)
  }

  editPosts(post: Posts) {
    return this.http.patch<Posts>(this.ApiPosts+'/'+ post.id, post)
  }

  deletePosts(post: Posts) { 
    return this.http.delete<Posts>(this.ApiPosts+'/'+post.id)
  }
  

}
