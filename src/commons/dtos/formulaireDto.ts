export class FormulaireDto {
  debut: Date;
  fin: Date;
  seanceIndividuelle = false;
  nbVisiteur = 1;
  nomAidant: string;
  prenomAidant: string;
  telAidant: string;
  mailAidant: string;
  prenomVisiteur1: string;
  prenomVisiteur2: string;
  accompagnementVisiteur = false;
  commentaire: string;
  prix: number;
}
