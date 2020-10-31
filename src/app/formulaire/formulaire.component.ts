import {Component, Inject, OnInit} from '@angular/core';
import {ReservationComponent} from '../reservation/reservation.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import DateUtil from '../../commons/utils/date-util';
import {NgForm} from '@angular/forms';
import {FormulaireDto} from '../../commons/dtos/formulaireDto';
import {SeanceDto} from '../../commons/dtos/seanceDto';
import {ReservationService} from '../../commons/services/reservation.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  submitted = false;
  formulaireDto = new FormulaireDto();
  demiJournee = false;
  typeSeance = 'mediation';
  checkboxConditions = false;
  checkboxPrivacy = false;
  seance: SeanceDto;

  constructor(public dialogRef: MatDialogRef<ReservationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private reservationService: ReservationService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.seance = this.data.seance;
    this.demiJournee = this.seance.dispo === 'half-day';
    this.setHoraires();
  }

  getDemiJourneeLabel() {
    return this.seance.debut.getHours() >= 13 ?
      'Après-midi complète (14h00 - 18h00)'
      : 'Matinée complète (9h00 - 13h00)';
  }

  getDate(date: Date) {
    return DateUtil.getDate(date);
  }

  getTime(date: Date) {
    return DateUtil.getTime(date);
  }

  getPrice() {
    let price;
    if (this.formulaireDto.seanceIndividuelle) {
      price = this.demiJournee ? 90 : 30;
    } else {
      if (this.demiJournee) {
        price = this.formulaireDto.nbVisiteur === 1 ? 60 : 100;
      } else {
        price = this.formulaireDto.nbVisiteur === 1 ? 20 : 35;
      }
    }
    return price;
  }

  onTypeSeanceChange() {
    this.formulaireDto.seanceIndividuelle = this.typeSeance === 'cours';
    if (this.typeSeance === 'cours') {
      this.formulaireDto.accompagnementVisiteur = false;
    }
    this.seanceIndividuelleChange();
  }

  seanceIndividuelleChange() {
    if (this.formulaireDto.seanceIndividuelle) {
      this.formulaireDto.nbVisiteur = 1;
      this.formulaireDto.prenomVisiteur2 = null;
    }
  }

  setHoraires() {
    if (this.demiJournee) {
      const debut = new Date(this.seance.debut.getTime());
      const fin = new Date(this.seance.debut.getTime());
      debut.setHours(this.seance.debut.getHours() < 13 ? 9 : 14);
      fin.setHours(this.seance.debut.getHours() < 13 ? 13 : 18);
      debut.setMinutes(0);
      fin.setMinutes(0);
      this.formulaireDto.debut = debut;
      this.formulaireDto.fin = fin;
    } else {
      this.formulaireDto.debut = this.seance.debut;
      this.formulaireDto.fin = this.seance.fin;
    }
  }

  reserver(form: NgForm) {
    if (form.valid && this.checkboxConditions && this.checkboxPrivacy) {
      this.formulaireDto.prix = this.getPrice();
      this.reservationService.reserver(this.formulaireDto).subscribe(
        () => {
          this.snackBar.open('Votre réservation a été envoyée. Vous allez recevoir une confirmation par mail.', 'Fermer');
          this.dialogRef.close(true);
        },
        error => {
          this.snackBar.open(error.message, 'Fermer');
        });
    }
  }
}
