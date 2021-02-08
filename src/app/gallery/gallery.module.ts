import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';



@NgModule({
  declarations: [GalleryPageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GalleryPageComponent
  ]
})
export class GalleryModule { }
