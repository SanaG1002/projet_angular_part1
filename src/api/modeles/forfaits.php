<?php

require_once "./include/config.php";

class modele_prix {
    public $prix; 
    public $nouveauPrix; 

    /***
     * Fonction permettant de construire un objet de type modele_prix
     */
    public function __construct($courant_prix, $rabais_nouveauPrix) {
        $this->prix = $courant_prix;
        $this->nouveauPrix = $rabais_nouveauPrix;
        
    }
}

class modele_etablissement {
    public $nomEtablissement;
    public $adresseEtablissement;
    public $villeEtablissement;
    public $telephoneEtablissement;
    public $courrielEtablissement;
    public $siteWebEtablissement;
    public $descriptionEtablissement;

    public function __construct( 
        $nom_etablissement, 
        $adresse_etablissement, 
        $ville_etablissement, 
        $telephone_etablissement, 
        $courriel_etablissement, 
        $site_web_etablissement, 
        $description_etablissement
    )
    {
        $this->nomEtablissement = $nom_etablissement;
        $this->descriptionEtablissement = $description_etablissement;
        $this->adresseEtablissement = $adresse_etablissement;
        $this->villeEtablissement = $ville_etablissement;
        $this->telephoneEtablissement = $telephone_etablissement;
        $this->courrielEtablissement = $courriel_etablissement;
        $this->siteWebEtablissement = $site_web_etablissement;
    }
}


class modele_forfait {
    public $id; 
    public $nom; 
    public $description;
    public $code; 
    public $etablissement;
    public $dateDebut; 
    public $dateFin;
    public $prix; 
    public $nouveauPrix;
    public $premium;
    public $image;
    public $pays;
    
    /***
     * Fonction permettant de construire un objet de type modele_forfait
     */
    public function __construct(
        $id, 
        $nom, 
        $description, 
        $code, 
        $nom_etablissement, 
        $adresse_etablissement, 
        $ville_etablissement, 
        $telephone_etablissement, 
        $courriel_etablissement, 
        $site_web_etablissement, 
        $description_etablissement, 
        $date_debut, 
        $date_fin, 
        $courant_prix, 
        $rabais_nouveauPrix, 
        $premium,
        $image, 
        $pays
        ) {
        
        $this->id = $id;
        $this->nom = $nom;
        $this->description = $description;
        $this->code = $code;
        $this->etablissement = new modele_etablissement(
            $nom_etablissement, 
            $adresse_etablissement, 
            $ville_etablissement, 
            $telephone_etablissement, 
            $courriel_etablissement, 
            $site_web_etablissement, 
            $description_etablissement
        );
        $this->dateDebut = $date_debut;
        $this->dateFin = $date_fin;
        $this->premium = $premium;
        $this->image = $image;
        $this->pays = $pays;
        $this->prix = $courant_prix;
        $this->nouveauPrix = $rabais_nouveauPrix;
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
                $enregistrement['premium'], 
                $enregistrement['image'], 
                $enregistrement['pays']
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
                $forfait = new modele_forfait(
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
                    $enregistrement['premium'], 
                    $enregistrement['image'], 
                    $enregistrement['pays']);
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
    public static function ajouter (
        $nom, 
        $description, 
        $code, 
        $nom_etablissement, 
        $adresse_etablissement, 
        $ville_etablissement, 
        $telephone_etablissement, 
        $courriel_etablissement, 
        $site_web_etablissement, 
        $description_etablissement, 
        $dateDebut, 
        $dateFin, 
        $courant_prix, 
        $rabais_nouveauPrix, 
        $premium,
        $image, 
        $pays
        ) {
            
        $resultat = new stdClass();
        $mysqli = self::connecter();
        
        // Création d'une requête préparée
        if (
            $requete = $mysqli->prepare("INSERT INTO forfaits(
            nom, 
            description, 
            code, 
            nom_etablissement, 
            adresse_etablissement, 
            ville_etablissement, 
            telephone_etablissement, 
            courriel_etablissement, 
            site_web_etablissement, 
            description_etablissement, 
            date_debut, 
            date_fin, 
            prix, 
            nouveau_prix, 
            premium,
            image, 
            pays
            ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")
        ) {      

            $requete->bind_param("ssssssssssssdddss", 
                $nom, 
                $description, 
                $code, 
                $nom_etablissement, 
                $adresse_etablissement, 
                $ville_etablissement, 
                $telephone_etablissement, 
                $courriel_etablissement, 
                $site_web_etablissement, 
                $description_etablissement, 
                $dateDebut, 
                $dateFin, 
                $courant_prix, 
                $rabais_nouveauPrix, 
                $premium,
                $image, 
                $pays
            );

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
    public static function modifier(
        $id, 
        $nom, 
        $description, 
        $code, 
        $nom_etablissement, 
        $adresse_etablissement, 
        $ville_etablissement, 
        $telephone_etablissement, 
        $courriel_etablissement, 
        $site_web_etablissement, 
        $description_etablissement, 
        $dateDebut, 
        $dateFin, 
        $courant_prix, 
        $rabais_nouveauPrix, 
        $premium,
        $image, 
        $pays
        ) {
        
            $resultat = new stdClass();

            $mysqli = self::connecter();
        
        // Création d'une requête préparée
        if ($requete = $mysqli->prepare("UPDATE forfaits SET 
        nom=?, 
        description=?, 
        code=?, 
        nom_etablissement=?, 
        adresse_etablissement=?, 
        ville_etablissement=?, 
        telephone_etablissement=?, 
        courriel_etablissement=?, 
        site_web_etablissement=?, 
        description_etablissement=?, 
        date_debut=?, 
        date_fin=?, 
        prix=?, 
        nouveau_prix=?, 
        premium=?,
        image=?, 
        pays=? 
        WHERE id=?")) {      

        $requete->bind_param("ssssssssssssdddssi", 
        $nom, 
        $description, 
        $code, 
        $nom_etablissement, 
        $adresse_etablissement, 
        $ville_etablissement, 
        $telephone_etablissement, 
        $courriel_etablissement, 
        $site_web_etablissement, 
        $description_etablissement, 
        $dateDebut, 
        $dateFin, 
        $courant_prix, 
        $rabais_nouveauPrix, 
        $premium,
        $image, 
        $pays, 
        $id);

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