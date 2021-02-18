import { Component, OnInit } from '@angular/core';
import { galleryImageEntity } from 'src/app/model/image-model';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-wrapper',
  templateUrl: './gallery-wrapper.component.html',
  styleUrls: ['./gallery-wrapper.component.scss'],
})
export class GalleryWrapperComponent implements OnInit {
  imagesList: galleryImageEntity[];
  selectedImage: galleryImageEntity;
  actualPosition: number;
  actualZoom: number;
  imagesIntervalId: number;

  constructor(private galleryService: GalleryService) {
    this.imagesList = [...this.galleryService.getImages()];
    this.selectedImage = this.imagesList[0];
    this.actualPosition = 0;
    this.actualZoom = 75;
    this.imagesIntervalId = 0;
  }

  ngOnInit(): void {}

  handleListClick(index: number) {
    this.actualPosition = index;
    this.selectedImage = this.galleryService.getByIndex(this.actualPosition);
  }

  handleNavigationClick(index: number) {
    this.actualPosition = index;
    this.selectedImage = this.galleryService.getByIndex(this.actualPosition);
  }

  handleZoomClick(sizeCounter: number) {
    this.actualZoom = this.actualZoom + sizeCounter;

    if (this.actualZoom > 100) this.actualZoom = 100;
    if (this.actualZoom < 0) this.actualZoom = 0;
  }

  loopImages() {
    if (this.actualPosition + 1 >= this.imagesList.length) {
      this.actualPosition = 0;
    } else {
      this.actualPosition = this.actualPosition + 1;
    }
    this.selectedImage = this.galleryService.getByIndex(this.actualPosition);
  }

  handlePlayClick(isPlaying: boolean) {
    if (isPlaying) {
      this.imagesIntervalId = window.setInterval(() => {
        this.loopImages();
      }, 2000);
    } else {
      window.clearInterval(this.imagesIntervalId);
    }
  }
}
