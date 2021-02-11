import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { GalleryWrapperComponent } from './gallery-wrapper/gallery-wrapper.component';
import { ImageListComponent } from './images-list/image-list.component';
import { GalleryActionsComponent } from './gallery-actions/gallery-actions.component';
import { ImageSelectedComponent } from './image-selected/image-selected.component';



@NgModule({
  declarations: [
    GalleryPageComponent,
    GalleryWrapperComponent,
    ImageListComponent,
    GalleryActionsComponent,
    ImageSelectedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GalleryPageComponent,
    GalleryWrapperComponent,
    ImageListComponent,
    GalleryActionsComponent,
    ImageSelectedComponent
  ]
})
export class GalleryModule { }
