import {Component, OnInit} from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  startOfWeek: Date;  
  endOfWeek: Date;

  jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

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
    this.startOfWeek = moment().startOf('week').add(1, 'd').toDate();
    this.endOfWeek = moment().endOf('week').add(1, 'd').toDate();
  }

  debug() {
/*    console.log(this.startOfWeek);
    console.log(this.endOfWeek);
    console.log(this.getWeek());*/

    for (const day of this.getWeek()) {
      console.log(day);
    }

  }

  getCreneauxForDay(day: Date) {
    return this.creneaux[day.getDay()];
  }

  getDureeSeanceForDay(day: Date) {
    return this.dureeSeance[day.getDay()];
  }

  getDay(day: number, short: boolean) {
    return short ? (this.jours[day].substring(0, 3)) + '.' : this.jours[day];
  }

  getDate(date: Date) {
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
    return `${day}/${month}`;
  }

  getWeek() {
    const week = [];
    week.push();
    for (let i = 0; i < 7; i++) {
      week.push(moment(this.startOfWeek).add(i, 'd').toDate());
    }
    return week;
  }

  addDays(days: number) {
    this.startOfWeek = moment(this.startOfWeek).add(days, 'd').toDate();
    this.endOfWeek = moment(this.endOfWeek).add(days, 'd').toDate();
  }
}
