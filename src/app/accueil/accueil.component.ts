import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  showFlag = false;
  selectedImageIndex = -1;
  selectedImageIndex2 = -1;

  images: Array<any> = [
    {
      image: '../../assets/images/local global.jpg',
      alt: 'local médiation animale Paris'
    },
    {
      image: '../../assets/images/moichatnoirblancaliceson.jpg',
      alt: 'photo Noémie et chat'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  showLightbox(index) {
    this.selectedImageIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.selectedImageIndex = -1;
  }

  showLightbox2(index) {
    this.selectedImageIndex2 = index;
    this.showFlag = true;
  }

  closeEventHandler2() {
    this.showFlag = false;
    this.selectedImageIndex2 = -1;
  }
}
