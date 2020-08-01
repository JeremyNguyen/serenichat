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
      image: '../../assets/images/tripléstxt.jpg',
      alt: 'triplés'
    },
    {
      image: '../../assets/images/LuluTokyotxt.jpg',
      alt: 'lapines'
    },
    {
      image: '../../assets/images/3axostxt.jpg',
      alt: 'axos'
    },
    {
      image: '../../assets/images/régatetxt.jpg',
      alt: 'regate'
    },
    {
      image: '../../assets/images/4ptxt.jpg',
      alt: '4 petites'
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
