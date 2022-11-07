import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    DashboardRoutingModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzCardModule
  
  ]
})
export class UsersModule { }
