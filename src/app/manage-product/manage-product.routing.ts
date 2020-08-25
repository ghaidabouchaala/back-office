import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    component: ListProductComponent
  },
  {
    path: 'product-add',
    component: AddProductComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageProductRoutingModule { }
