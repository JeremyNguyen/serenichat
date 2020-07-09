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
      image: '../../assets/images/LuluTokyo2.png',
      alt: 'lapines1'
    },
    {
      image: '../../assets/images/LuluTokyo3.png',
      alt: 'lapines2'
    },
    {
      image: '../../assets/images/triplés2.jpg',
      alt: 'triplés'
    },
    {
      image: '../../assets/images/axo.jpg',
      alt: 'axo'
    },
    {
      image: '../../assets/images/salle 1.jpg',
      alt: 'salle1'
    },
    {
      image: '../../assets/images/salle2.jpg',
      alt: 'salle2'
    },
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
