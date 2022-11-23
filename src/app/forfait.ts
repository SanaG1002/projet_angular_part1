import { Avis } from "./avis"
import { Etablissement } from "./etablissement"


export interface Forfait {
    id?: number;
    image: string;
    nom: string;
    description: string[];
    code: string;
    categorie: string;
    etablissement: Etablissement;
    dateDebut: string;
    dateFin: string;
    prix: number;
    nouveauPrix?: number;
    prenium: boolean;
    avis: Avis[]
}
