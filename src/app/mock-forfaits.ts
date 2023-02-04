import { Forfait } from "./forfait";

export const  FORFAITS: Forfait[] = [
    {
        nom: "DSW",
        image: "https://cdn.pixabay.com/photo/2022/10/24/18/10/street-7544046__340.jpg",
        description: ["Resto", "Voyage", "Détente", "Fun"],
        code: "1FTCE1EL6B6460F8W",
        categorie: "pariat",
        etablissement: {
            nomEtablissement: "Triumph Group",
            coordonneesEtablissement: {
                adresseEtablissement: "061 Mavis Lights",
                villeEtablissement: "Kalvarija",
                telephoneEtablissement: "(546) 731-2526",
                courrielEtablissement: "Benjamin_Pfeffer@TriumphGroup.com",
                siteWebEtablissement: "triumph_group.biz"
            },
            descriptionEtablissement: "mollit fugiat ullamco excepteur aliqua in voluptate est sint voluptate irure nostrud exercitation cillum laborum eu esse dolor minim quis quis exercitation et irure laboris est ipsum commodo magna aute incididunt consequat ipsum voluptate aute laboris"
        },
        dateDebut: "2022-03-04",
        dateFin: "2022-01-11",
        prix: 3704.65,
        premium: true,
        avis: [{
            note: 10,
            commentaire: "culpa ipsum consectetur reprehenderit"
        }]
    },

    {
        nom: "iHeartMedia",
        image: "https://cdn.pixabay.com/photo/2022/08/21/17/47/color-7401750__340.jpg ",
        description: ["Resto", "Voyage", "Détente", "Fun"],
        code: "2FTRW08ZX3FP2AZ2H",
        categorie: "nostrud elit ut si",
        etablissement: {
            nomEtablissement: "Mercury General",
            coordonneesEtablissement: {
                adresseEtablissement: "349 Hermiston Cape",
                villeEtablissement: "Al Qābil",
                telephoneEtablissement: "(160) 368-4979",
                courrielEtablissement: "Norval_Parker2@MercuryGeneral.net",
                siteWebEtablissement: "mercury_general.com"
            },
            descriptionEtablissement: "esse labore aliquip est reprehenderit voluptate elit adipisicing sit eu irure Lorem laborum tempor do esse amet aliquip nisi consequat nisi non minim ut tempor et dolore proident duis quis ullamco consectetur"
        },
        dateDebut: "2022-09-25",
        dateFin: "2022-11-10",
        prix: 4960.91,
        nouveauPrix: 1540,
        premium: true,
        avis: [{
            note: 4,
            commentaire: "labore aliquip est reprehenderit voluptate elit adipisicing"
        }]
    },

    {
        nom: "Moog",
        image: "https://cdn.pixabay.com/photo/2022/05/22/13/21/healthy-7213383_640.jpg",
        description: ["Resto", "Voyage", "Détente", "Fun"],
        code: "4M2EU468X6M0KPKCT",
        categorie: "do elit amet",
        etablissement: {
            nomEtablissement: "Crown Holdings",
            coordonneesEtablissement: {
                adresseEtablissement: "098 Clare View",
                villeEtablissement: "Kieta",
                telephoneEtablissement: "(239) 657-8549",
                courrielEtablissement: "Alycia_Pagac20@CrownHoldings.net",
                siteWebEtablissement: "crown-holdings.org"
            },
            descriptionEtablissement: "incididunt elit dolore adipisicing officia eu labore consectetur voluptate id deserunt elit cupidatat ipsum"
        },
        dateDebut: "2021-12-07",
        dateFin: "2022-03-25",
        prix: 4590.03,
        nouveauPrix: 3900.05,
        premium: false,
        avis: [{
            note: 8,
            commentaire: "esse adipisicing tempor esse ullamco esse veniam excepteur ea culpa esse dolor aliqua consequat veniam nisi ad nulla pariatur et dolore ex voluptate deserunt adipisicing culpa sint et ullamco enim ea ipsum dolor nulla enim ullamco minim et commodo id nisi aliqua labore incididunt dolore"
        }]
    },

    {
        nom: "Southern",
        image: "https://cdn.pixabay.com/photo/2022/02/15/13/00/building-7014904__340.jpg",
        description: ["Resto", "Voyage", "Détente", "Fun"],
        code: "2HKRL482754THG8BT",
        categorie: "aliquip id consequat",
        etablissement: {
            nomEtablissement: "Goldman Sachs Group",
            coordonneesEtablissement: {
                adresseEtablissement: "675 Rutherford Valley",
                villeEtablissement: "Tumeremo",
                telephoneEtablissement: "(198) 289-3063",
                courrielEtablissement: "Edd.Pagac29@GoldmanSachsGroup.gov",
                siteWebEtablissement: "gsg.org"
            },
            descriptionEtablissement: "reprehenderit magna veniam dolor eiusmod sunt non ut laboris cupidatat aliquip consectetur non minim consequat do cupidatat consequat minim id est enim aliqua amet ut minim sint ipsum pariatur"
        },
        dateDebut: "2022-05-16",
        dateFin: "2022-01-10",
        prix: 5384.49,
        premium: false,
        avis: [{
            note: 6,
            commentaire: "labore aliquip est reprehenderit voluptate elit adipisicing labore aliquip est reprehenderit voluptate elit adipisicing"
        }]
    },

    {
        nom: "PPL",
        image: "https://cdn.pixabay.com/photo/2021/10/27/09/36/elephants-6746586__340.jpg",
        description: ["Resto", "Voyage", "Détente", "Fun"],
        code: "JTHBL5KS4BFJ9CNB3",
        categorie: "occaecat duis mi",
        etablissement: {
            nomEtablissement: "Keurig Green Mountain",
            coordonneesEtablissement: {
                adresseEtablissement: "350 Brenda Court",
                villeEtablissement: "Singapore",
                telephoneEtablissement: "(922) 437-0230",
                courrielEtablissement: "Minerva.Langworth@KeurigGreenMountain.net",
                siteWebEtablissement: "kgm.info"
            },
            descriptionEtablissement: "sunt amet amet consequat qui nulla consequat dolor ut est magna pariatur excepteur cillum ea aliqua fugiat consectetur do et deserunt eu nostrud esse do velit pariatur cillum incididunt pariatur ipsum ullamco proident pariatur cillum et laborum quis veniam nulla incididunt aliquip"
        },
        dateDebut: "2022-02-13",
        dateFin: "2021-12-25",
        prix: 2697,
        nouveauPrix: 1500,
        premium: false,
        avis: [{
            note: 3,
            commentaire: "voluptate nisi"
        }]
    },

    {
        nom: "MRC Global",
        image: "https://cdn.pixabay.com/photo/2022/04/18/13/27/yoga-7140566__340.jpg",
        description: ["Resto", "Voyage", "Détente", "Fun"],
        code: "1GTHK23D37VRV7WP7",
        categorie: "ullamco enim amet ",
        etablissement: {
            nomEtablissement: "AutoNation",
            coordonneesEtablissement: {
                adresseEtablissement: "266 Erdman Islands",
                villeEtablissement: "Gaalkacyo",
                telephoneEtablissement: "(386) 188-7349",
                courrielEtablissement: "Cleveland_Kunze89@AutoNation.ac.com",
                siteWebEtablissement: "autonation.net"
            },
            descriptionEtablissement: "esse qui mollit tempor incididunt consectetur sint laborum pariatur mollit cillum minim occaecat sint id dolore laborum commodo proident excepteur laboris anim consectetur eiusmod Lorem elit irure consectetur irure ut nostrud labore nostrud eiusmod anim cillum reprehenderit nulla fugiat veniam cupidatat sit labore consequat labore commodo"
        },
        dateDebut: "2022-03-30",
        dateFin: "2021-11-23",
        prix: 3238.95,
        premium: true,
        avis: [{
            note: 8,
            commentaire: "enim et minim duis duis qui do fugiat cupidatat esse id deserunt cupidatat cupidatat deserunt anim cillum adipisicing officia commodo commodo tempor nostrud excepteur elit ipsum esse ea consequat consectetur consequat dolor consectetur ullamco proident ex labore"
        }]
    }
]
