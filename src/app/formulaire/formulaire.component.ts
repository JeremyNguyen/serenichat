import {Component, Inject, OnInit} from '@angular/core';
import {ReservationComponent} from '../reservation/reservation.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import DateUtil from '../../commons/utils/date-util';
import {NgForm} from '@angular/forms';
import {FormulaireDto} from '../../commons/dtos/formulaireDto';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  submitted = false;
  formulaireDto = new FormulaireDto();
  demiJournee = false;

  // TODO : price

  // TODO : conditions

  constructor(public dialogRef: MatDialogRef<ReservationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  getDemiJourneeLabel() {
    return this.data.seance.libelle.startsWith('Après') ? 'après-midi complète (14h00 - 18h00)' : 'matinée complète (9h00 - 13h00)';
  }

  getDate(date: Date) {
    return DateUtil.getDate(date);
  }

  seanceIndividuelleChange() {
    if (this.formulaireDto.seanceIndividuelle) {
      this.formulaireDto.nbVisiteur = 1;
      this.formulaireDto.prenomVisiteur2 = null;
    }
  }

  reserver(form: NgForm) {
    // TODO : calculer debut & fin
    if (form.valid) {
      // TODO : envoyer le form au back
      console.log(this.formulaireDto);
    }
  }
}
