import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  
  },
  { path: 'dashboard',
   loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) 
  },
  { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule), canActivate: [AuthGuard] },
  { path: 'posts', loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule) },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'formpost', loadChildren: () => import('./formpost/formpost.module').then(m => m.FormpostModule), canActivate: [AuthGuard] },
  { path: 'editposts', loadChildren: () => import('./editposts/editposts.module').then(m => m.EditpostsModule) },
  { path: 'editusers', loadChildren: () => import('./editusers/editusers.module').then(m => m.EditusersModule),  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
