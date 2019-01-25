import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductComponent } from './addproduct/product.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MainadminpageComponent } from './mainadminpage/mainadminpage.component';

import {MatTabsModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../routing/app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ViewuploadedproductsComponent } from './viewuploadedproducts/viewuploadedproducts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [AddproductComponent, MainadminpageComponent, ViewuploadedproductsComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule ,
    MatSidenavModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports: [AddproductComponent]
})
export class AdminModule { }
