import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';

import { AngularMaterialModule } from '../angular-material.module';

import { BuyersRoutingModule } from './buyers-routing.module';

import { HomeComponent } from './home/home.component';
import { CalgaryListingComponent } from './calgary-listing/calgary-listing.component';
import { BuyersNavBarComponent } from './buyers-nav-bar/buyers-nav-bar.component';
import { LocationSelectComponent } from './location-select/location-select.component';
import { PropertyTypeFilterComponent } from './property-type-filter/property-type-filter.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

import { ComponentsModule } from '../components/components.module';
import { PgalleryComponent } from './pgallery/pgallery.component';
import { AirdrieListingComponent } from './airdrie-listing/airdrie-listing.component';
import { ChestermereListingComponent } from './chestermere-listing/chestermere-listing.component';

@NgModule({
  declarations: [
    HomeComponent,
    CalgaryListingComponent,
    BuyersNavBarComponent,
    LocationSelectComponent,
    PropertyTypeFilterComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    ContactInfoComponent,
    PgalleryComponent,
    AirdrieListingComponent,
    ChestermereListingComponent
  ],
  imports: [
    CommonModule,
    BuyersRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    FlexLayoutModule,
    HttpClientModule,
    ComponentsModule,
    NgImageFullscreenViewModule
  ]
})
export class BuyersModule { }
