import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudPageComponent } from './crud-page/crud-page.component';



@NgModule({
  declarations: [CrudPageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CrudPageComponent,
  ]
})
export class CrudModule { }
