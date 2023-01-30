<?php
    header('Content-Type: application/json;'); 
    header('Access-Control-Allow-Origin: *'); 
    require_once './controlleurs/forfaits.php';
    $controllerForfaits = new ControleurForfait;

    switch($_SERVER['REQUEST_METHOD']) { 
        case 'GET': // GESTION DES DEMANDES DE TYPE GET 
            if(isset($_GET['id'])) { // CODE PERMETTANT DE RÉCUPÉRER L'ENREGISTREMENT CORRESPONDANT À L'IDENTIFIANT PASSÉ EN PARAMÈTRE 
                $controllerForfaits->afficherFicheJSON();
            } else {// CODE PERMETTANT DE RÉCUPÉRER TOUT LES ENREGISTREMENTS
                $controllerForfaits->afficherJSON();
            } 
            break; 
        case 'POST': // CODE PERMETTANT DE D'AJOUTER UN ENREGISTREMENT  
            $corpsJSON = file_get_contents('php://input'); 
            $data = json_decode($corpsJSON, TRUE);
            $controllerForfaits->ajouterJSON($data);
            break; 
        case 'PUT': // CODE PERMETTANT DE METTRE À JOUR L'ENREGISTREMENT CORRESPONDANT À L'IDENTIFIANT PASSÉ EN PARAMÈTRE 
            if(isset($_GET['id'])) { 
                $corpsJSON = file_get_contents('php://input'); 
                $data = json_decode($corpsJSON, TRUE);
                $controllerForfaits->modifierJSON($data);
            } 
            break; 
        case 'DELETE': // CODE PERMETTANT DE SUPPRIMER L'ENREGISTREMENT CORRESPONDANT À L'IDENTIFIANT PASSÉ EN PARAMÈTRE
            if(isset($_GET['id'])) { 
                $controllerForfaits->supprimerJSON($_GET['id']); 
        } 
        break; 
        default: 
} 
?>