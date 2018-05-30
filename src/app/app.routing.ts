import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FullLayoutComponent} from './full-layout/full-layout.component';
import {LoginComponent} from './login/login.component';


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
        loadChildren: './example/example.module#ExampleModule'
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
