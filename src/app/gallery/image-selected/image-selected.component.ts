import { Component, Input, OnInit } from '@angular/core';
import { galleryImageEntity } from 'src/app/model/image-model';

@Component({
  selector: 'app-image-selected',
  templateUrl: './image-selected.component.html',
  styleUrls: ['./image-selected.component.scss']
})
export class ImageSelectedComponent implements OnInit {
  @Input()
  actualImage: galleryImageEntity

  constructor() {
    this.actualImage = {id: 0, src: '', title: ''}
  }

  ngOnInit(): void {
  }

}
