
import { Avis } from "./avis"
import { Etablissement } from "./etablissement"


export interface Forfait {
    $d?: number,
    image?: string,
    nom?: string,
    description?: string,
    code?: string,
    categorie?: string,
    etablissement?: Etablissement,
    dateDebut?: string,
    dateFin?: string,
    prix?: string,
    nouveauPrix?: string,
    prenium?: boolean,
    avis?: Avis
}
