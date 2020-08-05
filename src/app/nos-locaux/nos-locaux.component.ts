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
      image: '../../assets/images/local global.jpg',
      alt: 'local médiation animale Paris'
    },
    {
      image: '../../assets/images/Branzoé.jpg',
      alt: 'Bran chat'
    },
    {
      image: '../../assets/images/triplésarbre.jpg',
      alt: 'triplés chats arbre'
    },
    {
      image: '../../assets/images/axo.jpg',
      alt: 'axolotls'
    },
    {
      image: '../../assets/images/lulumimi.jpg',
      alt: 'Lulu lapine'
    },
    {
      image: '../../assets/images/LuluTokyo3.jpg',
      alt: 'lapines'
    },
    {
      image: '../../assets/images/mimichat.jpg',
      alt: 'chaton'
    },
    {
      image: '../../assets/images/sansamimi.jpg',
      alt: 'Sansa chat'
    },
    {
      image: '../../assets/images/tokyomimi.jpg',
      alt: 'Tokyo lapine'
    },
    {
      image: '../../assets/images/licemimi.jpg',
      alt: 'chat porté'
    },
    {
      image: '../../assets/images/triplés2.jpg',
      alt: 'triplés chats'
    },
    {
      thumbImage: '../../assets/images/thumbnsalle.jpg',
      video: '../../assets/video/sansson.mp4',
      alt: 'salle sensorielle'
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

