import {Component, OnInit} from '@angular/core';

import * as moment from 'moment';
import {SeanceDto} from 'src/commons/dtos/seanceDto';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {FormulaireComponent} from '../formulaire/formulaire.component';
import DateUtil from '../../commons/utils/date-util';
import {ReservationService} from '../../commons/services/reservation.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  startOfWeek: Date;
  endOfWeek: Date;
  week = [];
  seances = [[], [], [], [], [], [], []];
  reservations = [];

  jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  seancesLibelles = [
    'Matin 1',
    'Matin 2',
    'Midi 1',
    'Après-midi 1',
    'Après-midi 2',
    'Après-midi 3'
  ];

  constructor(private dialog: MatDialog,
              private reservationService: ReservationService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.startOfWeek = moment().startOf('week').add(1, 'd').toDate();
    this.endOfWeek = moment().endOf('week').add(1, 'd').toDate();
    this.refreshWeek();
  }

  getDay(day: number, short: boolean) {
    return short ? (this.jours[day].substring(0, 3)) + '.' : this.jours[day];
  }

  getDate(date: Date) {
    return DateUtil.getDate(date);
  }

  addDays(days: number) {
    this.startOfWeek = moment(this.startOfWeek).add(days, 'd').toDate();
    this.endOfWeek = moment(this.endOfWeek).add(days, 'd').toDate();
    this.refreshWeek();
  }

  refreshWeek() {
    this.reservationService.getReservations(this.startOfWeek, this.endOfWeek).subscribe(
      reservations => {
        this.reservations = reservations;
        this.week = [];
        this.seances = [[], [], [], [], [], [], []];
        for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
          const day = moment(this.startOfWeek).add(dayIndex, 'd').toDate();
          this.week.push(day);
          for (let seanceIndex = 0; seanceIndex < this.seancesLibelles.length; seanceIndex++) {
            this.seances[dayIndex][seanceIndex] = this.initSeance(day, seanceIndex);
          }
        }
      },
      error => {
        this.snackBar.open(error.message, 'Fermer');
      });
  }

  getCreneauxByIndexSeance(index: number) {
    switch (index) {
      case 0:
        return {debutHour: 9, debutMin: 0, finHour: 10, finMin: 0};
      case 1:
        return {debutHour: 10, debutMin: 30, finHour: 11, finMin: 30};
      case 2:
        return {debutHour: 12, debutMin: 0, finHour: 13, finMin: 0};
      case 3:
        return {debutHour: 13, debutMin: 30, finHour: 14, finMin: 30};
      case 4:
        return {debutHour: 15, debutMin: 0, finHour: 16, finMin: 0};
      case 5:
        return {debutHour: 16, debutMin: 30, finHour: 17, finMin: 30};
    }
  }

  getSeancesByIndex(index: number) {
    if (!this.seances.length) {
      return [];
    }
    return this.seances.map(seancesForDay => seancesForDay[index]);
  }

  initSeance(day: Date, indexSeance: number) {
    const creneau = this.getCreneauxByIndexSeance(indexSeance);
    const debut = new Date(day.getTime());
    debut.setHours(creneau.debutHour, creneau.debutMin, 0, 0);
    const fin = new Date(day.getTime());
    fin.setHours(creneau.finHour, creneau.finMin, 0, 0);
    const dispo = this.setDispo(debut, fin);
    return new SeanceDto(dispo, debut, fin);
  }

  setDispo(debut: Date, fin: Date) {
    if (debut.getDay() === 0 || debut.getDay() === 1) {
      return 'closed';
    }
    // TODO /!\ demi journee lock les autres
    const dispos = ['full', 'empty', 'half'];
    return dispos[Math.floor(Math.random() * dispos.length)];
  }

  reserver(seance) {
    if (seance.dispo !== 'closed' && seance.dispo !== 'full') {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.height = '80%';
      dialogConfig.width = '80%';
      dialogConfig.data = {seance};
      const matDialogRef = this.dialog.open(FormulaireComponent, dialogConfig);
      matDialogRef.afterClosed().subscribe(value => {
        if (value) {
          this.refreshWeek();
        }
      });
    }
  }
}
