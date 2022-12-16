import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistenzaRoutingModule } from './assistenza-routing.module';
import { AssistenzaComponent } from './assistenza.component';


@NgModule({
  declarations: [
    AssistenzaComponent
  ],
  imports: [
    CommonModule,
    AssistenzaRoutingModule
  ]
})
export class AssistenzaModule { }
