
import agadir from "../assets/agadir.png";
import banque from "../assets/banque.png";
import indh from "../assets/indh.png";
import artisant from "../assets/artisant.png";
import laval from "../assets/laval.png";
import logo from "../assets/logo.png";
import ocp from "../assets/ocp.png";
import zagora from "../assets/zagora.png";
import azicodeimg from "../assets/projetactuel/azicodeimg.jpg";
import chance from "../assets/projetactuel/2mchance.jpg";
import femmes from "../assets/projetactuel/femms.jpg";
import prisonniers from "../assets/projetactuel/prisonniers.jpg";


export const carouselItems = [
  { title: "Nature Plant Nursery", image: agadir },
  { title: "Gardening Consultation", image: banque },
  { title: "Eco-Friendly Landscaping", image: indh },
  { title: "Tree Care Service", image: artisant },
  { title: "Urban Green Projects", image: laval },
  { title: "Community Gardening", image: logo },
  { title: "Floral Arrangements", image: ocp },
  { title: "Botanical Research", image: zagora },
  { title: "Eco Innovation", image: laval },
  { title: "Green Energy Projects", image: ocp },
];

// les projet actuel

export const projetsActuels = [
  {
    id: 1,
    titre: "ECOLE DU CODAGE AZICODE 62",
    description: "Une école numérique pour apprendre tout ce qui touche à la programmation",
    annee: 2022,
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
    title: "art",
    slug: "art",
    image: agadir,
    projects: [
      { id: 1, title: "shi3r", slug: "shi3r", image: zagora, description: "مشروع في الشعر والفنون الأدبية.", gallery: [agadir, zagora] },
      { id: 2, title: "raqs", slug: "raqs", image: agadir, description: "مشروع لتعليم الرقص والفنون التعبيرية.", gallery: [zagora, agadir] },
      { id: 3, title: "taswir", slug: "taswir", image: zagora, description: "مشروع للتصوير الفوتوغرافي والفيديو.", gallery: [agadir, zagora] },
      { id: 4, title: "musique", slug: "musique", image: agadir, description: "مشروع الموسيقى والعزف على الآلات.", gallery: [zagora, agadir] },
      { id: 5, title: "theatre", slug: "theatre", image: zagora, description: "مشروع المسرح والفنون الأدائية.", gallery: [agadir, zagora] },
    ],
  },
  {
    id: 2,
    title: "cultir",
    slug: "cultir",
    image: agadir,
    projects: [
      { id: 1, title: "festival", slug: "festival", image: zagora, description: "مشروع تنظيم المهرجانات والفعاليات الثقافية.", gallery: [agadir, zagora] },
      { id: 2, title: "cinema", slug: "cinema", image: agadir, description: "مشروع عرض الأفلام السينمائية وتنظيم ورشات.", gallery: [zagora, agadir] },
      { id: 3, title: "musique_trad", slug: "musique_trad", image: zagora, description: "مشروع الموسيقى التقليدية والفلكلورية.", gallery: [agadir, zagora] },
      { id: 4, title: "exposition", slug: "exposition", image: agadir, description: "مشروع المعارض الفنية والثقافية.", gallery: [zagora, agadir] },
      { id: 5, title: "literature", slug: "literature", image: zagora, description: "مشروع الأدب وورشات الكتابة الإبداعية.", gallery: [agadir, zagora] },
    ],
  },
  {
    id: 3,
    title: "education",
    slug: "education",
    image: agadir,
    projects: [
      { id: 1, title: "hadr_school", slug: "hadr_school", image: zagora, description: "مشروع لمحاربة الهدر المدرسي.", gallery: [agadir, zagora] },
      { id: 2, title: "after_class", slug: "after_class", image: agadir, description: "أنشطة موازية للدعم المدرسي.", gallery: [zagora, agadir] },
      { id: 3, title: "digital_learning", slug: "digital_learning", image: zagora, description: "مشروع التعلم الرقمي للطلاب.", gallery: [agadir, zagora] },
      { id: 4, title: "library", slug: "library", image: agadir, description: "مشروع إنشاء مكتبات مدرسية.", gallery: [zagora, agadir] },
      { id: 5, title: "teacher_training", slug: "teacher_training", image: zagora, description: "تكوين المعلمين في طرق التدريس الحديثة.", gallery: [agadir, zagora] },
    ],
  },
  {
    id: 4,
    title: "health",
    slug: "health",
    image: agadir,
    projects: [
      { id: 1, title: "blood_donation", slug: "blood_donation", image: zagora, description: "حملة للتبرع بالدم.", gallery: [agadir, zagora] },
      { id: 2, title: "vaccination", slug: "vaccination", image: agadir, description: "مشروع حملات التلقيح.", gallery: [zagora, agadir] },
      { id: 3, title: "awareness", slug: "awareness", image: zagora, description: "التوعية الصحية في القرى.", gallery: [agadir, zagora] },
      { id: 4, title: "nutrition", slug: "nutrition", image: agadir, description: "مشروع التغذية للأطفال.", gallery: [zagora, agadir] },
      { id: 5, title: "mental_health", slug: "mental_health", image: zagora, description: "التوعية بالصحة النفسية.", gallery: [agadir, zagora] },
    ],
  },
  {
    id: 5,
    title: "environment",
    slug: "environment",
    image: agadir,
    projects: [
      { id: 1, title: "tree_planting", slug: "tree_planting", image: zagora, description: "مشروع التشجير وحماية الغابات.", gallery: [agadir, zagora] },
      { id: 2, title: "recycling", slug: "recycling", image: agadir, description: "إعادة تدوير النفايات.", gallery: [zagora, agadir] },
      { id: 3, title: "clean_rivers", slug: "clean_rivers", image: zagora, description: "تنظيف الأنهار والمجاري المائية.", gallery: [agadir, zagora] },
      { id: 4, title: "eco_workshops", slug: "eco_workshops", image: agadir, description: "ورشات تعليمية للبيئة.", gallery: [zagora, agadir] },
      { id: 5, title: "sustainable_energy", slug: "sustainable_energy", image: zagora, description: "مشروع الطاقة المستدامة.", gallery: [agadir, zagora] },
    ],
  },
];



