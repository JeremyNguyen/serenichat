import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nos-locaux',
  templateUrl: './nos-locaux.component.html',
  styleUrls: ['./nos-locaux.component.scss']
})
export class NosLocauxComponent implements OnInit {

  showFlag = false;
  selectedImageIndex = -1;

  images: Array<object> = [
    {
      image: '../../assets/images/local global nos locaux.jpg',
      alt: 'local médiation animale Paris'
    },
    {
      image: '../../assets/images/tokyolulucaraliceson.jpg',
      alt: 'Lapines qui mangent'
    },
    {
      image: '../../assets/images/triplésarbrecotés.jpg',
      alt: 'Sansa, Bran et Arya'
    },
    {
      image: '../../assets/images/couleurindiepeutetrealiceson.jpg',
      alt: 'Indie ou Mia'
    },
    {
      image: '../../assets/images/axo.jpg',
      alt: 'Axolotls'
    },
    {
      image: '../../assets/images/Arya et Mia.jpg',
      alt: 'Arya et Mia'
    },
    {
      image: '../../assets/images/moilapinesaliceson.jpg',
      alt: 'Noémie et lapines'
    },
    {
      image: '../../assets/images/Moi et Bran NB.jpg',
      alt: 'Bran et Noémie'
    },
    {
      image: '../../assets/images/Tête Lili.jpg',
      alt: 'Lili'
    },
    {
      image: '../../assets/images/Arya câlin Mia.jpg',
      alt: 'Arya et Mia'
    },
    {
      image: '../../assets/images/Ventres Mia Régate.jpg',
      alt: 'Mia et Régate'
    },
    {
      thumbImage: '../../assets/images/thumbnsalle.jpg',
      video: '../../assets/video/sansson.mp4',
      alt: 'salle sensorielle'
    },
    {
      thumbImage: '../../assets/images/thumb mur.jpg',
      video: '../../assets/video/vid mur.mp4',
      alt: 'mur eau'
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
}

