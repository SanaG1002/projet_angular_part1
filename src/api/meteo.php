<?php
    header('Content-Type: application/json'); 
    header('Access-Control-Allow-Origin: *'); 
    require_once './controlleurs/meteo.php';
    $controllerMeteo = new ControlleurMeteo;

    switch($_SERVER['REQUEST_METHOD']) { 
        case 'GET': // GESTION DES DEMANDES DE TYPE GET 
            $controllerMeteo->afficherJSON();
            break; 
        default: 
} 
?>