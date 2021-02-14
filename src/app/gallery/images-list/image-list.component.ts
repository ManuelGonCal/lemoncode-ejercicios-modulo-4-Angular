import { Component, OnInit } from '@angular/core';
import { galleryImageEntity } from 'src/app/model/image-model';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  imagesList : galleryImageEntity[]

  constructor(private galleryService: GalleryService) {
    this.imagesList = [...this.galleryService.galleryImages];
  }

  ngOnInit(): void {
  }

}
