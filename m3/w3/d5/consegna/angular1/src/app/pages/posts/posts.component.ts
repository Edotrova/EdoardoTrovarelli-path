import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posts } from 'src/app/posts';
import { PostsService } from 'src/app/posts.service';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


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

  GotoEdit(){
    this.router.navigate(['/editposts']);}

}
