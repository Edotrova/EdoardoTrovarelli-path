import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditpostsComponent } from './editposts.component';

const routes: Routes = [{ path: '', component: EditpostsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditpostsRoutingModule { }
