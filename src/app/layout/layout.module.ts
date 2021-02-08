import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule } from '@angular/material/icon';

import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    MatIconModule
  ],
  exports: [
    MenuComponent
  ]
})
export class LayoutModule { }
