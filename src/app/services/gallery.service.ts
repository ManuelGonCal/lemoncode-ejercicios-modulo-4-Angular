import { Injectable } from '@angular/core';
import { galleryImageEntity } from '../model/image-model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  galleryImages : galleryImageEntity[];

  constructor() {
    this.galleryImages = [
      {id: 1, src:'img1.jpg',title:'Trooper in Kashyyyk'},
      {id: 2, src:'img2.jpg',title:'The battle of Hoth'},
      {id: 3, src:'img3.jpg',title:'Troopers in Tatooine'},
      {id: 4, src:'img4.jpg',title:'Gatsu swinging his sword'},
      {id: 5, src:'img5.png',title:'Neo Tokyo Explosion'},
      {id: 6, src:'img6.png',title:'Saitama normal punch'},
      {id: 7, src:'img7.jpg',title:'Astronaut psychedelia'},
      {id: 8, src:'img7.png',title:'Akira'},
    ] 
  }

  getImages(): galleryImageEntity[] {
    return [...this.galleryImages]
  }
}
