import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductSpecsComponent } from './product-specs/product-specs.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';


const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch:"full"},
  
  {path: 'home', component: HomeComponent},
  {path: 'test', loadChildren: () => import('./test/test.module').then(mod => mod.TestModule)  },

  {path: 'students', component: StudentListComponent},
  {path: 'students/details/:studentId', component: StudentDetailsComponent},
  // {path: 'product-details/:productId', component: ProductDetailsComponent, 
  //   children: [
  //     {path: '', redirectTo: 'overview', pathMatch: "prefix"},
  //     {path: 'overview', component: ProductOverviewComponent},
  //     {path: 'specs', component: ProductSpecsComponent},
  //     {path: '**', redirectTo: 'overview', pathMatch: "full"},
  //   ]},
    // {path: '**', redirectTo: 'home', pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
