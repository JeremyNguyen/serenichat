import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nos-pensionnaires',
  templateUrl: './nos-pensionnaires.component.html',
  styleUrls: ['./nos-pensionnaires.component.scss']
})
export class NosPensionnairesComponent implements OnInit {

  showFlag = false;
  selectedImageIndex = -1;

  images: Array<object> = [
    {
      image: '../../assets/images/aryaalicesontxt.jpg',
      alt: 'Arya'
    },
    {
      image: '../../assets/images/branalicesontxt.jpg',
      alt: 'Bran'
    },
    {
      image: '../../assets/images/sansa soleiltxt.jpg',
      alt: 'Sansa'
    },
    {
      image: '../../assets/images/régateperm.jpg',
      alt: 'Régate'
    },
    {
      image: '../../assets/images/tokyolulualicesontxt.jpg',
      alt: 'Lapines'
    },
    {
      image: '../../assets/images/3axostxt.jpg',
      alt: 'Axolotls'
    },
    {
      image: '../../assets/images/Berlioz.jpg',
      alt: 'Berlioz'
    },
    {
      image: '../../assets/images/Toulouse.jpg',
      alt: 'Toulouse'
    },
    {
      image: '../../assets/images/Princesse.jpg',
      alt: 'Princesse'
    },
    {
      image: '../../assets/images/Miaadoptxt.jpg',
      alt: 'Mia'
    },
    {
      image: '../../assets/images/indiealicesontxt.jpg',
      alt: 'Indie'
    },
    {
      image: '../../assets/images/Lili dodotxt.jpg',
      alt: 'Lili'
    }
  ];

  constructor() {
  }

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
