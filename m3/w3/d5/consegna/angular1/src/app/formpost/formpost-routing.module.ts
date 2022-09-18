import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormpostComponent } from './formpost.component';

const routes: Routes = [{ path: '', component: FormpostComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormpostRoutingModule { }
