import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistenzaComponent } from './assistenza.component';

const routes: Routes = [{ path: '', component: AssistenzaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistenzaRoutingModule { }
