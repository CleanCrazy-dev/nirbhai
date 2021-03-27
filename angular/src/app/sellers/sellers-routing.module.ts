import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellersHomeComponent } from './sellers-home/sellers-home.component';
import { SellersGetHomeComponent } from './sellers-get-home/sellers-get-home.component';
import { SellersPropertyFoundComponent } from './sellers-property-found/sellers-property-found.component';
import { ThinkSellingComponent } from './think-selling/think-selling.component';
import { WhoSellingComponent } from './who-selling/who-selling.component';


const routes: Routes = [
  { path: 'home', component: SellersHomeComponent },
  { path: 'property-found', component: SellersPropertyFoundComponent },
  { path: 'get-home-value', component: SellersGetHomeComponent },
  { path: 'think-of-selling', component: ThinkSellingComponent },
  { path: 'who-selling', component: WhoSellingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellersRoutingModule { }
