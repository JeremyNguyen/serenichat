import {Component, Inject, OnInit} from '@angular/core';
import {ReservationComponent} from '../reservation/reservation.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import DateUtil from '../../commons/utils/date-util';
import {NgForm} from '@angular/forms';
import {FormulaireDto} from '../../commons/dtos/formulaireDto';
import {SeanceDto} from '../../commons/dtos/seanceDto';

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
              @Inject(MAT_DIALOG_DATA) public data: any) {
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
      // TODO : envoyer le form au back + la seance
      console.log(this.formulaireDto);
    }
  }
}
