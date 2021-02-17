import { Injectable } from '@angular/core';
import { galleryImageEntity } from '../model/image-model';


@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  galleryImages : galleryImageEntity[];

  constructor() {
    this.galleryImages = [
      {id: 0, src:'/assets/gallery/img1.jpg',title:'Trooper in Kashyyyk'},
      {id: 1, src:'assets/gallery/img2.jpg',title:'The battle of Hoth'},
      {id: 2, src:'assets/gallery/img3.jpg',title:'Troopers in Tatooine'},
      {id: 3, src:'assets/gallery/img4.jpg',title:'Gatsu swinging his sword'},
      {id: 4, src:'assets/gallery/img5.png',title:'Neo Tokyo Explosion'},
      {id: 5, src:'assets/gallery/img6.png',title:'Saitama normal punch'},
      {id: 6, src:'assets/gallery/img7.jpg',title:'Astronaut psychedelia'},
      {id: 7, src:'assets/gallery/img8.png',title:'Akira'},
    ]
  }

  getImages(): galleryImageEntity[] {
    return [...this.galleryImages]
  }

  getByIndex(index: number): galleryImageEntity {
    return this.galleryImages[index]
  }
}
