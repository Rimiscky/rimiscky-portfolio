export const site = {
  name: "Rimiscky Sambala",
  title: "Photographe • Vidéaste • Créateur Digital",
  url: "https://www.rimiscky.fr",
  email: "rimiscky@gmail.com",
  phone: "+33 7 66 25 31 48",
  phoneHref: "tel:+33766253148",
  description:
    "Étudiant en Mastère Directeur de Projet IA, passionné par la création de contenu visuel et les expériences digitales. J'accompagne les marques dans leur communication grâce à la photographie, la vidéo, le design et le développement web.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rimiscky/" },
    { label: "Instagram", href: "https://www.instagram.com/rimiscky/" },
    { label: "Pexels", href: "https://www.pexels.com/fr-fr/@rimiscky/" },
  ],
};

export const navLinks = [
  { label: "À propos", href: "#a-propos" },
  { label: "Photographie", href: "#photographie" },
  { label: "Vidéo", href: "#video" },
  { label: "Design", href: "#design" },
  { label: "Équipement", href: "#equipement" },
  { label: "Web", href: "#web" },
  { label: "Contact", href: "#contact" },
];

export const experiences = [
  {
    role: "Responsable Communication Digitale",
    company: "Le 17.45",
    description:
      "Garant des réseaux sociaux et du référencement : stratégie de contenu, photographie culinaire, gestion des campagnes ads et animation de la communauté.",
  },
  {
    role: "Responsable Communication Digitale",
    company: "Bagelstein",
    description:
      "Création de contenus visuels, campagnes social media et communication de marque au quotidien.",
  },
  {
    role: "Webdesigner — Alternance",
    company: "Conroy Vin & Spiritueux",
    description:
      "En alternance : conception d'interfaces, identité visuelle, visuels promotionnels et expérience e-commerce pour l'univers du vin.",
  },
  {
    role: "Développeur Web & Créateur de contenus",
    company: "Freelance",
    description:
      "Sites WordPress et PrestaShop, shootings photo, vidéos et identités visuelles pour des marques variées.",
  },
];

export const skills = [
  "Photographie",
  "Vidéo",
  "Motion Design",
  "Branding",
  "UX/UI",
  "WordPress",
  "PrestaShop",
  "HTML",
  "CSS",
  "JavaScript",
  "SEO",
  "Marketing Digital",
];

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const photos: Photo[] = [
  { src: "/photos/photo-01.jpg", width: 1800, height: 1440, alt: "Couple complice au comptoir d'un restaurant, écharpe orange" },
  { src: "/photos/photo-05.jpg", width: 1200, height: 1800, alt: "Mode de rue à Paris sous la pluie, top rose et bottes noires" },
  { src: "/photos/photo-02.jpg", width: 1800, height: 1200, alt: "Homme assis sur le dossier d'un banc au bord d'un lac de montagne" },
  { src: "/photos/photo-08.jpg", width: 1358, height: 1800, alt: "Atelier beauté : démonstration de produit en tablier noir" },
  { src: "/photos/photo-03.jpg", width: 1800, height: 1200, alt: "Lecture au bord d'un lac, montagnes enneigées en arrière-plan" },
  { src: "/photos/photo-12.jpg", width: 1200, height: 1800, alt: "Défilé Michael Lombard : tailleur bleu ceinturé de rouge sur le podium" },
  { src: "/photos/photo-04.jpg", width: 1800, height: 1200, alt: "Duo levant leurs verres au bar d'un restaurant" },
  { src: "/photos/photo-06.jpg", width: 1200, height: 1800, alt: "Portrait extérieur d'un homme bras ouverts, ensemble résidentiel" },
  { src: "/photos/photo-07.jpg", width: 1800, height: 1306, alt: "Éclat de rire partagé dans un jardin ensoleillé" },
  { src: "/photos/photo-15.jpg", width: 1200, height: 1800, alt: "Gros plan sur les alliances d'un couple front contre front" },
  { src: "/photos/photo-09.jpg", width: 1800, height: 1412, alt: "Détails de mariage en noir et blanc : escarpins, bijoux et montre" },
  { src: "/photos/photo-16.jpg", width: 1192, height: 1800, alt: "Silhouette artistique en noir et blanc coiffée d'une capeline" },
  { src: "/photos/photo-10.jpg", width: 1800, height: 1200, alt: "Danseurs en tenue traditionnelle ouvrant un mariage, escalier doré" },
  { src: "/photos/photo-17.jpg", width: 1200, height: 1800, alt: "Portrait studio d'un homme en costume bleu sur fond noir" },
  { src: "/photos/photo-11.jpg", width: 1800, height: 1445, alt: "Défilé : robe de gala rose volumineuse sous les projecteurs" },
  { src: "/photos/photo-18.jpg", width: 1800, height: 1800, alt: "Demoiselles d'honneur en robes fuchsia dans un jardin à la française" },
  { src: "/photos/photo-13.jpg", width: 1800, height: 1200, alt: "Officiant à l'écharpe tricolore pendant une cérémonie en mairie" },
  { src: "/photos/photo-14.jpg", width: 1800, height: 1200, alt: "Échange de regards des mariés en mairie, costume rouge et robe blanche" },
  { src: "/photos/photo-21.jpg", width: 1800, height: 1200, alt: "Barques amarrées sur le lac d'Annecy, montagnes au loin" },
  { src: "/photos/photo-20.jpg", width: 1404, height: 1800, alt: "Portrait studio noir et blanc, foulard de cuir et chaînes argentées" },
  { src: "/photos/photo-23.jpg", width: 1800, height: 1350, alt: "Homme assis sur une luge devant un 4x4 dans la neige" },
  { src: "/photos/photo-22.jpg", width: 1200, height: 1800, alt: "Portrait extérieur au crépuscule, longues tresses blondes" },
  { src: "/photos/photo-19.jpg", width: 1800, height: 1800, alt: "Shooting créatif : coulées de peinture colorée sur fond blanc" },
  { src: "/photos/photo-25.jpg", width: 1013, height: 1800, alt: "Lecture dans le métro, veste kaki et casque audio" },
  { src: "/photos/photo-24.jpg", width: 1529, height: 1800, alt: "Portrait urbain au casque audio, tour Eiffel sous la neige" },
  { src: "/photos/photo-26.jpg", width: 1200, height: 1800, alt: "Shooting éditorial en extérieur, longues tresses au vent" },
  { src: "/photos/photo-27.jpg", width: 1800, height: 1800, alt: "Portrait cinématique : seul immobile au milieu de la foule" },
];

export const videoProjects = [
  {
    title: "Film de marque",
    description:
      "Réalisation, tournage et montage d'un film court pensé pour les réseaux sociaux — tourné au Sony A7 IV, stabilisé au gimbal.",
    src: "/videos/final.mp4",
    poster: "/videos/final-poster.jpg",
    tags: ["Réalisation", "Montage", "Étalonnage"],
  },
];

export const videoClips = [
  {
    src: "/videos/clip-01.mp4",
    poster: "/videos/clip-01-poster.jpg",
    width: 720,
    height: 1280,
    title: "Portrait urbain",
    tag: "IA générative",
  },
  {
    src: "/videos/clip-02.mp4",
    poster: "/videos/clip-02-poster.jpg",
    width: 1280,
    height: 720,
    title: "Scène de gare",
    tag: "IA générative",
  },
  {
    src: "/videos/clip-03.mp4",
    poster: "/videos/clip-03-poster.jpg",
    width: 850,
    height: 1280,
    title: "Nuée d'oiseaux",
    tag: "Effets visuels",
  },
];

export type DesignItem = {
  src: string;
  width: number;
  height: number;
  alt: string;
  category: string;
  span: "tall" | "wide" | "square" | "big";
};

export const designItems: DesignItem[] = [
  { src: "/design/cover-djakis-1.jpg", width: 1400, height: 1400, alt: "Cover d'album — Djakis Le Grand-R", category: "Direction artistique", span: "big" },
  { src: "/design/app-accueil-1.png", width: 644, height: 1400, alt: "UI Design — écran d'accueil d'application mobile", category: "UI Design", span: "tall" },
  { src: "/design/visuel-05.jpg", width: 1400, height: 1289, alt: "Visuel réseaux sociaux", category: "Réseaux sociaux", span: "square" },
  { src: "/design/visuel-01.jpg", width: 1114, height: 1400, alt: "Affiche créative", category: "Affiche", span: "square" },
  { src: "/design/app-connexion.png", width: 644, height: 1400, alt: "UI Design — écran de connexion d'application mobile", category: "UI Design", span: "tall" },
  { src: "/design/cover-djakis-2.jpg", width: 1400, height: 1400, alt: "Cover d'album — déclinaison", category: "Branding", span: "square" },
  { src: "/design/visuel-06.jpg", width: 1261, height: 1400, alt: "Visuel de communication", category: "Réseaux sociaux", span: "square" },
  { src: "/design/visuel-02.jpg", width: 1113, height: 1400, alt: "Affiche événementielle", category: "Affiche", span: "tall" },
  { src: "/design/visuel-03.jpg", width: 1113, height: 1400, alt: "Création graphique print", category: "Print", span: "square" },
  { src: "/design/cover-djakis-3.jpg", width: 1400, height: 1400, alt: "Cover d'album — version alternative", category: "Direction artistique", span: "square" },
  { src: "/design/app-verification.png", width: 644, height: 1400, alt: "UI Design — écran de vérification", category: "UI Design", span: "tall" },
  { src: "/design/visuel-04.jpg", width: 1114, height: 1400, alt: "Visuel de marque", category: "Branding", span: "square" },
  { src: "/design/chez-conroy-ruby-red.jpg", width: 990, height: 1400, alt: "Affiche promotionnelle Ruby Red St Peter's — réalisée en alternance chez Conroy Vins & Spiritueux", category: "Conroy — Alternance", span: "tall" },
  { src: "/design/chez-conroy-master-class.jpg", width: 1400, height: 1084, alt: "Affiche Master Class « Tour du Monde des Whiskies » — réalisée en alternance chez Conroy Vins & Spiritueux", category: "Conroy — Alternance", span: "wide" },
  { src: "/design/carte-visite-gaec.jpg", width: 1400, height: 1400, alt: "Carte de visite GAEC — identité visuelle et print", category: "Print", span: "square" },
  { src: "/design/affiche-tech-1.jpg", width: 1400, height: 1397, alt: "Visuel réseaux sociaux « Consulting Business » — Tech Partners Group", category: "Réseaux sociaux", span: "square" },
  { src: "/design/chez-conroy-st-peters.png", width: 1400, height: 1400, alt: "Visuel réseaux sociaux Ruby Red St Peter's — réalisé en alternance chez Conroy Vins & Spiritueux", category: "Conroy — Alternance", span: "big" },
  { src: "/design/logo-recycle-moi.jpg", width: 1400, height: 1050, alt: "Identité visuelle et cartes de visite Recycle Moi", category: "Branding", span: "square" },
  { src: "/design/vival-1.jpg", width: 1400, height: 990, alt: "Publicité Vival — eau minérale naturelle", category: "Publicité", span: "wide" },
  { src: "/design/carte-visite-1.jpg", width: 1400, height: 1050, alt: "Cartes de visite Groupe Olie Holding", category: "Print", span: "square" },
  { src: "/design/femme-enceinte.png", width: 1400, height: 1398, alt: "Visuel jeu concours séance photo — réseaux sociaux", category: "Réseaux sociaux", span: "square" },
  { src: "/design/chez-conroy-whisky.jpg", width: 1400, height: 748, alt: "Bannière web Islay Single Malt — réalisée en alternance chez Conroy Vins & Spiritueux", category: "Conroy — Alternance", span: "wide" },
  { src: "/design/logo-06.png", width: 1400, height: 1143, alt: "Logo E.A.O.A.G — association pour l'éducation des orphelins et albinos en Guinée", category: "Logo", span: "square" },
  { src: "/design/brochure-a5.jpg", width: 1400, height: 1089, alt: "Brochure A5 services de soins infirmiers à domicile — Bien Être Pour Tous", category: "Print", span: "wide" },
  { src: "/design/carte-visite-odellya.jpg", width: 1400, height: 933, alt: "Carte de visite O'dellya Consulting", category: "Print", span: "square" },
  { src: "/design/affiche-tech-2.jpg", width: 1389, height: 1400, alt: "Visuel réseaux sociaux « Sécurité Informatique » — Tech Partners Group", category: "Réseaux sociaux", span: "square" },
  { src: "/design/groupe-1.jpg", width: 1400, height: 1298, alt: "Packaging personnalisé — sachet de chips anniversaire", category: "Packaging", span: "square" },
  { src: "/design/chez-conroy-exclusivite.jpg", width: 1400, height: 1400, alt: "Visuel Instagram whisky exclusif — réalisé en alternance chez Conroy Vins & Spiritueux", category: "Conroy — Alternance", span: "square" },
  { src: "/design/carte-visite-2.jpg", width: 1400, height: 1050, alt: "Cartes de visite BCI — Banque Commerciale Internationale", category: "Print", span: "square" },
  { src: "/design/logo-le-courtier.jpg", width: 1400, height: 1050, alt: "Logo et enseigne Le Courtier", category: "Logo", span: "square" },
  { src: "/design/vival-2.jpg", width: 1400, height: 990, alt: "Publicité Vival — déclinaison de campagne", category: "Publicité", span: "wide" },
  { src: "/design/brochure-gm.png", width: 1400, height: 934, alt: "Brochure et mise en page éditoriale", category: "Print", span: "wide" },
];

export const equipment = [
  {
    name: "Sony A7 IV",
    image: "/equipment/sony-a7iv.jpg",
    kicker: "Boîtier hybride plein format",
    description:
      "Le cœur de mon setup. Un capteur 33 Mpx plein format qui excelle autant en photo qu'en vidéo 4K, avec un autofocus d'une fiabilité redoutable.",
    specs: ["33 Mpx plein format", "4K 60p 10-bit", "AF temps réel Eye-AF", "Double slot CFexpress / SD"],
    why: "Sa polyvalence me permet de passer d'un shooting photo à un tournage vidéo sans compromis sur la qualité.",
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
  },
  {
    name: "DJI RS5",
    image: "/equipment/dji-rs5.jpg",
    kicker: "Stabilisateur 3 axes",
    description:
      "La fluidité cinématographique à main levée. Des mouvements de caméra précis et organiques, même en conditions de tournage exigeantes.",
    specs: ["Stabilisation 3 axes Ronin", "Axes verrouillables automatiques", "Écran tactile intégré", "Modes Timelapse & Panorama"],
    why: "Il transforme chaque plan en mouvement en séquence cinématique, sans installation lourde.",
    gradient: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
  },
  {
    name: "Sony 24-70mm f/2.8 GM",
    image: "/equipment/sony-24-70mm.jpg",
    kicker: "Objectif zoom G Master",
    description:
      "Le zoom de référence. Une plage focale qui couvre le portrait, le reportage et le paysage avec un piqué exceptionnel à toutes les ouvertures.",
    specs: ["Ouverture constante f/2.8", "Piqué G Master", "Bokeh 9 lamelles", "Tropicalisé"],
    why: "Un seul objectif pour 90 % de mes situations : réactivité maximale, qualité d'image sans concession.",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    name: "Aputure MC",
    image: "/equipment/aputure-mc.jpg",
    kicker: "Lumière LED RGB de poche",
    description:
      "Une palette de couleurs complète au format carte de crédit. Idéale pour ajouter une touche créative ou déboucher un sujet en tournage léger.",
    specs: ["RGB + CCT 3200-6500K", "Contrôle HSI précis", "Fixation magnétique", "Recharge USB-C"],
    why: "Elle tient dans la poche et transforme instantanément l'ambiance d'un plan — le rapport encombrement/impact est imbattable.",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
  },
  {
    name: "Zoom H6essential",
    image: "/equipment/zoom-h6essential.jpg",
    kicker: "Enregistreur portable 6 pistes",
    description:
      "La référence du son nomade. Six pistes simultanées et un enregistrement 32 bits float qui pardonne tous les écarts de niveau.",
    specs: ["6 pistes simultanées", "32 bits float", "Capsule stéréo XY", "Entrées XLR/TRS"],
    why: "Un son propre sans stress : avec le 32 bits float, impossible de saturer une prise, même en conditions imprévisibles.",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    name: "Godox AD600Pro",
    image: "/equipment/godox-ad600pro.jpg",
    kicker: "Flash de studio autonome",
    description:
      "La puissance d'un flash de studio, partout. 600 joules sur batterie pour sculpter la lumière en extérieur comme en intérieur.",
    specs: ["Puissance 600 Ws", "TTL & HSS 1/8000s", "Monture Bowens", "Batterie lithium intégrée"],
    why: "Il me permet de dompter le soleil en plein jour et d'obtenir un rendu studio sur n'importe quel lieu de shooting.",
    gradient: "from-indigo-500/20 via-violet-500/10 to-transparent",
  },
];

export const webStack = ["WordPress", "PrestaShop", "HTML", "CSS", "JavaScript", "PHP", "SQL"];

export const webProjects = [
  {
    title: "Conroy Vin & Spiritueux",
    type: "E-commerce — PrestaShop",
    description:
      "Conception et webdesign d'une boutique en ligne dédiée à l'univers du vin et des spiritueux, réalisés dans le cadre de mon alternance.",
  },
  {
    title: "Le 17.45",
    type: "Site vitrine — WordPress",
    description:
      "Refonte de la présence digitale du restaurant : site vitrine, SEO local et contenus visuels.",
  },
  {
    title: "rimiscky.fr",
    type: "Portfolio — Next.js",
    description:
      "Mon portfolio personnel : Next.js, TypeScript, Tailwind CSS et animations Framer Motion.",
  },
];
