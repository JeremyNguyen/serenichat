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
      image: '../../assets/images/sansaalicesontxt.jpg',
      alt: 'Sansa'
    },
    {
      image: '../../assets/images/régatemoitxt.jpg',
      alt: 'Regate'
    },
    {
      image: '../../assets/images/tokyolulualicesontxt.jpg',
      alt: 'Lapines'
    },
    {
      image: '../../assets/images/miasansatxt.jpg',
      alt: 'Mia'
    },
    {
      image: '../../assets/images/indiealicesontxt.jpg',
      alt: 'Indie'
    },
    {
      image: '../../assets/images/lilitxt.jpg',
      alt: 'Lili'
    },
    {
      image: '../../assets/images/3axostxt.jpg',
      alt: 'Axolotls'
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
