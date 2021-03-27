import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../angular-material.module';

import { ComponentsRoutingModule } from './components-routing.module';

import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { AutocompleteComponent  } from './google-places/google-places.component';

@NgModule({
  declarations: [
    ScrollToTopComponent,
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AutocompleteComponent,
    ScrollToTopComponent
  ],

})
export class ComponentsModule { }
