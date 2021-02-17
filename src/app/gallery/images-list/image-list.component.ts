import { Component, Input, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { galleryImageEntity } from 'src/app/model/image-model';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  @Input()
  images: galleryImageEntity[]

  @Output()
  handleClick: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.images = [];
  }

  ngOnInit(): void {
  }

  onImageClick(index: number, imageListElement: HTMLDivElement) {
    const imagesList = Array.from(imageListElement.children);

    imagesList.forEach(imageWrapper => imageWrapper.classList.remove('selected'))
    imagesList[index].classList.add('selected');
    this.handleClick.emit(index)
  }
}
