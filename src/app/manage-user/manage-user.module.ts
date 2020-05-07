import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import {ListUserComponent} from "./list-user/list-user.component";
import {ManageUserRoutingModule} from "./manage-user.routing";


@NgModule({
  imports: [
    CommonModule,
    ManageUserRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    ListUserComponent
  ]
})
export class ManageUserModule {
}
