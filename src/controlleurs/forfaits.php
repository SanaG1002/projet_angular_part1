<?php

require_once './modeles/forfaits.php';

class ControlleurProduit {

    /***
     * Fonction permettant de récupérer l'ensemble des produits et de les afficher au format JSON
     */
    function afficherJSON() {
        $resultat = modele_produit::ObtenirTous();
        echo json_encode($resultat);
    }
    
    /***
     * Fonction permettant de récupérer l'ensemble des produits et de les afficher au format JSON
     */
    function afficherFicheJSON($id) {
        $resultat = modele_produit::ObtenirUn($id);
        echo json_encode($resultat);
    }

    /***
     * Fonction permettant d'ajouter un produit reçu au format JSON
     */
    function ajouterJSON($data) {
        $resultat = new stdClass();

        if(isset($data['code']) && isset($data['nom']) && isset($data['prix']['unitaire']) && isset($data['prix']['vente']) && isset($data['qte_stock'])) {
            $resultat = modele_produit::ajouter($data['code'], $data['nom'], $data['prix']['unitaire'], $data['prix']['vente'], $data['qte_stock']);
        } else {
            http_response_code(500); // Envoi un code 500 au serveur
            $resultat->message = "Impossible d'ajouter un produit. Des informations sont manquantes";
        }
        echo json_encode($resultat);
    }

    /***
     * Fonction permettant de modifier un produit reçu au format JSON
     */
    function modifierJSON($data) {
        $resultat = new stdClass();
        if(isset($_GET['id'])) {
            if(isset($data['code']) && isset($data['nom']) && isset($data['prix']['unitaire']) && isset($data['prix']['vente']) && isset($data['qte_stock'])) {
                $resultat = modele_produit::modifier($_GET['id'], $data['code'], $data['nom'], $data['prix']['unitaire'], $data['prix']['vente'], $data['qte_stock']); 
            } else {
                http_response_code(500); // Envoi un code 500 au serveur
                $resultat = "Impossible de modifier le produit. Des informations sont manquantes";
            }
            
        } else {
            http_response_code(500); // Envoi un code 500 au serveur
            $resultat->message = "ID manquant";
        }  
        echo json_encode($resultat);     
    }
    

    function supprimerJSON() {
        $resultat = new stdClass();
        if(isset($_GET['id'])) {
            $resultat = modele_produit::supprimer($_GET['id']);
        } else {
            http_response_code(500); // Envoi un code 500 au serveur
            $resultat->message = "ID manquant";
        }  
        echo json_encode($resultat);
    }
}

?>