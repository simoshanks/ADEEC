
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


export const domainsData = [
  {
    id: 1,
    title: "Art",
    slug: "art",
    image: agadir,
    projects: [
      { id: 1, title: "Poésie", slug: "poesie", image: zagora, description: "Projet en poésie et arts littéraires.", gallery: [agadir, zagora] },
      { id: 2, title: "Danse", slug: "danse", image: agadir, description: "Projet pour l'enseignement de la danse et des arts expressifs.", gallery: [zagora, agadir] },
      { id: 3, title: "Photographie", slug: "photographie", image: zagora, description: "Projet de photographie et vidéo.", gallery: [agadir, zagora] },
      { id: 4, title: "Musique", slug: "musique", image: agadir, description: "Projet de musique et apprentissage des instruments.", gallery: [zagora, agadir] },
      { id: 5, title: "Théâtre", slug: "theatre", image: zagora, description: "Projet de théâtre et arts de la scène.", gallery: [agadir, zagora] },
    ],
  },
  {
    id: 2,
    title: "Culture",
    slug: "culture",
    image: agadir,
    projects: [
      { id: 1, title: "Festival", slug: "festival", image: zagora, description: "Projet d'organisation de festivals et événements culturels.", gallery: [agadir, zagora] },
      { id: 2, title: "Cinéma", slug: "cinema", image: agadir, description: "Projet de projection de films et ateliers de cinéma.", gallery: [zagora, agadir] },
      { id: 3, title: "Musique traditionnelle", slug: "musique_trad", image: zagora, description: "Projet de musique traditionnelle et folklorique.", gallery: [agadir, zagora] },
      { id: 4, title: "Exposition", slug: "exposition", image: agadir, description: "Projet d'expositions artistiques et culturelles.", gallery: [zagora, agadir] },
      { id: 5, title: "Littérature", slug: "litterature", image: zagora, description: "Projet de littérature et ateliers d'écriture créative.", gallery: [agadir, zagora] },
    ],
  },
  {
    id: 3,
    title: "Éducation",
    slug: "education",
    image: agadir,
    projects: [
      { id: 1, title: "Lutte contre le décrochage", slug: "hadr_school", image: zagora, description: "Projet pour lutter contre le décrochage scolaire.", gallery: [agadir, zagora] },
      { id: 2, title: "Activités périscolaires", slug: "after_class", image: agadir, description: "Activités parallèles pour le soutien scolaire.", gallery: [zagora, agadir] },
      { id: 3, title: "Apprentissage numérique", slug: "digital_learning", image: zagora, description: "Projet d'apprentissage digital pour les élèves.", gallery: [agadir, zagora] },
      { id: 4, title: "Bibliothèques scolaires", slug: "library", image: agadir, description: "Projet de création de bibliothèques scolaires.", gallery: [zagora, agadir] },
      { id: 5, title: "Formation des enseignants", slug: "teacher_training", image: zagora, description: "Formation des enseignants aux méthodes pédagogiques modernes.", gallery: [agadir, zagora] },
    ],
  },
  {
    id: 4,
    title: "Santé",
    slug: "health",
    image: agadir,
    projects: [
      { id: 1, title: "Don de sang", slug: "blood_donation", image: zagora, description: "Campagne de don de sang.", gallery: [agadir, zagora] },
      { id: 2, title: "Vaccination", slug: "vaccination", image: agadir, description: "Projet de campagnes de vaccination.", gallery: [zagora, agadir] },
      { id: 3, title: "Sensibilisation", slug: "awareness", image: zagora, description: "Sensibilisation à la santé dans les villages.", gallery: [agadir, zagora] },
      { id: 4, title: "Nutrition", slug: "nutrition", image: agadir, description: "Projet de nutrition pour les enfants.", gallery: [zagora, agadir] },
      { id: 5, title: "Santé mentale", slug: "mental_health", image: zagora, description: "Sensibilisation à la santé mentale.", gallery: [agadir, zagora] },
    ],
  },
  {
    id: 5,
    title: "Environnement",
    slug: "environment",
    image: agadir,
    projects: [
      { id: 1, title: "Plantation d'arbres", slug: "tree_planting", image: zagora, description: "Projet de reforestation et protection des forêts.", gallery: [agadir, zagora] },
      { id: 2, title: "Recyclage", slug: "recycling", image: agadir, description: "Projet de recyclage des déchets.", gallery: [zagora, agadir] },
      { id: 3, title: "Nettoyage des rivières", slug: "clean_rivers", image: zagora, description: "Projet de nettoyage des rivières et cours d'eau.", gallery: [agadir, zagora] },
      { id: 4, title: "Ateliers écologiques", slug: "eco_workshops", image: agadir, description: "Ateliers pédagogiques sur l'environnement.", gallery: [zagora, agadir] },
      { id: 5, title: "Énergies durables", slug: "sustainable_energy", image: zagora, description: "Projet d'énergie durable.", gallery: [agadir, zagora] },
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



