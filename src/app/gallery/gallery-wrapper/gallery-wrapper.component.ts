import { Component, OnInit } from '@angular/core';
import { galleryImageEntity } from 'src/app/model/image-model';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-wrapper',
  templateUrl: './gallery-wrapper.component.html',
  styleUrls: ['./gallery-wrapper.component.scss']
})
export class GalleryWrapperComponent implements OnInit {

  imagesList : galleryImageEntity[]
  selectedImage: galleryImageEntity;
  actualPosition: number;

  constructor(private galleryService: GalleryService) {
    this.imagesList = [...this.galleryService.getImages()];
    this.selectedImage = this.imagesList[0];
    this.actualPosition = 0;
}

  ngOnInit(): void {
  }

  handleListClick(index: number) {
    this.actualPosition = index;
    this.selectedImage = this.galleryService.getByIndex(this.actualPosition)
  }

  handleNavigationClick(index: number) {
    this.actualPosition = index;
    this.selectedImage = this.galleryService.getByIndex(this.actualPosition)
  }
}
