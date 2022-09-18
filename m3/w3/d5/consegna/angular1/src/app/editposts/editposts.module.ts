import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditpostsRoutingModule } from './editposts-routing.module';
import { EditpostsComponent } from './editposts.component';


@NgModule({
  declarations: [
    EditpostsComponent
  ],
  imports: [
    CommonModule,
    EditpostsRoutingModule
  ]
})
export class EditpostsModule { }
