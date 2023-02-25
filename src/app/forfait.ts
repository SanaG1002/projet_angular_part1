
import { Etablissement } from "./etablissement"


export interface Forfait {
    id?: number;
    nom: string,
    description: string,
    code: string,
    etablissement: Etablissement
    dateDebut: string,
    dateFin: string,
    prix: number,
    nouveauPrix?: number,
    premium: number,
    image: string,
    pays: string
}
