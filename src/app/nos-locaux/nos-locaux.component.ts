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
      alt: 'local'
    },
    {
      image: '../../assets/images/Branzoé.jpg',
      alt: 'Bran'
    },
    {
      image: '../../assets/images/triplésarbre.jpg',
      alt: 'triplés arbre'
    },
    {
      image: '../../assets/images/axo.jpg',
      alt: 'axo'
    },
    {
      image: '../../assets/images/lulumimi.jpg',
      alt: 'lulu'
    },
    {
      image: '../../assets/images/LuluTokyo3.jpg',
      alt: 'lapines2'
    },
    {
      image: '../../assets/images/mimichat.jpg',
      alt: 'chaton'
    },
    {
      image: '../../assets/images/sansamimi.jpg',
      alt: 'sansa'
    },
    {
      image: '../../assets/images/tokyomimi.jpg',
      alt: 'tokyo'
    },
    {
      image: '../../assets/images/licemimi.jpg',
      alt: 'chat porté'
    },
    {
      image: '../../assets/images/triplés2.jpg',
      alt: 'triplés'
    },
    {
      thumbImage: '../../assets/images/thumbnsalle.jpg',
      video: '../../assets/video/sansson.mp4',
      alt: 'salle senso'
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

