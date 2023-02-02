<?php

require_once './modeles/forfaits.php';

class ControlleurForfait {

  

    
    /***
* Fonction permettant de récupérer l'ensemble des produits et de les afficher au format JSON
*/
function afficherJSON() {
    $forfaits = modele_forfait::ObtenirTous();
    echo json_encode($forfaits);
}



    /***
     * Fonction permettant de récupérer un forfait et de l'afficher au format JSON
     */
    function afficherFicheJSON($id) {
        $resultat = modele_forfait::ObtenirUn($id);
        echo json_encode($resultat);
    }

    /***
     * Fonction permettant d'ajouter un forfait reçu au format JSON
     */
    function ajouterJSON($data) {
        $resultat = new stdClass();

        if(isset($data['code']) && isset($data['nom']) && isset($data['prix']['unitaire']) && isset($data['prix']['vente']) && isset($data['qte_stock'])) {
            $resultat = modele_forfait::ajouter($data['code'], $data['nom'], $data['prix']['unitaire'], $data['prix']['vente'], $data['qte_stock']);
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
            if(isset($data['code']) && isset($data['nom']) && isset($data['prix']['unitaire']) && isset($data['prix']['vente']) && isset($data['qte_stock'])) {
                $resultat = modele_forfait::modifier($_GET['id'], $data['code'], $data['nom'], $data['prix']['unitaire'], $data['prix']['vente'], $data['qte_stock']); 
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