import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CalgaryListingComponent } from './calgary-listing/calgary-listing.component';
import { AirdrieListingComponent } from './airdrie-listing/airdrie-listing.component';
import { ChestermereListingComponent } from './chestermere-listing/chestermere-listing.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'calgary-listing', component: CalgaryListingComponent },
  { path: 'airdrie-listing', component: AirdrieListingComponent },
  { path: 'chestermere-listing', component: ChestermereListingComponent },
  { path: 'property-detail/:City/:ListingKeyNumeric', component: PropertyDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyersRoutingModule { }
