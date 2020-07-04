import {Component, OnInit} from '@angular/core';

import * as moment from 'moment';
import { SeanceDto } from 'src/commons/dtos/seanceDto';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  startOfWeek: Date;  
  endOfWeek: Date;

  jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

  seances = [
    new SeanceDto('Matin 1', '9h00', '10h00'),
    new SeanceDto('Matin 2', '10h30', '11h30'),
    new SeanceDto('Midi 1', '12h00', '13h00'),
    new SeanceDto('Après-midi 1', '13h30', '14h30'),
    new SeanceDto('Après-midi 2', '15h00', '16h00'),
    new SeanceDto('Après-midi 3', '16h30', '17h30')
  ]

  constructor() {
  }

  ngOnInit(): void {
    this.startOfWeek = moment().startOf('week').add(1, 'd').toDate();
    this.endOfWeek = moment().endOf('week').add(1, 'd').toDate();
  }

  debug(day, seance) {
    // for (const day of this.getWeek()) {
    //   console.log(day);
    // }

    alert(day.getDate() + seance.libelle + seance.debut + seance.fin);

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
