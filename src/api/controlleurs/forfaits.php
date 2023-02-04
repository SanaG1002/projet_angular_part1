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
            isset($data['id']) && 
            isset($data['nom']) && 
            isset($data['description']) && 
            isset($data['code']) && 
            isset($data['nom_etablissement']) && 
            isset($data['adresse_etablissement']) && 
            isset($data['ville_etablissement']) && 
            isset($data['telephone_etablissement']) && 
            isset($data['courriel_etablissement']) && 
            isset($data['site_web_etablissement']) && 
            isset($data['description_etablissement']) && 
            isset($data['date_debut']) && 
            isset($data['date_fin']) && 
            isset($data['prix']) && 
            isset($data['nouveau_prix']) && 
            isset($data['premium'])
            ) 
            {
            $resultat = modele_forfait::ajouter(
                $data['id'], 
                $data['nom'], 
                $data['description'], 
                $data['code'], 
                $data['nom_etablissement'], 
                $data['adresse_etablissement'], 
                $data['ville_etablissement'],
                $data['telephone_etablissement'], 
                $data['courriel_etablissement'], 
                $data['site_web_etablissement'], 
                $data['description_etablissement'], 
                $data['date_debut'],
                $data['date_fin'], 
                $data['prix'], 
                $data['nouveau_prix'], 
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
                isset($data['id']) && 
                isset($data['nom']) && 
                isset($data['description']) && 
                isset($data['code']) && 
                isset($data['nom_etablissement']) && 
                isset($data['adresse_etablissement']) && 
                isset($data['ville_etablissement']) && 
                isset($data['telephone_etablissement']) && 
                isset($data['courriel_etablissement']) && 
                isset($data['site_web_etablissement']) && 
                isset($data['description_etablissement']) && 
                isset($data['date_debut']) && 
                isset($data['date_fin']) && 
                isset($data['prix']) && 
                isset($data['nouveau_prix']) && 
                isset($data['premium'])
            ) 
            {
                $resultat = modele_forfait::modifier(
                    $_GET['id'], 
                    $data['nom'], 
                    $data['description'], 
                    $data['code'], 
                    $data['nom_etablissement'], 
                    $data['adresse_etablissement'], 
                    $data['ville_etablissement'],
                    $data['telephone_etablissement'], 
                    $data['courriel_etablissement'], 
                    $data['site_web_etablissement'], 
                    $data['description_etablissement'], 
                    $data['date_debut'],
                    $data['date_fin'], 
                    $data['prix'], 
                    $data['nouveau_prix'], 
                    $data['premium']
                ); 
            } else {
                http_response_code(500); // Envoi un code 500 au serveur
                $resultat = "Impossible de modifier le forfait. Des informations sont manquantes";
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