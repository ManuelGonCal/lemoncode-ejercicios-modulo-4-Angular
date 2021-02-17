import { Component, ElementRef, OnInit } from '@angular/core';
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

  constructor(private galleryService: GalleryService) {
    this.imagesList = [...this.galleryService.getImages()];
    this.selectedImage = this.imagesList[0];
}

  ngOnInit(): void {
  }

  handleListClick(target: number) {
    this.selectedImage = this.galleryService.getByIndex(target)
  }
}
