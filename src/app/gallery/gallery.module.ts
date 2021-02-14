import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { GalleryWrapperComponent } from './gallery-wrapper/gallery-wrapper.component';
import { ImageListComponent } from './images-list/image-list.component';
import { GalleryActionsComponent } from './gallery-actions/gallery-actions.component';
import { ImageSelectedComponent } from './image-selected/image-selected.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    GalleryPageComponent,
    GalleryWrapperComponent,
    ImageListComponent,
    GalleryActionsComponent,
    ImageSelectedComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
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
