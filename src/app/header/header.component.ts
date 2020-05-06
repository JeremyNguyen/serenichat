import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  getLinkClass(route: string) {
    if (this.router.url === route) {
      return 'typo-link selected';
    } else {
      return 'typo-link';
    }
  }
}
