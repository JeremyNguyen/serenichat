import {Component, OnInit} from '@angular/core';

import * as moment from 'moment';
import {SeanceDto} from 'src/commons/dtos/seanceDto';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {FormulaireComponent} from '../formulaire/formulaire.component';
import DateUtil from '../../commons/utils/date-util';
import {ReservationService} from '../../commons/services/reservation.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CreneauDto} from '../../commons/dtos/creneauDto';

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
  creneaux: CreneauDto[] = [];

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
      (reservations: CreneauDto[]) => {
        this.creneaux = reservations.map(value => {
          const tzoffset = new Date().getTimezoneOffset() * 60000;
          value.debut = new Date( new Date(value.debut).getTime() + tzoffset);
          value.fin = new Date(new Date(value.fin).getTime() + tzoffset);
          return value;
        });
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
    const dispo = this.setDispo(moment(debut), moment(fin));
    return new SeanceDto(dispo, debut, fin);
  }

  setDispo(debut: moment.Moment, fin: moment.Moment) {
    if (debut.day() === 0 || debut.day() === 1) {
      return 'closed';
    }
    for (const creneau of this.creneaux) {
      const debutCreneau = moment(creneau.debut);
      const finCreneau = moment(creneau.fin);
      const isCreneauDemiJournee = finCreneau.hours() - debutCreneau.hours() > 1;
      if (debut.hours() === 13 && debut.minutes() === 30) {
        debut.add(30, 'm');
      }
      if (debutCreneau.isSameOrBefore(debut) && finCreneau.isSameOrAfter(fin)) {
        if (creneau.ferme) {
          return 'closed';
        }
        if (creneau.nbVisiteur === 2 || creneau.seanceIndividuelle) {
          return 'full';
        }
        if (creneau.nbVisiteur === 1) {
          return isCreneauDemiJournee ? 'half-day' : 'half-hour';
        }
      }
    }
    return 'empty';
  }

  private isDemiJourneePossible(seance: SeanceDto) {
    const dayOfSeance = seance.debut.getDay() - 1;
    const seancesOfDay = this.seances[dayOfSeance];
    const isMatinee = seance.debut.getHours() < 13;
    const seancesOfDemi = isMatinee ? seancesOfDay.slice(0, 3) : seancesOfDay.slice(3, 6);
    return seancesOfDemi.every((s: SeanceDto) => s.dispo === 'empty') || seancesOfDemi.every((s: SeanceDto) => s.dispo === 'half-day');
  }

  reserver(seance) {
    if (seance.dispo !== 'closed' && seance.dispo !== 'full') {
      const demiJourneePossible = this.isDemiJourneePossible(seance);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.height = '80%';
      dialogConfig.width = '80%';
      dialogConfig.data = {seance, demiJourneePossible};
      const matDialogRef = this.dialog.open(FormulaireComponent, dialogConfig);
      matDialogRef.afterClosed().subscribe(value => {
        if (value) {
          this.refreshWeek();
        }
      });
    }
  }
}
