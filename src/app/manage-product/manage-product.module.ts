import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ManageProductRoutingModule} from './manage-product.routing';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import {SharedModule} from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    ManageProductRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    AddProductComponent,
    ListProductComponent
  ]
})
export class ManageProductModule {
}
