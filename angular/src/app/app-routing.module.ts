import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: 'buyers', loadChildren: () => import('./buyers/buyers.module').then(m => m.BuyersModule) },

  { path: 'sellers', loadChildren: () => import('./sellers/sellers.module').then(m => m.SellersModule) },

  { path: 'commercials', loadChildren: () => import('./commercials/commercials.module').then(m => m.CommercialsModule) },

  { path: 'mortgage', loadChildren: () => import('./mortgage/mortgage.module').then(m => m.MortgageModule) },

  { path: 'area', loadChildren: () => import('./area/area.module').then(m => m.AreaModule) }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
// export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes)

export class AppRoutingModule {}