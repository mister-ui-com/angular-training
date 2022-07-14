import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComp1Component } from './components/test-comp1/test-comp1.component';
import { TestComp2Component } from './components/test-comp2/test-comp2.component';

const routes: Routes = [
  {path:'', redirectTo: 'compo1', pathMatch: 'full' },
  {path:'compo1', component: TestComp1Component },
  {path:'compo2', component: TestComp2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
