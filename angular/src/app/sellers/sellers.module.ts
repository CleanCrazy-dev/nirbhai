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

import { SellersRoutingModule } from './sellers-routing.module';

import { SellersHomeComponent } from './sellers-home/sellers-home.component';
import { SellersGetHomeComponent } from './sellers-get-home/sellers-get-home.component';
import { SellersPropertyFoundComponent } from './sellers-property-found/sellers-property-found.component';
import { ThinkSellingComponent } from './think-selling/think-selling.component';
import { WhoSellingComponent } from './who-selling/who-selling.component';
import { SellersNavBarComponent } from './sellers-nav-bar/sellers-nav-bar.component';


@NgModule({
  declarations: [
    SellersHomeComponent,
    SellersGetHomeComponent,
    SellersPropertyFoundComponent,
    ThinkSellingComponent,
    WhoSellingComponent,
    SellersNavBarComponent,
  ],
  imports: [
    CommonModule,
    SellersRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    FlexLayoutModule,
    HttpClientModule,
    ComponentsModule
  ]
})
export class SellersModule { }
