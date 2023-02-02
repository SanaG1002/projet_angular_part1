<?php

require_once "./include/config.php";

class modele_prix {
    public $prix; 
    public $nouveau_prix; 

    /***
     * Fonction permettant de construire un objet de type modele_forfait
     */
    public function __construct($courant_prix, $rabais_nouveau_prix) {
        $this->prix = $courant_prix;
        $this->nouveau_prix = $rabais_nouveau_prix;
        
    }
}

class modele_forfait {
    public $id; 
    public $nom; 
    public $description;
    public $code; 
    public $nom_etablissement;
    public $adresse_etablissement; 
    public $ville_etablissement; 
    public $telephone_etablissement;
    public $courriel_etablissement; 
    public $site_web_etablissement;
    public $description_etablissement; 
    public $date_debut; 
    public $date_fin;
    public $prix_forfait; 
    public $prenium;
    
    /***
     * Fonction permettant de construire un objet de type modele_forfait
     */
    public function __construct($id, $nom, $description, $code, $nom_etablissement, $adresse_etablissement, $ville_etablissement, $telephone_etablissement, $courriel_etablissement, $site_web_etablissement, $description_etablissement, $date_debut, $date_fin, $courant_prix, $rabais_nouveau_prix, $prenium) {
        $this->id = $id;
        $this->nom = $nom;
        $this->description = $description;
        $this->code = $code;
        $this->nom_etablissement = $nom_etablissement;
        $this->adresse_etablissement = $adresse_etablissement;
        $this->ville_etablissement = $ville_etablissement;
        $this->telephone_etablissement = $telephone_etablissement;
        $this->courriel_etablissement = $courriel_etablissement;
        $this->site_web_etablissement = $site_web_etablissement;
        $this->description_etablissement = $description_etablissement;
        $this->date_debut = $date_debut;
        $this->date_fin = $date_fin;
        $this->prenium = $prenium;

        $this->prix_forfait = new modele_prix($courant_prix, $rabais_nouveau_prix);
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
     * Fonction permettant de récupérer l'ensemble des forfaits 
     */
    public static function ObtenirTous() {
        $liste = [];
        $mysqli = self::connecter();

        $resultatRequete = $mysqli->query("SELECT * FROM forfaits ORDER BY id");

        foreach ($resultatRequete as $enregistrement) {
            $liste[] = new modele_forfait(
                $enregistrement['id'], 
                $enregistrement['nom'], 
                $enregistrement['description'], 
                $enregistrement['code'], 
                $enregistrement['nom_etablissement'],
                $enregistrement['adresse_etablissement'], 
                $enregistrement['ville_etablissement'], 
                $enregistrement['telephone_etablissement'], 
                $enregistrement['courriel_etablissement'], 
                $enregistrement['site_web_etablissement'],
                $enregistrement['description_etablissement'], 
                $enregistrement['date_debut'], 
                $enregistrement['date_fin'], 
                $enregistrement['prix'], 
                $enregistrement['nouveau_prix'], 
                $enregistrement['prenium']
            );
        }

        return $liste;
    }

    /***
     * Fonction permettant de récupérer un forfait en fonction de son identifiant
     */
    public static function ObtenirUn($id) {
        $resultat = new stdClass();

        $mysqli = self::connecter();

        if ($requete = $mysqli->prepare("SELECT * FROM forfaits WHERE id=?")) {  // Création d'une requête préparée 
            $requete->bind_param("i", $id); // Envoi des paramètres à la requête

            $requete->execute(); // Exécution de la requête

            $resultat_requete = $requete->get_result(); // Récupération de résultats de la requête¸
            
            if($enregistrement = $resultat_requete->fetch_assoc()) { // Récupération de l'enregistrement
                $forfait = new modele_forfait($enregistrement['id'], $enregistrement['forfait'], $enregistrement['description'], $enregistrement['code'], $enregistrement['nom_etablissement'],$enregistrement['adresse_etablissement'], $enregistrement['ville_etablissement'], $enregistrement['telephone_etablissement'], $enregistrement['courriel_etablissement'], $enregistrement['site_web_etablissement'],$enregistrement['description_etablissement'], $enregistrement['date_debut'], $enregistrement['date_fin'], $enregistrement['prix'], $enregistrement['prenium']);
            } else {
                http_response_code(404); // Envoi un code 404 au serveur
                $resultat->message = "Erreur: Aucun forfait trouvé";
                return $resultat;
            }   
            
            $requete->close(); // Fermeture du traitement
            return $forfait; 
        } else {
            http_response_code(500); // Envoi un code 500 au serveur
            $resultat->message = "Une erreur a été détectée dans la requête utilisée : ";
            $resultat->erreur = $mysqli->error;
            return $resultat;
        }        
    }

    /***
     * Fonction permettant d'ajouter un forfait
     */
    public static function ajouter($id, $nom, $description, $code, $nom_etablissement, $adresse_etablissement, $ville_etablissement, $telephone_etablissement, $courriel_etablissement, $site_web_etablissement, $description_etablissement, $date_debut, $date_fin, $courant_prix, $rabais_nouveau_prix, $prenium) {
        $resultat = new stdClass();

        $mysqli = self::connecter();
        
        // Création d'une requête préparée
        if ($requete = $mysqli->prepare("INSERT INTO forfaits(id, forfait, description, code, nom_etablissement, adresse_etablissement, ville_etablissement, telephone_etablissement, courriel_etablissement, site_web_etablissement, description_etablissement, date_debut, date_fin, prix, nouveau_prix, prenium) VALUES(?, ?, ?, ?, ?)")) {      

        /************************* ATTENTION **************************/
        /* On ne fait présentement peu de validation des données.     */
        /* On revient sur cette partie dans les prochaines semaines!! */
        /**************************************************************/

        $requete->bind_param("isssssssssssddi", $id, $nom, $description, $code, $nom_etablissement, $adresse_etablissement, $ville_etablissement, $telephone_etablissement, $courriel_etablissement, $site_web_etablissement, $description_etablissement, $date_debut, $date_fin, $courant_prix, $rabais_nouveau_prix, $prenium);

        if($requete->execute()) { // Exécution de la requête
            $resultat->message = "Forfait ajouté";  // Message ajouté dans la page en cas d'ajout réussi
        } else {
            http_response_code(500); // Envoi un code 500 au serveur
            $resultat->message =  "Une erreur est survenue lors de l'ajout";  // Message ajouté dans la page en cas d’échec
            $resultat->erreur = $requete->error;
        }

        $requete->close(); // Fermeture du traitement

        } else {
            http_response_code(500); // Envoi un code 500 au serveur
            $resultat->message = "Une erreur a été détectée dans la requête utilisée : ";
            $resultat->erreur = $mysqli->error;
        }

        return $resultat;
    }

    /***
     * Fonction permettant de modifier un forfait
     */
    public static function modifier($id, $nom, $description, $code, $nom_etablissement, $adresse_etablissement, $ville_etablissement, $telephone_etablissement, $courriel_etablissement, $site_web_etablissement, $description_etablissement, $date_debut, $date_fin, $courant_prix, $rabais_nouveau_prix, $prenium) {
        $resultat = new stdClass();

        $mysqli = self::connecter();
        
        // Création d'une requête préparée
        if ($requete = $mysqli->prepare("UPDATE forfaits SET forfait=?, description=?, code=?, nom_etablissement=?, adresse_etablissement=?, ville_etablissement=?, telephone_etablissement=?, courriel_etablissement=?, site_web_etablissement=?, description_etablissement=?, date_debut=?, date_fin=?, prix=?, nouveau_prix=?, prenium=? WHERE id=?")) {      

        /************************* ATTENTION **************************/
        /* On ne fait présentement peu de validation des données.     */
        /* On revient sur cette partie dans les prochaines semaines!! */
        /**************************************************************/

        $requete->bind_param("issssssssssssddi", $id, $nom, $description, $code, $nom_etablissement, $adresse_etablissement, $ville_etablissement, $telephone_etablissement, $courriel_etablissement, $site_web_etablissement, $description_etablissement, $date_debut, $date_fin, $courant_prix, $rabais_nouveau_prix, $prenium);

        if($requete->execute()) { // Exécution de la requête
            $resultat->message = "Forfait modifié";  // Message ajouté dans la page en cas d'ajout réussi
        } else {
            http_response_code(500); // Envoi un code 500 au serveur
            $resultat->message =  "Une erreur est survenue lors de l'édition: ";  // Message ajouté dans la page en cas d’échec
            $resultat->erreur = $requete->error;
        }

        $requete->close(); // Fermeture du traitement

        } else  {
            http_response_code(500); // Envoi un code 500 au serveur
            $resultat->message = "Une erreur a été détectée dans la requête utilisée : ";
            $resultat->erreur = $mysqli->error;
        }

        return $resultat;
    }

    /***
     * Fonction permettant de supprimer un forfait
     */
    public static function supprimer($id) {
        $resultat = new stdClass();

        $mysqli = self::connecter();
        
        // Création d'une requête préparée
        if ($requete = $mysqli->prepare("DELETE FROM forfaits WHERE id=?")) {      

        /************************* ATTENTION **************************/
        /* On ne fait présentement peu de validation des données.     */
        /* On revient sur cette partie dans les prochaines semaines!! */
        /**************************************************************/

        $requete->bind_param("i", $id);

        if($requete->execute()) { // Exécution de la requête
            $resultat->message = "Forfait supprimé";  // Message ajouté dans la page en cas d'ajout réussi
        } else {
            http_response_code(500); // Envoi un code 500 au serveur
            $resultat->message = "Une erreur est survenue lors de la suppression: ";  // Message ajouté dans la page en cas d’échec
            $resultat->erreur = $requete->error;
        }

        $requete->close(); // Fermeture du traitement

        } else  {
            http_response_code(500); // Envoi un code 500 au serveur
            $resultat->message = "Une erreur a été détectée dans la requête utilisée : ";
            $resultat->erreur = $mysqli->error;
        }

        return $resultat;
    }
}

?>