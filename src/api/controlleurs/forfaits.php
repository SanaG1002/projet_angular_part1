<?php

require_once './modeles/forfaits.php';

class ControlleurForfait {
    
    /***
    * Fonction permettant de récupérer l'ensemble des forfaits et de les afficher au format JSON
    */
    function afficherJSON() {
        $forfaits = modele_forfait::ObtenirTous();
        echo json_encode($forfaits);
    }

    /***
     * Fonction permettant de récupérer un forfait et de l'afficher au format JSON
     */
    function afficherFicheJSON() {
        $forfait = modele_forfait::ObtenirUn($_GET['id']);
        echo json_encode($forfait);
    }

    /***
     * Fonction permettant d'ajouter un forfait reçu au format JSON
     */
    function ajouterJSON($data) {
        $resultat = new stdClass();
        if(
            isset($data['nom']) && 
            isset($data['description']) && 
            isset($data['code']) && 
            isset($data['etablissement']['nomEtablissement']) && 
            isset($data['etablissement']['adresseEtablissement']) && 
            isset($data['etablissement']['villeEtablissement']) && 
            isset($data['etablissement']['telephoneEtablissement']) && 
            isset($data['etablissement']['courrielEtablissement']) && 
            isset($data['etablissement']['siteWebEtablissement']) && 
            isset($data['etablissement']['descriptionEtablissement']) && 
            isset($data['dateDebut']) && 
            isset($data['dateFin']) && 
            isset($data['prix']) && 
            isset($data['nouveauPrix']) && 
            isset($data['premium'])
        )

            {
            $resultat = modele_forfait::ajouter(
                $data['nom'], 
                $data['description'], 
                $data['code'], 
                $data['etablissement']['nomEtablissement'], 
                $data['etablissement']['adresseEtablissement'], 
                $data['etablissement']['villeEtablissement'],
                $data['etablissement']['telephoneEtablissement'], 
                $data['etablissement']['courrielEtablissement'], 
                $data['etablissement']['siteWebEtablissement'], 
                $data['etablissement']['descriptionEtablissement'], 
                $data['dateDebut'],
                $data['dateFin'], 
                $data['prix'], 
                $data['nouveauPrix'], 
                $data['premium']
            );
            } else {
                http_response_code(500); // Envoi un code 500 au serveur
                $resultat->message = "Impossible d'ajouter un forfait. Des informations sont manquantes";
            }
        echo json_encode($resultat);
    }

    /***
     * Fonction permettant de modifier un forfait reçu au format JSON
     */
    function modifierJSON($data) {
        $resultat = new stdClass();
        if(isset($_GET['id'])) {
            if(
                isset($data['nom']) && 
                isset($data['description']) && 
                isset($data['code']) && 
                isset($data['etablissement']['nomEtablissement']) && 
                isset($data['etablissement']['adresseEtablissement']) && 
                isset($data['etablissement']['villeEtablissement']) && 
                isset($data['etablissement']['telephoneEtablissement']) && 
                isset($data['etablissement']['courrielEtablissement']) && 
                isset($data['etablissement']['siteWebEtablissement']) &&
                isset($data['etablissement']['descriptionEtablissement']) && 
                isset($data['dateDebut']) && 
                isset($data['dateFin']) && 
                isset($data['prix']) && 
                isset($data['nouveauPrix']) && 
                isset($data['premium'])
            )
            {
                $resultat = modele_forfait::modifier(
                    $_GET['id'], 
                    $data['nom'], 
                    $data['description'], 
                    $data['code'], 
                    $data['etablissement']['nomEtablissement'], 
                    $data['etablissement']['adresseEtablissement'], 
                    $data['etablissement']['villeEtablissement'],
                    $data['etablissement']['telephoneEtablissement'], 
                    $data['etablissement']['courrielEtablissement'], 
                    $data['etablissement']['siteWebEtablissement'], 
                    $data['etablissement']['descriptionEtablissement'], 
                    $data['dateDebut'],
                    $data['dateFin'], 
                    $data['prix'], 
                    $data['nouveauPrix'], 
                    $data['premium']
                ); 
            } else {
                http_response_code(500); // Envoi un code 500 au serveur
                $resultat->message = "Impossible de modifier le forfait. Des informations sont manquantes";
            }
        } else {
            http_response_code(500); // Envoi un code 500 au serveur
            $resultat->message = "ID manquant";
        }  
        echo json_encode($resultat);     
    }
    

    /***
     * Fonction permettant de supprimer un forfait au format JSON
     */
    function supprimerJSON() {
        $resultat = new stdClass();
        if(isset($_GET['id'])) {
            $resultat = modele_forfait::supprimer($_GET['id']);
        } else {
            http_response_code(500); // Envoi un code 500 au serveur
            $resultat->message = "ID manquant";
        }  
        echo json_encode($resultat);
    }
}

?>