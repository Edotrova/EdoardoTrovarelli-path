import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './pages/home.page';
import { Route, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path:'',
    component: HomePage,
  },

  {
    path:'active-posts',
    loadChildren:() => import('./pages/active-posts.module').then(m => m.ActivePostsModule)
  },

  {
    path:'inactive-posts',
    loadChildren:() => import('./pages/inactive-posts.module').then(m => m.InactivePostsModule)
  },
  {
    path:'post-details/:id',
    loadChildren:() => import('./pages/post-details.module').then(m => m.PostDetailsModule)
  },
  {
    path:'users-details/:id',
    loadChildren:() => import('./pages/users-details.module').then(m => m.UsersDetailsModule)
  },
  {
    path:'users-page/:id',
    loadChildren:() => import('./pages/users-page.module').then(m => m.UsersPageModule)
  },



];

@NgModule({
  imports: 
    [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}) 
export class AppRoutingModule { }
