export class SeanceDto {

  libelle: string;
  debut: string;
  fin: string;

  constructor(libelle: string, debut: string, fin: string) {
    this.libelle = libelle;
    this.debut = debut;
    this.fin = fin;
  }
}
