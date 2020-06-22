import {Component, OnInit} from '@angular/core';

import moment from 'moment';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  startOfWeek: Date;
  endOfWeek: Date;

  creneaux = {
    0: null,
    1: null,
    2: ['9:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00'],
    3: ['9:00', '14:00'],
    4: ['9:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00'],
    5: ['9:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00'],
    6: ['9:00', '14:00'],
  };

  dureeSeance = {
    0: null,
    1: null,
    2: 1,
    3: 4,
    4: 1,
    5: 1,
    6: 4
  };

  constructor() {
  }

  ngOnInit(): void {
    this.startOfWeek = moment().startOf('week').add('d', 1).toDate();
    this.endOfWeek = moment().endOf('week').add('d', 1).toDate();
  }

  debug() {
/*    console.log(this.startOfWeek);
    console.log(this.endOfWeek);
    console.log(this.getWeek());*/

    for (const day of this.getWeek()) {
      console.log(day);
      console.log(this.getCreneauxForDay(day));
      console.log(this.getDureeSeanceForDay(day));
    }

  }

  getCreneauxForDay(day: Date) {
    return this.creneaux[day.getDay()];
  }

  getDureeSeanceForDay(day: Date) {
    return this.dureeSeance[day.getDay()];
  }

  getWeek() {
    const week = [];
    week.push();
    for (let i = 0; i < 7; i++) {
      week.push(moment(this.startOfWeek).add('d', i).toDate());
    }
    return week;
  }

  addDays(days: number) {
    this.startOfWeek = moment(this.startOfWeek).add('d', days).toDate();
    this.endOfWeek = moment(this.endOfWeek).add('d', days).toDate();
  }
}
