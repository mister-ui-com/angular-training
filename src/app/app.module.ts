import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductSpecsComponent } from './product-specs/product-specs.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { GenericInterceptorInterceptor } from './interceptors/generic-interceptor.interceptor';
import { StudentListComponent } from './student-list/student-list.component';
import { HighlightJsModule } from 'ngx-highlight-js';
import { SharedModule } from './shared/shared.module';
import { ParentComponent } from './data-sharing/parent/parent.component';
import { ChildComponent } from './data-sharing/child/child.component';
import { NgIfExampleComponent } from './structural-directives/ng-if-example/ng-if-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    ProductDetailsComponent,
    ProductOverviewComponent,
    ProductSpecsComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    StudentDetailsComponent,
    StudentListComponent,
    ParentComponent,
    ChildComponent,
    NgIfExampleComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighlightJsModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GenericInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
