import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from '../posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-formpost', 
  templateUrl: './formpost.component.html',
  styleUrls: ['./formpost.component.scss']
})
export class FormpostComponent implements OnInit {


  post: Posts = new Posts('','');
  posts:Posts [] = [];
  formAction: string | undefined;


  constructor(private postsSvc:PostsService, private router: Router) { }

  ngOnInit(): void {
    this.postsSvc.getAllPosts().subscribe(posts => this.posts = posts)
}

savePost(){
  this.postsSvc.addPosts(this.post).subscribe(res => {
    this.posts.push(res)
    this.post = new Posts('','')
  })
}


editPost(){
  this.postsSvc.editPosts(this.post).subscribe(res => {
    let index = this.posts.findIndex(p => p.id === this.post.id)
    this.posts.splice(index,1, this.post)
    this.formAction = 'create'
  })
}

deletePost(post:Posts){
  this.postsSvc.deletePosts(post).subscribe(res => {
    let index = this.posts.findIndex(p => p.id === post.id)
    this.posts.splice(index,1)
  })
}

Back(): void {
  this.router.navigate(['/dashboard']);
}


}

