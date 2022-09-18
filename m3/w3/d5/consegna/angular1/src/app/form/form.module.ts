import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { DashboardRoutingModule } from '../pages/dashboard/dashboard-routing.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';




@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    DashboardRoutingModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzFormModule,
    ReactiveFormsModule,
    FormsModule,
    NzGridModule,
    

    
  
  ]
})
export class FormModule { }


