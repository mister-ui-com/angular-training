import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComp1Component } from './components/test-comp1/test-comp1.component';
import { TestComp2Component } from './components/test-comp2/test-comp2.component';
import { Test2Module } from '../test2/test2.module';


@NgModule({
  declarations: [
    TestComp1Component,
    TestComp2Component
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    Test2Module
  ],
  exports: [TestComp1Component, TestComp2Component]
})
export class TestModule { }
