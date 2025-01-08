import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartcompComponent } from './cartcomp.component';

const routes: Routes = [{ path: '', component: CartcompComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartcompRoutingModule { }
