import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FullLayoutComponent} from './full-layout/full-layout.component';
import {LoginComponent} from './login/login.component';
import {ExampleModule} from "./example/example.module";
import { ManageProductModule } from './manage-product/manage-product.module';


export function loadExampleModule() {
  return ExampleModule;
}
export function loadManageProductModule() {
  return ManageProductModule;
}

export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'example',
        loadChildren: loadExampleModule
      },
      {
        path: 'products',
        loadChildren: loadManageProductModule
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
