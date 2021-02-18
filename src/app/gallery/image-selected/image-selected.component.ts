import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { galleryImageEntity } from 'src/app/model/image-model';

@Component({
  selector: 'app-image-selected',
  templateUrl: './image-selected.component.html',
  styleUrls: ['./image-selected.component.scss'],
})
export class ImageSelectedComponent implements OnInit {
  @Input()
  actualImage: galleryImageEntity;

  @Input()
  zoom: number;

  @ViewChild('img')
  imageElement!: ElementRef;

  constructor() {
    this.actualImage = { id: 0, src: '', title: '' };
    this.zoom = 75;
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.changeSize();
  }

  // * Function that change the imageSize for the ZoomIn and ZoomOut Buttons
  private changeSize() {
    if (this.imageElement) {
      this.imageElement.nativeElement.style.maxWidth = this.zoom + '%';
    }
  }
}
