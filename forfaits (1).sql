-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : lun. 06 fév. 2023 à 02:58
-- Version du serveur : 8.0.28
-- Version de PHP : 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `forfaits`
--

-- --------------------------------------------------------

--
-- Structure de la table `forfaits`
--

CREATE TABLE `forfaits` (
  `id` int NOT NULL,
  `nom` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `code` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `nom_etablissement` varchar(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `adresse_etablissement` varchar(35) COLLATE utf8mb4_general_ci NOT NULL,
  `ville_etablissement` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `telephone_etablissement` varchar(12) COLLATE utf8mb4_general_ci NOT NULL,
  `courriel_etablissement` varchar(35) COLLATE utf8mb4_general_ci NOT NULL,
  `site_web_etablissement` varchar(35) COLLATE utf8mb4_general_ci NOT NULL,
  `description_etablissement` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `prix` decimal(10,0) NOT NULL,
  `nouveau_prix` decimal(10,0) NOT NULL,
  `premium` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `forfaits`
--

INSERT INTO `forfaits` (`id`, `nom`, `description`, `code`, `nom_etablissement`, `adresse_etablissement`, `ville_etablissement`, `telephone_etablissement`, `courriel_etablissement`, `site_web_etablissement`, `description_etablissement`, `date_debut`, `date_fin`, `prix`, `nouveau_prix`, `premium`) VALUES
(8, 'Dolce Vita en Italie', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'ANI445', 'Hotel Dolce Vita', '061 Mavis Lights', 'Rome', '001021123688', 'dolce.vita@gmail.com', 'dolcevita.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '2023-03-13', '2023-03-28', '2598', '1975', 1),
(10, 'Evasion au cœur de la savane', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ', 'VRI475', 'The king west inn', '061 Mavis Lights', 'Pretoria', '0014587963', 'thekingwestinn@gmail.com', 'thekingwestinn.com', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ', '2023-01-15', '2023-05-17', '5641', '0', 1),
(11, 'Connexion avec la nature', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ', 'VRU127', 'Yoga center', '14 Mountain Lights', 'Vancouver ', '0445963874', 'yoga-center@gmail.com', 'yogacenter.ca', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ', '2023-05-01', '2023-10-28', '348', '290', 1),
(12, 'Escapade à Londres ', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ', 'VLI859', 'The Rolling Stones Hôtel', '769 bank street', 'London', '0014729930', 'therollingstoneshostel@gmail.com', 'therollingstoneshostel.com', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.', '2023-03-06', '2023-11-14', '1775', '0', 0),
(13, 'Souper romantique sur le Saint-Laurent.', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit', 'KUY1456', 'Delta Cruze', '78 rue Sherbrooke', 'Montréal ', '5147893254', 'delta.cruze@gmail.com', 'seltacruze.com', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit', '2023-04-02', '2023-09-17', '470', '355', 0),
(101, 'Exprimer son talent artistique', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'PJI445', 'Centre art et culture', '87 boulevard Saint Laurent', 'Laval', '5147893556', 'artetculture@gmail.com', 'artetculture.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '2023-09-03', '2023-12-20', '57', '0', 0);

-- --------------------------------------------------------

--
-- Structure de la table `meteo`
--

CREATE TABLE `meteo` (
  `id` int NOT NULL,
  `temperature` decimal(10,0) NOT NULL,
  `temps` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `date` date NOT NULL,
  `ville` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `meteo`
--

INSERT INTO `meteo` (`id`, `temperature`, `temps`, `date`, `ville`) VALUES
(1, '18', 'Ensoleillé ', '2022-05-02', 'Rome'),
(2, '21', 'Nuageux avec risque de pluie. ', '2023-06-09', 'Montréal'),
(3, '11', 'Ensoleillé et nuageux en après-midi', '2022-04-05', 'Paris'),
(4, '26', 'Ensoleillé', '2021-07-06', 'Vancouvert'),
(5, '31', 'Pluie forte toute la journée', '2022-08-04', 'Québec');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `forfaits`
--
ALTER TABLE `forfaits`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `meteo`
--
ALTER TABLE `meteo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `forfaits`
--
ALTER TABLE `forfaits`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT pour la table `meteo`
--
ALTER TABLE `meteo`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
