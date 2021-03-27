import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularMaterialModule } from '../angular-material.module';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeNavBarComponent } from './home-nav-bar/home-nav-bar.component';
import { PropertyComponent } from './property/property.component';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    HomeComponent, 
    ContactUsComponent, 
    HomeNavBarComponent,
    PropertyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    ComponentsModule
  ]
})
export class HomeModule { }
