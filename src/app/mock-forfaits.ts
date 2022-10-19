import { Forfait } from "./forfait";

export const FORFAITS: Forfait[] = [
    {
        nom: "Forfait 1", 
        description: "Description forfait 1....", 
        code: "AC235",
        categorie: "Catégorie B",
        etablissementProps: {
            nomEtablissement: "Etablissement 1",
            coordoneesEtablissement: "Coordonnée 1",
            descriptionEtablissement: "Déscription établissement 1",
        },
        dateDebut: "10/07/2023",
        dateFin: "24/07/2023",
        prix: 1654,
        avisProps: {
            note: 7,
            commentaire: "Commentaire forfait 1",
        } 

    },
    {
        nom: "Forfait 2", 
        description: "Description forfait 2....", 
        code: "RM758",
        categorie: "Catégorie A",
        etablissementProps: {
            nomEtablissement: "Etablissement 2",
            coordoneesEtablissement: "Coordonnée 2",
            descriptionEtablissement: "Déscription établissement 2",
        },
        dateDebut: "14/03/2023",
        dateFin: "24/03/2023",
        prix: 2350,
        avisProps: {
            note: 9,
            commentaire: "Commentaire forfait 2",
        } 

    },
    {
        nom: "Forfait 3", 
        description: "Description forfait 3....", 
        code: "TS148",
        categorie: "Catégorie D",
        etablissementProps: {
            nomEtablissement: "Etablissement 3",
            coordoneesEtablissement: "Coordonnée 3",
            descriptionEtablissement: "Déscription établissement 3",
        },
        dateDebut: "02/10/2023",
        dateFin: "15/10/2023",
        prix: 3790,
        avisProps: {
            note: 6,
            commentaire: "Commentaire forfait 3",
        } 

    }
]