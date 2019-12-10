import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'foo',
    loadChildren: () => import('./foo/foo.module').then(mod => mod.FooModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
