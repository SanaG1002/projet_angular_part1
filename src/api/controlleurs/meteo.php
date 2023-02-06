<?php

require_once './modeles/meteo.php';

class ControlleurMeteo {
    
    /***
    * Fonction permettant de récupérer l'ensemble des éléments météo et les afficher au format JSON
    */
    function afficherJSON() {
        $meteo = modele_meteo::ObtenirTous();
        echo json_encode($meteo);
    }

}

?>