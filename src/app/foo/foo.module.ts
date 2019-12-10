import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { FooComponent } from './foo.component';

const routes = [
  {
    path: '',
    component: FooComponent
  },
];

@NgModule({
  declarations: [FooComponent],
  imports: [
    CommonModule,
      RouterModule.forChild(routes)
  ]
})
export class FooModule { }
console.log('App starting');