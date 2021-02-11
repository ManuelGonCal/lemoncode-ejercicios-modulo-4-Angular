import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule } from '@angular/material/icon';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PrivateMenuComponent } from './private-menu/private-menu.component';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    PrivateMenuComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    PrivateMenuComponent,
    MenuComponent,
    FooterComponent,
  ]
})
export class LayoutModule { }
