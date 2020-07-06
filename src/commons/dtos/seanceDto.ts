export class SeanceDto {

  dispo: string;
  debut: Date;
  fin: Date;

  constructor(dispo: string, debut: Date, fin: Date) {
    this.dispo = dispo;
    this.debut = debut;
    this.fin = fin;
  }
}
