import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditusersRoutingModule } from './editusers-routing.module';
import { EditusersComponent } from './editusers.component';


@NgModule({
  declarations: [
    EditusersComponent
  ],
  imports: [
    CommonModule,
    EditusersRoutingModule
  ]
})
export class EditusersModule { }
