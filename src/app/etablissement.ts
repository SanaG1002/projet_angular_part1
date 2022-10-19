import { AvisProps } from "./avisProps"
import { EtablissementProps } from "./etablissementProps"

export interface Etablissement {
    id?: number,
    nom: string,
    description: string,
    code: string,
    categorie: string,
    etablissementProps: EtablissementProps,
    dateDebut: string,
    dateFin: string,
    prix: number,
    avisProps: AvisProps
}
