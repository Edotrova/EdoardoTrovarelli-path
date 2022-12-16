import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pages/home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'auth/login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'auth/register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'assistenza', loadChildren: () => import('./pages/assistenza/assistenza.module').then(m => m.AssistenzaModule) },
  { path: 'overview', loadChildren: () => import('./pages/overview/overview.module').then(m => m.OverviewModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
