import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormpostRoutingModule } from './formpost-routing.module';
import { FormpostComponent } from './formpost.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { DashboardRoutingModule } from '../pages/dashboard/dashboard-routing.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [
    FormpostComponent
  ],
  imports: [
    CommonModule,
    FormpostRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    NzInputModule,
    CommonModule,
    DashboardRoutingModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzFormModule,
    ReactiveFormsModule,
    FormsModule,
    NzGridModule,
    
  ]
})
export class FormpostModule { }
