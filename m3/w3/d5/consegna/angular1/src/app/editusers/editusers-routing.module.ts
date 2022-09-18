import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditusersComponent } from './editusers.component';

const routes: Routes = [{ path: '', component: EditusersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditusersRoutingModule { }
