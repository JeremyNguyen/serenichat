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
  }

  getDemiJourneeLabel() {
    return this.seance.debut.getHours() >= 13 ? 'après-midi complète (14h00 - 18h00)' : 'matinée complète (9h00 - 13h00)';
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
      price = this.demiJournee ? 130 : 45;
    } else {
      if (this.demiJournee) {
        price = this.formulaireDto.nbVisiteur === 1 ? 75 : 140;
      } else {
        price = this.formulaireDto.nbVisiteur === 1 ? 30 : 60;
      }
    }
    return price;
  }

  seanceIndividuelleChange() {
    if (this.formulaireDto.seanceIndividuelle) {
      this.formulaireDto.nbVisiteur = 1;
      this.formulaireDto.prenomVisiteur2 = null;
    }
  }

  reserver(form: NgForm) {
    if (form.valid && this.checkboxConditions && this.checkboxPrivacy) {
      this.reservationService.reserver(this.seance, this.formulaireDto).subscribe(
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
