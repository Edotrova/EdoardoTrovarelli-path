import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HomePage } from './pages/home.page';
import { ActivePostsPage } from './pages/active-posts.page';
import { InactivePostsPage } from './pages/inactive-posts.page';
import { PostCardComponent } from './components/post-card.component';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { PostDetailsPage } from './pages/post-details.page';
import { UsersPage } from './pages/users.page';
import { UsersDetailsPage } from './pages/users-details.page';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePage,
    InactivePostsPage,
    PostCardComponent,
    MaiuscoloPipe,
    HighlightDirective,
    PostDetailsPage,
    UsersPage,
    UsersDetailsPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
