<?php

require_once "./include/config.php";

class modele_meteo {
    public $id; 
    public $temperature; 
    public $temps;
    public $date; 
    public $ville;
    
    /***
     * Fonction permettant de construire un objet de type modele_meteo
     */
    public function __construct($id, $temperature, $temps, $date, $ville) {
        $this->id = $id;
        $this->temperature = $temperature;
        $this->temps = $temps;
        $this->date = $date;
        $this->ville = $ville;
    }

    /***
     * Fonction permettant de se connecter à la base de données
     */
    static function connecter() {
        
        $mysqli = new mysqli(Db::$host, Db::$username, Db::$password, Db::$database);

        // Vérifier la connexion
        if ($mysqli -> connect_errno) {
            http_response_code(500); // Envoi un code 500 au serveur
            $erreur = new stdClass();
            $erreur->message = "DEBOGAGE : Échec de connexion à la base de données MySQL: ";
            $erreur->error = $mysqli -> connect_error;
            echo json_encode($erreur);
            exit();
        } 

        return $mysqli;
    }

    /***
     * Fonction permettant de récupérer l'ensemble des éléments météo 
     */
    public static function ObtenirTous() {
        $liste = [];
        $mysqli = self::connecter();

        $resultatRequete = $mysqli->query("SELECT * FROM meteo ORDER BY id");

        foreach ($resultatRequete as $enregistrement) {
            $liste[] = new modele_meteo(
                $enregistrement['id'], 
                $enregistrement['temperature'], 
                $enregistrement['temps'], 
                $enregistrement['date'], 
                $enregistrement['ville']
            );
        }

        return $liste;
    }

}

?>