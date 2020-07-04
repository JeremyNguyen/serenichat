import { Time } from '@angular/common';

export class SeanceDto {

libelle: String;
debut: String;
fin: String;

    constructor(libelle: String, debut: String, fin: String) {
        this.libelle = libelle;
        this.debut = debut;
        this.fin = fin;
    }
}