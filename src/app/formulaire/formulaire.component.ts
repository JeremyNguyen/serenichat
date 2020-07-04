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

  constructor(public dialogRef: MatDialogRef<ReservationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }


  getDate(date: Date) {
    return DateUtil.getDate(date);
  }

  reserver(form: NgForm) {
    if (form.valid) {
      // TODO : envoyer le form au back
      console.log(this.formulaireDto);
    }
  }
}
