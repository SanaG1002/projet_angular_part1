import { AvisProps } from "./avisProps"
import { EtablissementProps } from "./etablissementProps"

export interface Forfait {
    id?: number,
    nom: string,
    description: string,
    code: string,
    categorie: string,
    etablissementProps: EtablissementProps,
    dateDebut: string,
    dateFin: string,
    prix: string,
    nouveauPrix: string,
    prenium: boolean,
    avisProps: AvisProps
}
