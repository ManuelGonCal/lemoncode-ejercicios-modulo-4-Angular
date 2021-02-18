import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { galleryImageEntity } from 'src/app/model/image-model';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  @Input()
  images: galleryImageEntity[]

  @Input()
  actualIndex: number

  @Output()
  listClick: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.images = [];
    this.actualIndex = 0;
  }

  ngOnInit(): void {
  }

  onImageClick(index: number) {
    this.actualIndex = index;

    this.listClick.emit(this.actualIndex)
  }
}
