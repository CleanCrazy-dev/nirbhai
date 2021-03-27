import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularMaterialModule } from '../angular-material.module';

import { CommercialsRoutingModule } from './commercials-routing.module';
import { CommercialsNavBarComponent } from './commercials-nav-bar/commercials-nav-bar.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [CommercialsNavBarComponent, HomeComponent],
  imports: [
    CommonModule,
    CommercialsRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
  ]
})
export class CommercialsModule { }
