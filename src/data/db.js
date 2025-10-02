
import agadir from "../assets/agadir.png";

import zagora from "../assets/zagora.png";
import azicodeimg from "../assets/projetactuel/azicodeimg.jpg";
import chance from "../assets/projetactuel/2mchance.jpg";
import femmes from "../assets/projetactuel/femms.jpg";
import prisonniers from "../assets/projetactuel/prisonniers.jpg";
import Altruism from "@/assets/Altruism.jpeg";
import Pride from "@/assets/Pride.jpeg";
import Probity from "@/assets/Probity.jpeg";
import Preseverance from "@/assets/Perseverance.jpeg";
import respect from "@/assets/respect.jpeg";




// les projet actuel

export const projetsActuels = [
  {
    id: 1,
    titre: "ECOLE DU CODAGE AZICODE 62",
    description: "Une école numérique pour apprendre tout ce qui touche à la programmation",
    annee: 2024,
    descriptionLongue: "Le projet AZICODE a pour objectif de former les jeunes aux compétences numériques et à la programmation afin de faciliter leur insertion dans le marché de l’emploi digital.",
    image: azicodeimg, 
    gallery: [
      "/images/azicode/1.jpg",
      "/images/azicode/2.jpg",
      "/images/azicode/3.jpg",
      "/images/azicode/4.jpg",
      "/images/azicode/5.jpg",
      "/images/azicode/6.jpg",
      "/images/azicode/7.jpg",
      "/images/azicode/8.jpg",
      "/images/azicode/9.jpg",
      "/images/azicode/10.jpg",
    ]
  },
  {
    id: 2,
    titre: "ECOLE 2 EME CHANCE NOUVELLE GENERATION",
    description: "Formation dans le domaine de la gestion hôtelière et de pâtisserie dans les villes Demnat et Azilal",
    annee: 2021,
    descriptionLongue: "Cette école offre une seconde chance aux jeunes déscolarisés en leur proposant une formation pratique et professionnelle dans des métiers porteurs comme l’hôtellerie et la pâtisserie.",
    image: chance,
    gallery: [
      "/images/chance/1.jpg",
      "/images/chance/2.jpg",
      "/images/chance/3.jpg",
      "/images/chance/4.jpg",
      "/images/chance/5.jpg",
      "/images/chance/6.jpg",
      "/images/chance/7.jpg",
      "/images/chance/8.jpg",
      "/images/chance/9.jpg",
      "/images/chance/10.jpg",
    ]
  },
  {
    id: 3,
    titre: "QUALIFICATION ET AIDE A LA REINSERTION DES PRISONNIERS",
    description: "Formation professionnelle pour l’intégration des détenus dans la vie sociale",
    annee: 2020,
    descriptionLongue: "Ce projet vise à accompagner les prisonniers en leur offrant une qualification professionnelle qui facilite leur réinsertion et leur donne une nouvelle chance dans la société.",
    image: prisonniers,
    gallery: [
      "/images/prisonniers/1.jpg",
      "/images/prisonniers/2.jpg",
      "/images/prisonniers/3.jpg",
      "/images/prisonniers/4.jpg",
      "/images/prisonniers/5.jpg",
      "/images/prisonniers/6.jpg",
      "/images/prisonniers/7.jpg",
      "/images/prisonniers/8.jpg",
      "/images/prisonniers/9.jpg",
      "/images/prisonniers/10.jpg",
    ]
  },
  {
    id: 4,
    titre: "CENTRE RENFORCEMENT DES CAPACITES DES FEMMES",
    description: "Former les femmes dans le domaine de cuisine et aussi de l’éducation des enfants 3 à 5 ans",
    annee: 2019,
    descriptionLongue: "Ce centre a pour mission de renforcer les capacités des femmes en leur offrant des formations pratiques dans la cuisine et l’éducation préscolaire afin de favoriser leur autonomie et leur intégration socio-économique.",
    image: femmes,
    gallery: [
      "/images/femmes/1.jpg",
      "/images/femmes/2.jpg",
      "/images/femmes/3.jpg",
      "/images/femmes/4.jpg",
      "/images/femmes/5.jpg",
      "/images/femmes/6.jpg",
      "/images/femmes/7.jpg",
      "/images/femmes/8.jpg",
      "/images/femmes/9.jpg",
      "/images/femmes/10.jpg",
    ]
  }
];




// les projet realise


// db.js

export const domainsData = [
  {
    title: "L'environnement",
    slug: "environnement",
    projects: [
      {
        title: "Projets terminés",
        slug: "termines",
        description: "Description détaillée des projets environnementaux terminés.",
        image: "/assets/projets/environnement1.jpg",
        year: 2023,
        location: "Azzilal",
      },
      {
        title: "Projets en cours",
        slug: "cours",
        description: "Projets environnementaux actuellement en cours.",
        image: "/assets/projets/environnement2.jpg",
        year: 2025,
        location: "Marrakech",
      },
      {
        title: "Galerie photos",
        slug: "galerie",
        description: "Collection de photos des projets environnementaux.",
        image: "/assets/projets/environnement3.jpg",
        year: 2024,
        location: "Rabat",
      },
    ],
  },
  {
    title: "Santé",
    slug: "sante",
    projects: [
      {
        title: "Conférences",
        slug: "conferences",
        description: "Conférences organisées sur la santé publique.",
        image: "/assets/projets/sante1.jpg",
        year: 2022,
        location: "Casablanca",
      },
      {
        title: "Formations",
        slug: "formations",
        description: "Sessions de formation pour les professionnels de santé.",
        image: "/assets/projets/sante2.jpg",
        year: 2023,
        location: "Fès",
      },
      {
        title: "Ateliers",
        slug: "ateliers",
        description: "Ateliers pratiques pour la population locale.",
        image: "/assets/projets/sante3.jpg",
        year: 2024,
        location: "Agadir",
      },
    ],
  },
  {
    title: "Domaine Social",
    slug: "social",
    projects: [
      {
        title: "Rapports annuels",
        slug: "rapports",
        description: "Rapports annuels sur les actions sociales menées.",
        image: "/assets/projets/social1.jpg",
        year: 2023,
        location: "Rabat",
      },
      {
        title: "Publications",
        slug: "publications",
        description: "Publications et articles sur le domaine social.",
        image: "/assets/projets/social2.jpg",
        year: 2022,
        location: "Casablanca",
      },
      {
        title: "Études & recherches",
        slug: "etudes",
        description: "Études et recherches sur le développement social.",
        image: "/assets/projets/social3.jpg",
        year: 2024,
        location: "Marrakech",
      },
    ],
  },
  {
    title: "Culture, Art et Patrimoine",
    slug: "culture-art",
    projects: [
      {
        title: "Institutions",
        slug: "institutions",
        description: "Projets culturels réalisés avec les institutions locales.",
        image: "/assets/projets/culture1.jpg",
        year: 2023,
        location: "Fès",
      },
      {
        title: "ONG",
        slug: "ong",
        description: "Projets menés en collaboration avec différentes ONG.",
        image: "/assets/projets/culture2.jpg",
        year: 2024,
        location: "Rabat",
      },
      {
        title: "Collectivités",
        slug: "collectivites",
        description: "Actions culturelles avec les collectivités locales.",
        image: "/assets/projets/culture3.jpg",
        year: 2022,
        location: "Casablanca",
      },
    ],
  },
  {
    title: "Échange Culturel",
    slug: "echange-culturel",
    projects: [
      {
        title: "Articles de presse",
        slug: "articles",
        description: "Articles de presse publiés sur les échanges culturels.",
        image: "/assets/projets/echange1.jpg",
        year: 2023,
        location: "Rabat",
      },
      {
        title: "Vidéos",
        slug: "videos",
        description: "Vidéos sur les événements culturels et échanges.",
        image: "/assets/projets/echange2.jpg",
        year: 2024,
        location: "Casablanca",
      },
      {
        title: "Podcasts",
        slug: "podcasts",
        description: "Podcasts sur la culture et le patrimoine.",
        image: "/assets/projets/echange3.jpg",
        year: 2025,
        location: "Fès",
      },
    ],
  },
  {
    title: "Autres",
    slug: "autres",
    projects: [
      {
        title: "Témoignages",
        slug: "temoignages",
        description: "Témoignages sur différents projets réalisés.",
        image: "/assets/projets/autres1.jpg",
        year: 2022,
        location: "Agadir",
      },
      {
        title: "Archives",
        slug: "archives",
        description: "Archives des anciens projets et actions de l'organisation.",
        image: "/assets/projets/autres2.jpg",
        year: 2023,
        location: "Rabat",
      },
      {
        title: "Divers",
        slug: "divers",
        description: "Projets divers ne rentrant pas dans les autres catégories.",
        image: "/assets/projets/autres3.jpg",
        year: 2024,
        location: "Casablanca",
      },
    ],
  },
];




// les valeurs



export const confianceCards = [
  {
    title: "L’altruisme",
    description:
      "incitant un grand nombre de compétences de la province à souscrire à cette action collective.",
    image: Altruism,
  },
  {
    title: "La fierté ",
    description:
      "créant un sentiment d’appartenance à la communauté de montagne et une prise de conscience de la responsabilité qui en découle",
    image: Pride,
  },
  {
    title: "	La probité",
    description:
      "faisant naître le souci d’une gestion transparente des finances de l’association.",
    image: Probity,
  },
  {
    title: "La persévérance ",
    description:
      "obligeant à faire preuve de ténacité et de volonté d’aller jusqu’au bout de ce que l’on entreprend",
    image: Preseverance,
  },
  {
    title: "Le respect",
    description:
      "obligeant à agir en étroite collaboration avec tous les acteurs, dans un esprit d’ouverture et de dialogue et de respect mutuel. .",
    image: respect,
  },
];

// les partenaires



