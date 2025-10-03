
import agadir from "../assets/agadir.png";

import zagora from "../assets/zagora.png";
import azicodeimg from "../assets/projetactuel/azicodeimg.jpg";
import chance from "../assets/projetactuel/2mchance.jpg";
import femmes from "../assets/projetactuel/femms.jpg";
import prisonniers from "../assets/projetactuel/prisonniers.jpg";
import Altruism from "@/assets/Altruism.png";
import Pride from "@/assets/fierté.png";
import Probity from "@/assets/Probity.png";
import Preseverance from "@/assets/Perseverance.png";
import respect from "@/assets/respect.jpg";




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


import copimg from "@/assets/projetrealise/environnement/copimg.jpg";
import cop1 from "@/assets/projetrealise/environnement/cop1.jpg";
import cop2 from "@/assets/projetrealise/environnement/cop2.jpg";
import cop3 from "@/assets/projetrealise/environnement/cop3.jpg";
import cop4 from "@/assets/projetrealise/environnement/cop4.jpg";
import cop5 from "@/assets/projetrealise/environnement/cop5.jpg";
import cop6 from "@/assets/projetrealise/environnement/cop6.jpg";
import proget1 from "@/assets/projetrealise/environnement/proget1.jpg";
import proget2 from "@/assets/projetrealise/environnement/proget2.jpg";
import proget3 from "@/assets/projetrealise/environnement/proget3.jpg";

export const domainsData = [
  {
    title: "L'environnement",
    slug: "environnement",
    projects: [
      {
        title: "Cop 22",
        slug: "cop22",
        description: "Description détaillée des projets environnementaux terminésDescription détaillée des projets environnementaux terminés.Description détaillée des projets environnementaux terminés.Description détaillée des projets environnementaux terminés.Description détaillée des projets environnementaux terminés.Description détaillée des projets environnementaux terminés..",
        image: copimg,
        year: 2016,
        gallery: [cop1,cop2,cop3,cop4,cop5,cop6],
      },
      {
        title: "Progettomondo",
        slug: "progettomondo",
        description: "Description détaillée des projets environnementaux terminésDescription détaillée des projets environnementaux terminés.Description détaillée des projets environnementaux terminés.Description détaillée des projets environnementaux terminés.Description détaillée des projets environnementaux terminés.Description détaillée des projets environnementaux terminés...",
        image: proget1,
        year: 2023,
        gallery: [proget1,proget2,proget3,],
      },
      {
        title: "Activités de sensibilisation",
        slug: "sensibilisation",
        description: "Collection de photos des projets environnementaux.",
        image: "/assets/projets/environnement3.jpg",
        year: 2014,
        gallery: [
          "/assets/projets/sante3.jpg",
          "/assets/projets/sante3-2.jpg",
        ],
      },
    ],
  },
  {
    title: "Santé",
    slug: "sante",
    projects: [
      {
        title: "Convois médicaux",
        slug: "convois-médicaux",
        description: "Conférences organisées sur la santé publique.",
        image: "/assets/projets/sante1.jpg",
        year: 2011,
        gallery: [
          "/assets/projets/sante3.jpg",
          "/assets/projets/sante3-2.jpg",
        ],
      },
      {
        title: "Corona",
        slug: "corona",
        description: "Sessions de formation pour les professionnels de santé.",
        image: "/assets/projets/sante2.jpg",
        year: 2020,
        gallery: [
          "/assets/projets/sante3.jpg",
          "/assets/projets/sante3-2.jpg",
        ],
      },
      {
        title: "informations de la santé ",
        slug: "information",
        description: "Ateliers pratiques pour la population locale.",
        image: "/assets/projets/sante3.jpg",
        year: 2016,
        gallery: [
          "/assets/projets/sante3.jpg",
          "/assets/projets/sante3-2.jpg",
        ],
      },
    ],
  },
  {
    title: "Domaine Social",
    slug: "social",
    projects: [
      {
        title: "Journaliers",
        slug: "journaliers",
        description: "Rapports annuels sur les actions sociales menées.",
        image: "/assets/projets/social1.jpg",
        year: 2016,
        gallery: [
          "/assets/projets/sante3.jpg",
          "/assets/projets/sante3-2.jpg",
        ],
      },
      {
        title: "Convois de Solidarité",
        slug: "convois-solidarité",
        description: "Publications et articles sur le domaine social.",
        image: "/assets/projets/social2.jpg",
        year: 2011,
        gallery: [
          "/assets/projets/sante3.jpg",
          "/assets/projets/sante3-2.jpg",
        ],
      },
      {
        title: "Diagnostic Participatif",
        slug: "diagnostic",
        description: "Études et recherches sur le développement social.",
        image: "/assets/projets/social3.jpg",
        year: 2018,
        gallery: [
          "/assets/projets/sante3.jpg",
          "/assets/projets/sante3-2.jpg",
        ],
      },
    ],
  },
  {
    title: "Culture, Art et Patrimoine",
    slug: "culture-art",
    projects: [
      {
        title: "Festival d'Azilal",
        slug: "festival",
        description: "Projets culturels réalisés avec les institutions locales.",
        image: "/assets/projets/culture1.jpg",
        year: 2001,
        gallery: [
          "/assets/projets/sante3.jpg",
          "/assets/projets/sante3-2.jpg",
        ],
      },
      {
        title: "Gravures Rupestres",
        slug: "gravures",
        description: "Projets menés en collaboration avec différentes ONG.",
        image: "/assets/projets/culture2.jpg",
        year: 2019,
        gallery: [
          "/assets/projets/sante3.jpg",
          "/assets/projets/sante3-2.jpg",
        ],
      },
      {
        title: "EN Hommage aux Résistants",
        slug: "hommage",
        description: "Actions culturelles avec les collectivités locales.",
        image: "/assets/projets/culture3.jpg",
        year: 2013,
        gallery: [
          "/assets/projets/sante3.jpg",
          "/assets/projets/sante3-2.jpg",
        ],
      },
      {
        title: "Foire du livre",
        slug: "foire",
        description: "Actions culturelles avec les collectivités locales.",
        image: "/assets/projets/culture3.jpg",
        year: 2015,
        gallery: [
          "/assets/projets/sante3.jpg",
          "/assets/projets/sante3-2.jpg",
        ],
      },
    ],
  },
  {
    title: "Échange Culturel",
    slug: "échange-culturel",
    projects: [
      {
        title: "Barbados et Espagnols",
        slug: "barbados-espagnols",
        description: "Articles de presse publiés sur les échanges culturels.",
        image: "/assets/projets/echange1.jpg",
        year: 2018,
        gallery: [
          "/assets/projets/sante3.jpg",
          "/assets/projets/sante3-2.jpg",
        ],
      },
      {
        title: "Combattre L'extrémisme",
        slug: "extremisme",
        description: "Vidéos sur les événements culturels et échanges.",
        image: "/assets/projets/echange2.jpg",
        year: 2011,
        gallery: [
          "/assets/projets/sante3.jpg",
          "/assets/projets/sante3-2.jpg",
        ],
      },
      {
        title: "Dialogueb Interreligieux",
        slug: "dialogueb-interreligieux",
        description: "Podcasts sur la culture et le patrimoine.",
        image: "/assets/projets/echange3.jpg",
        year: 2025,
        gallery: [
          "/assets/projets/sante3.jpg",
          "/assets/projets/sante3-2.jpg",
        ],
      },
    ],
  },
  {
    title: "Autres",
    slug: "autres",
    projects: [
      {
        title: "BED",
        slug: "bed",
        description: "Témoignages sur différents projets réalisés.",
        image: "/assets/projets/autres1.jpg",
        year: 2005,
        gallery: [
          "/assets/projets/sante3.jpg",
          "/assets/projets/sante3-2.jpg",
        ],
      },
      {
        title: "Tourisme de Montagne",
        slug: "tourisme-montagne",
        description: "Archives des anciens projets et actions de l'organisation.",
        image: "/assets/projets/autres2.jpg",
        year: 2015,
        gallery: [
          "/assets/projets/sante3.jpg",
          "/assets/projets/sante3-2.jpg",
        ],
      },
      {
        title: "Unité Nationale",
        slug: "unité-nationale",
        description: "Projets divers ne rentrant pas dans les autres catégories.",
        image: "/assets/projets/autres3.jpg",
        year: 2011,
        gallery: [
          "/assets/projets/sante3.jpg",
          "/assets/projets/sante3-2.jpg",
        ],
      },
      {
        title: "Accueil des étudiants Africains",
        slug: "étudiants-africains",
        description: "Projets divers ne rentrant pas dans les autres catégories.",
        image: "/assets/projets/autres3.jpg",
        year: 2014,
        gallery: [
          "/assets/projets/sante3.jpg",
          "/assets/projets/sante3-2.jpg",
        ],
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



