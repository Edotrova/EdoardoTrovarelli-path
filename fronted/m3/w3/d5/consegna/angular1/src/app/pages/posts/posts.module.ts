import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';


@NgModule({
  declarations: [
    PostsComponent,
    
  
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    DashboardRoutingModule,
    NzBreadCrumbModule,
    NzLayoutModule,
  
  ]
})
export class PostsModule { }
