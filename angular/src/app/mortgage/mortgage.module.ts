import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularMaterialModule } from '../angular-material.module';

import { ComponentsModule } from '../components/components.module';

import { MortgageRoutingModule } from './mortgage-routing.module';
import { MortgageNavBarComponent } from './mortgage-nav-bar/mortgage-nav-bar.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [MortgageNavBarComponent, HomeComponent],
  imports: [
    CommonModule,
    MortgageRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    ComponentsModule,
  ]
})
export class MortgageModule { }
