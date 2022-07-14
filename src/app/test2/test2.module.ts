import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2comp1Component } from './test2comp1/test2comp1.component';



@NgModule({
  declarations: [
    Test2comp1Component
  ],
  imports: [
    CommonModule
  ],
  exports: [Test2comp1Component]
})
export class Test2Module { }
