/**
 * INFRASLIM — Strapi API Client & Fallback Data
 * Fournit une connexion transparente à Strapi CMS (REST API)
 * avec données de secours complètes pour un fonctionnement autonome immédiat.
 */

export interface Service {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  badge?: string;
  subservices: string[];
  benefits: string[];
  pricingOverview?: {
    singleSession: string;
    pack10: string;
  };
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
}

export interface TarifCategory {
  id: number;
  category: string;
  items: {
    name: string;
    single: string;
    pack10?: string;
    note?: string;
  }[];
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export interface GlobalSettings {
  centerName: string;
  tagline: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  email: string;
  instagram: string;
  facebook: string;
}

const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://localhost:1337';

// ── DONNÉES DE SECOURS (OFFICIELLES INFRASLIM) ───────────────────────
export const FALLBACK_SERVICES: Service[] = [
  {
    id: 1,
    slug: 'sport-nouvelle-generation',
    title: 'Sport Nouvelle Génération',
    subtitle: 'Brûlez jusqu\'à 1300 calories en 30 minutes grâce à la chaleur infrarouge',
    category: '01 · Effort & Infrarouge',
    description: 'L\'alliance unique de l\'effort cardio et des rayons infrarouges longs. Cette technologie stimule la thermogenèse, accélère le déstockage des graisses profondes et purifie l\'organisme sans surcharger les articulations.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    badge: 'Pôle Sportif',
    subservices: ['InfraBike Allongé', 'Tapis Roulant Infrarouge', 'Infra Roller Massage', 'Renforcement Musculaire'],
    benefits: [
      'Perte calorique multipliée par 3 par rapport au sport classique',
      'Élimination intense des toxines par sudation douce',
      'Soulagement des courbatures et régénération musculaire',
      'Amélioration de la tonicité dès la 1ère séance'
    ],
    pricingOverview: { singleSession: '300 MAD', pack10: '2 400 MAD' }
  },
  {
    id: 2,
    slug: 'soins-amincissants',
    title: 'Soins Amincissants',
    subtitle: 'Technologies de remodelage corporel et drainage sur-mesure',
    category: '02 · Remodelage & Minceur',
    description: 'Dites adieu aux capitons et à la rétention d\'eau. Nos praticiennes certifiées combinent des technologies médicales de pointe (VelaShape, radiofréquence, ultrasons) à des soins manuels experts pour cibler chaque zone rebelle.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    badge: 'Pôle Minceur',
    subservices: ['VelaShape Anti-Cellulite', 'Madérothérapie Sculptante', 'Drainage Lymphatique Renata', 'Pressothérapie Médicale', 'Sauna Dôme Détox'],
    benefits: [
      'Réduction visible de la cellulite fibreuse et aqueuse',
      'Affinement du tour de taille, hanches et cuisses',
      'Sensation de jambes légères immédiate',
      'Raffermissement cutané durable'
    ],
    pricingOverview: { singleSession: '400 MAD', pack10: '3 200 MAD' }
  },
  {
    id: 3,
    slug: 'soins-visage',
    title: 'Soins du Visage',
    subtitle: 'Protocoles médico-esthétiques pour un éclat et une pureté inégalés',
    category: '03 · Éclat & Anti-Âge',
    description: 'Une peau purifiée en profondeur, repulpée et lumineuse dès la première séance. Découvrez nos protocoles d\'exception associant dermatologie esthétique et massages liftants traditionnels.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    badge: 'Pôle Esthétique Visage',
    subservices: ['Hydrafacial Deluxe', 'Carbon Peel Laser Hollywood', 'Massage Kobido Liftant', 'Microneedling & Sérums'],
    benefits: [
      'Extraction indolore des impuretés et comédons',
      'Hydratation intense et infusion de vitamines',
      'Lissage des ridules et stimulation du collagène',
      'Teint éclatant effet peau de verre'
    ],
    pricingOverview: { singleSession: '500 MAD', pack10: '4 000 MAD' }
  },
  {
    id: 4,
    slug: 'epilation-laser',
    title: 'Épilation & Laser',
    subtitle: 'Laser Diode haute performance pour une peau douce définitivement',
    category: '04 · Netteté & Confort Durable',
    description: 'Libérez-vous de la corvée de l\'épilation. Notre équipement laser diode tri-longueur d\'onde avec refroidissement continu garantit des séances rapides, sécurisées et quasi-indolores sur tous les phototypes.',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1200&q=80',
    badge: 'Pôle Laser',
    subservices: ['Laser Diode Tri-Longueur d\'Onde', 'Détatouage & Taches Pigmentaires', 'Épilation à la Cire Douce'],
    benefits: [
      'Destruction définitive du follicule pileux',
      'Système de refroidissement protecteur pour un confort maximal',
      'Efficace sur poils clairs à foncés, peaux claires à mates',
      'Protocoles encadrés par des spécialistes formées'
    ],
    pricingOverview: { singleSession: 'Sur devis', pack10: 'Facilités de paiement' }
  },
  {
    id: 5,
    slug: 'hammam',
    title: 'Hammam Traditionnel',
    subtitle: 'Un sanctuaire de sérénité 100% féminin aux rituels beldi ancestraux',
    category: '05 · Rituels Ancestraux',
    description: 'Vapeur enveloppante, savon noir beldi aux huiles essentielles, gommage méticuleux au gant Kessa et enveloppement purifiant au ghassoul naturel. Une immersion sensorielle unique au cœur de la tradition marocaine.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    badge: 'Pôle Bien-Être Beldi',
    subservices: ['Savon Noir & Eucalyptus', 'Gommage Kessa Traditionnel', 'Enveloppement Ghassoul Royal', 'Massage de Clôture aux Huiles'],
    benefits: [
      'Détoxification profonde et élimination des cellules mortes',
      'Peau d\'une douceur et d\'un soyeux incomparables',
      'Détente musculaire absolue et libération des tensions',
      'Respect strict de l\'intimité et hygiène irréprochable'
    ],
    pricingOverview: { singleSession: '80 MAD', pack10: '250 MAD (Rituel complet)' }
  }
];

export const FALLBACK_ARTICLES: Article[] = [
  {
    id: 1,
    slug: 'comment-bruler-1300-calories-infrabike',
    title: 'Comment brûler jusqu\'à 1300 calories en 30 minutes avec l\'InfraBike ?',
    category: 'Sport Infrarouge',
    date: '15 Novembre 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Découvrez pourquoi le vélo infrarouge sous vide révolutionne la remise en forme féminine à Agdal, Rabat.',
    content: 'L\'InfraBike associe le pédalage couché à la chaleur douce des lampes infrarouges et à l\'effet sous vide. Pendant 30 minutes, votre corps travaille en profondeur tout en préservant vos articulations.\n\nLa chaleur infrarouge pénètre les tissus adipeux, stimule la microcirculation et accélère la sudation, ce qui permet d\'optimiser la dépense énergétique et de lisser l\'aspect peau d\'orange.\n\nContrairement à une séance de cardio classique où la température monte par friction mécanique, l\'infrarouge active immédiatement le système lymphatique et la micro-circulation. Vos cellules déstockent les lipides plus rapidement, tout en ménageant votre système cardio-vasculaire.\n\nChez INFRASLIM Agdal, nos coachs adaptent l\'intensité à votre niveau dès la première séance. Disponible à l\'unité (300 DH) ou en pack 10 séances (1 500 DH).'
  },
  {
    id: 2,
    slug: 'velashape-vs-maderotherapie-quel-soin-choisir',
    title: 'VelaShape vs Madérothérapie : quel soin choisir pour sculpter sa silhouette ?',
    category: 'Amincissement',
    date: '08 Novembre 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Radiofréquence ou massage aux rouleaux de bois ? Nos expertes vous aident à combiner les deux protocoles.',
    content: 'Le VelaShape combine radiofréquence bipolaire, lumière infrarouge et palpé-roulé mécanique pour raffermir la peau et réduire les amas graisseux localisés. C\'est la solution idéale pour la cellulite adipeuse et le relâchement cutané.\n\nLa Madérothérapie utilise des instruments en bois anatomiques pour stimuler le drainage, casser les amas cellulitiques et tonifier les courbes de façon 100% naturelle. Cette technique ancestrale colombienne agit en profondeur sur les adhérences fibreuses.\n\nL\'idéal ? Alterner les deux soins dans un programme personnalisé établi par nos esthéticiennes lors de votre bilan InBody offert. Chez INFRASLIM, nous combinons souvent les deux pour des résultats spectaculaires sur la silhouette.\n\nLe VelaShape est proposé à 400 DH la séance, la Madérothérapie à 300 DH. Des packs 10 séances sont disponibles pour optimiser les résultats.'
  },
  {
    id: 3,
    slug: 'hydrafacial-ou-carbon-peel-peau-lumineuse',
    title: 'Hydrafacial ou Carbon Peel : retrouver une peau lumineuse dès la première séance',
    category: 'Soins Visage',
    date: '28 Octobre 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Un teint frais, des pores resserrés et une hydratation en profondeur sans éviction sociale.',
    content: 'L\'Hydrafacial nettoie, exfolie et hydrate votre peau en profondeur grâce à des sérums riches en antioxydants et acide hyaluronique. Résultat : un teint frais et repulpé immédiatement, sans aucune éviction sociale.\n\nGrâce à sa technologie vortex brevetée, l\'Hydrafacial désincruste les pores sans douleur, élimine le sébum oxydé et injecte simultanément des peptides régénérants. Le résultat dure plusieurs semaines.\n\nLe Carbon Peel, quant à lui, utilise une lotion au carbone activée par laser pour désobstruer les pores, unifier le teint et réguler l\'excès de sébum. Surnommé le "Hollywood Peel", il est particulièrement adapté aux peaux mixtes à grasses.\n\nChez INFRASLIM Agdal, nos esthéticiennes vous orientent vers le protocole le mieux adapté à votre type de peau lors d\'une consultation préalable.'
  },
  {
    id: 4,
    slug: 'bienfaits-hammam-traditionnel-feminin',
    title: 'Les bienfaits du Hammam traditionnel marocain 100% féminin',
    category: 'Bien-être',
    date: '20 Octobre 2026',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Savon beldi, gant kessa et ghassoul : pourquoi intégrer ce rituel ancestral dans votre routine mensuelle.',
    content: 'Dans notre espace 100% féminin à Agdal, le hammam est un véritable moment de déconnexion. La vapeur ouvre les pores et prépare la peau au gommage au gant kessa et au savon beldi.\n\nLe savon noir, riche en vitamine E et en huiles essentielles d\'eucalyptus, assouplit la peau en surface pendant que la chaleur humide agit en profondeur. Le gommage au gant kessa élimine les cellules mortes et stimule la circulation sanguine.\n\nL\'enveloppement au ghassoul, argile naturelle du Moyen Atlas, minéralise et purifie l\'épiderme en profondeur, laissant votre peau incroyablement douce et apaisée.\n\nLe Hammam INFRASLIM est proposé à partir de 150 DH (formule classique) et 250 DH (Hammam Royal complet). Un moment de pure sérénité dans le respect total de votre intimité.'
  },
  {
    id: 5,
    slug: 'epilation-laser-diode-premiere-seance',
    title: 'Épilation laser diode : tout savoir avant votre première séance',
    category: 'Laser Diode',
    date: '12 Octobre 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Nombre de séances, préparation de la peau et résultats durables pour tous les phototypes.',
    content: 'Notre laser diode de dernière génération cible le follicule pileux avec précision tout en protégeant la peau grâce à un système de refroidissement intégré. La technologie tri-longueur d\'onde s\'adapte à tous les phototypes.\n\nAvant votre première séance, quelques précautions simples : évitez l\'exposition au soleil pendant 2 semaines, ne vous épilez pas à la cire ou à l\'épilateur (le rasoir est autorisé), et hydratez votre peau quotidiennement.\n\nEn moyenne, 6 à 8 séances espacées de quelques semaines permettent une réduction durable de la pilosité, sur tous les types de peau. Chaque séance dure entre 15 et 45 minutes selon la zone traitée.\n\nChez INFRASLIM, l\'épilation laser est proposée à partir de 200 DH par zone, avec un forfait corps complet à 2 000 DH. Les séances sont réalisées par nos praticiennes certifiées dans un cadre 100% féminin.'
  },
  {
    id: 6,
    slug: 'drainage-lymphatique-pressotherapie-jambes-legeres',
    title: 'Drainage lymphatique & Pressothérapie : dites adieu aux jambes lourdes',
    category: 'Drainage',
    date: '05 Octobre 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Comment relancer la circulation lymphatique et éliminer la rétention d\'eau naturellement.',
    content: 'Le drainage lymphatique manuel et les bottes de pressothérapie relancent la circulation veino-lymphatique, réduisent la rétention d\'eau et procurent une sensation immédiate de légèreté.\n\nLe drainage lymphatique selon la méthode Renata França utilise des mouvements rythmés et fermes qui accélèrent le flux lymphatique jusqu\'à 8 fois sa vitesse normale. Le résultat est visible dès la première séance : ventre dégonflé, jambes affinées et sensation de bien-être immédiat.\n\nLa pressothérapie médicale complète le drainage manuel grâce à des bottes pneumatiques qui exercent une pression progressive des pieds vers le haut du corps. Cette action mécanique favorise le retour veineux et l\'élimination des toxines.\n\nC\'est le complément parfait après vos séances de sport infrarouge ou de remodelage corporel. Chez INFRASLIM Agdal, le drainage est proposé à 300 DH la séance.'
  }
];

export const FALLBACK_FAQS: FaqItem[] = [
  {
    id: 1,
    question: 'Le centre est-il vraiment réservé aux femmes ?',
    answer: 'Oui, entièrement. Le vestiaire, la salle de sport, les cabines de soin et toute l\'équipe. C\'est le principe du centre depuis le premier jour.'
  },
  {
    id: 2,
    question: 'Le diagnostic InBody est-il payant ?',
    answer: 'Non, il est 100% offert et sans engagement. Il permet d\'analyser précisément votre composition corporelle (masse grasse, masse musculaire, rétention d\'eau) avant de commencer votre cure.'
  },
  {
    id: 3,
    question: 'Combien de séances faut-il prévoir ?',
    answer: 'Dès la première séance, vous ressentez une sensation immédiate de légèreté et de bien-être. Pour des résultats visibles et durables sur la silhouette, nos programmes comportent généralement entre 5 et 10 séances.'
  },
  {
    id: 4,
    question: 'Faut-il prendre rendez-vous ?',
    answer: 'Oui, toutes nos séances et nos soins se font uniquement sur rendez-vous via WhatsApp ou par téléphone au 06 15 10 98 98, afin de vous garantir zéro attente et une intimité totale.'
  },
  {
    id: 5,
    question: 'Quels sont vos horaires ?',
    answer: 'Nous vous accueillons du lundi au samedi, de 08h00 à 20h00 sans interruption.'
  },
  {
    id: 6,
    question: 'Où se garer à Agdal ?',
    answer: 'Le centre se trouve au 43 Rue Oum Rabiâ, Appt. N°2 à Agdal. Le parking surveillé Kaïs se situe à seulement 240 mètres (3 minutes à pied).'
  }
];

export const FALLBACK_SETTINGS: GlobalSettings = {
  centerName: 'INFRASLIM',
  tagline: 'Centre Santé & Beauté 100% Femmes',
  address: '43 Rue Oum Rabiâ, Appt. N°2, Agdal, Rabat (Parking Kaïs à 240m)',
  phone: '+212 615 10 98 98',
  whatsapp: 'https://wa.me/212615109898?text=Bonjour%20INFRASLIM%2C%20je%20souhaite%20prendre%20rendez-vous.',
  hours: 'Lundi au Samedi : 08h00 – 20h00 (sur rendez-vous)',
  email: 'contact@infraslim.ma',
  instagram: 'https://instagram.com/infraslim.ma',
  facebook: 'https://facebook.com/infraslim.ma'
};

// ── FONCTIONS D'ACCÈS À L'API STRAPI AVEC FALLBACK AUTOMATIQUE ─────────
function resolveMediaUrl(url: string | undefined, fallback: string): string {
  if (!url) return fallback;
  return url.startsWith('/') ? `${STRAPI_URL}${url}` : url;
}

export async function getServices(): Promise<Service[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/services?populate=*`);
    if (!res.ok) return FALLBACK_SERVICES;
    const json = await res.json();
    if (!json.data || json.data.length === 0) return FALLBACK_SERVICES;
    return json.data.map((item: any) => {
      const slug = item.attributes?.slug || item.slug;
      const fallback = FALLBACK_SERVICES.find(s => s.slug === slug) || FALLBACK_SERVICES[0];
      const rawImage = item.attributes?.image?.data?.attributes?.url || item.image;
      return {
        id: item.id,
        slug,
        title: item.attributes?.title || item.title,
        subtitle: item.attributes?.subtitle || item.subtitle,
        category: item.attributes?.category || item.category,
        description: item.attributes?.description || item.description,
        image: resolveMediaUrl(rawImage, fallback.image),
        badge: item.attributes?.badge || item.badge,
        subservices: item.attributes?.subservices || item.subservices || [],
        benefits: item.attributes?.benefits || item.benefits || [],
        pricingOverview: item.attributes?.pricingOverview || item.pricingOverview || fallback.pricingOverview
      };
    });
  } catch {
    return FALLBACK_SERVICES;
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const services = await getServices();
  return services.find(s => s.slug === slug);
}

export async function getArticles(): Promise<Article[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/articles?populate=*`);
    if (!res.ok) return FALLBACK_ARTICLES;
    const json = await res.json();
    if (!json.data || json.data.length === 0) return FALLBACK_ARTICLES;
    return json.data.map((item: any) => {
      const slug = item.attributes?.slug || item.slug;
      const fallback = FALLBACK_ARTICLES.find(a => a.slug === slug) || FALLBACK_ARTICLES[0];
      const rawImage = item.attributes?.image?.data?.attributes?.url || item.image;
      return {
        id: item.id,
        slug,
        title: item.attributes?.title || item.title,
        category: item.attributes?.category || item.category,
        date: item.attributes?.date || item.date,
        readTime: item.attributes?.readTime || item.readTime,
        image: resolveMediaUrl(rawImage, fallback.image),
        excerpt: item.attributes?.excerpt || item.excerpt,
        content: item.attributes?.content || item.content
      };
    });
  } catch {
    return FALLBACK_ARTICLES;
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const articles = await getArticles();
  return articles.find(a => a.slug === slug);
}

export async function getFaqs(): Promise<FaqItem[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/faqs?sort=order:asc`);
    if (!res.ok) return FALLBACK_FAQS;
    const json = await res.json();
    if (!json.data || json.data.length === 0) return FALLBACK_FAQS;
    return json.data.map((item: any) => ({
      id: item.id,
      question: item.attributes?.question || item.question,
      answer: item.attributes?.answer || item.answer
    }));
  } catch {
    return FALLBACK_FAQS;
  }
}

export async function getGlobalSettings(): Promise<GlobalSettings> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/global-setting`);
    if (!res.ok) return FALLBACK_SETTINGS;
    const json = await res.json();
    return { ...FALLBACK_SETTINGS, ...(json.data?.attributes || {}) };
  } catch {
    return FALLBACK_SETTINGS;
  }
}
