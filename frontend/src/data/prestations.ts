export interface PrestationSection {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
  ordered?: string[];
}

export interface PrestationFAQ {
  q: string;
  a: string;
}

export interface PrestationData {
  category: string;
  categoryName: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  leadIntro: string;
  heroImage: string;
  priceSingle: string;
  pricePack?: string;
  priceNote?: string;
  sections: PrestationSection[];
  faq: PrestationFAQ[];
  related: { label: string; href: string }[];
  ctaText: string;
}

export const PRESTATIONS: PrestationData[] = [
  // =========================================================================
  // 1. SPORT NOUVELLE GÉNÉRATION
  // =========================================================================
  {
    category: 'sport-nouvelle-generation',
    categoryName: 'Sport Nouvelle Génération',
    slug: 'infrabike',
    metaTitle: 'InfraBike à Rabat : cardio infrarouge | INFRASLIM',
    metaDescription: "Brûlez jusqu'à 1 300 calories en 30 minutes sur l'InfraBike, à Agdal. Centre 100 % femmes, diagnostic InBody offert.",
    eyebrow: 'SPORT NOUVELLE GÉNÉRATION · INFRAROUGE & VACUUM',
    h1: 'InfraBike à Rabat, le cardio qui travaille en profondeur',
    leadIntro: "Vous pédalez déjà, mais le bas du corps ne bouge pas. Vous enchaînez les séances de cardio sans voir de différence sur les cuisses et les hanches. C'est exactement ce que l'InfraBike vient changer. L'InfraBike est un vélo semi-allongé installé dans une cabine à infrarouge : pendant que vous pédalez, la chaleur infrarouge agit sur le bas du corps et un système de pression négative stimule la circulation. Une séance dure 30 minutes et permet de brûler jusqu'à 1 300 calories.",
    heroImage: 'https://infraslim.ma/wp-content/uploads/2024/10/WhatsApp-Image-2024-09-12-at-12.02.48-1.jpeg',
    priceSingle: '300 DH',
    pricePack: '1 500 DH les 10 séances (150 DH / séance)',
    priceNote: 'Les packs sont valables toute l\'année.',
    sections: [
      {
        h2: "Pour qui est fait l'InfraBike ?",
        paragraphs: [
          "Pour vous si vous cherchez à perdre du poids sans passer des heures en salle, si la graisse s'installe sur les cuisses, les hanches ou les fesses, ou si vous ressentez les jambes lourdes en fin de journée.",
          "Il convient aussi après une grossesse, quand reprendre le sport intimide et qu'on veut un effort progressif et encadré. Vous êtes installée, assise, le dos soutenu, dans une cabine fermée à la taille."
        ]
      },
      {
        h2: "Comment se passe une séance d'InfraBike ?",
        paragraphs: [
          "Vous vous installez sur le vélo, jambes dans la cabine, buste à l'extérieur. La cabine se referme à la taille et la chaleur monte progressivement.",
          "Vous pédalez à votre rythme pendant 30 minutes. L'intensité est réglée avec vous, selon votre condition physique et ce que le diagnostic InBody a montré. Une coach reste disponible pendant toute la séance.",
          "Vous ressortez en ayant transpiré, sans courbatures le lendemain dans la plupart des cas."
        ]
      },
      {
        h2: "Quels sont les bénéfices de l'InfraBike ?",
        paragraphs: [
          "Les résultats dépendent de votre point de départ, de votre régularité et de votre hygiène de vie."
        ],
        bullets: [
          "Une dépense énergétique élevée sur une séance courte",
          "Un travail ciblé sur le bas du corps, là où la graisse s'installe le plus chez la femme",
          "Une stimulation de la circulation, qui aide à soulager la sensation de jambes lourdes",
          "Un effort à faible impact, qui ménage les genoux et le dos"
        ]
      },
      {
        h2: "Combien de séances d'InfraBike faut-il prévoir ?",
        paragraphs: [
          "Comptez deux à trois séances par semaine, et une cure de dix séances comme premier cycle.",
          "La séance coûte 300 DH. Le pack de dix séances est à 1 500 DH, soit 150 DH la séance. Les packs sont valables toute l'année."
        ]
      },
      {
        h2: "InfraBike ou tapis roulant infrarouge ?",
        paragraphs: [
          "Les deux utilisent la même technologie et coûtent le même prix. L'InfraBike se pratique assise, il convient mieux en cas de douleurs de dos ou de genoux. Le tapis roulant se pratique debout et sollicite davantage les fessiers.",
          "Le plus simple est d'essayer les deux. On en parle au moment du diagnostic."
        ]
      }
    ],
    faq: [
      { q: 'Faut-il être sportive pour commencer ?', a: "Non. L'intensité est réglée sur votre niveau. Beaucoup de nos clientes n'avaient pas fait de sport depuis des années." },
      { q: 'Que faut-il apporter ?', a: "Une tenue de sport et une bouteille d'eau." },
      { q: 'La chaleur est-elle supportable ?', a: "La cabine monte progressivement et reste réglable." },
      { q: 'Peut-on venir pendant ses règles ?', a: "Oui, sans difficulté." },
      { q: 'Le diagnostic InBody est-il obligatoire ?', a: "Non, mais il est offert et permet de régler l'intensité correctement." }
    ],
    related: [
      { label: 'Sport Nouvelle Génération', href: '/services/sport-nouvelle-generation' },
      { label: 'Tapis roulant infrarouge', href: '/services/sport-nouvelle-generation/tapis-roulant-infrarouge' },
      { label: 'Infra Roller', href: '/services/sport-nouvelle-generation/infra-roller' },
      { label: 'Pressothérapie', href: '/services/soins-amincissants/pressotherapie' },
      { label: 'Voir tous les tarifs', href: '/tarifs' }
    ],
    ctaText: 'Votre diagnostic InBody est offert.'
  },
  {
    category: 'sport-nouvelle-generation',
    categoryName: 'Sport Nouvelle Génération',
    slug: 'tapis-roulant-infrarouge',
    metaTitle: 'Tapis roulant infrarouge à Rabat | INFRASLIM',
    metaDescription: "Marchez en cabine infrarouge et vacuum à Agdal : jusqu'à 1 300 calories en 30 minutes. Centre 100 % femmes, 1 500 DH les dix séances.",
    eyebrow: 'SPORT NOUVELLE GÉNÉRATION · MARCHE VACUUM & INFRAROUGE',
    h1: 'Tapis roulant infrarouge à Rabat, marcher pour mincir',
    leadIntro: "Marcher est le geste le plus naturel qui soit. C'est aussi celui qu'on abandonne le plus vite quand il ne donne rien de visible. Le tapis roulant infrarouge est un tapis de marche installé dans une cabine fermée à la taille, qui combine chaleur infrarouge et pression négative. Vous marchez debout pendant 30 minutes, et la technologie fait le reste du travail sur le bas du corps.",
    heroImage: 'https://infraslim.ma/wp-content/uploads/2024/10/WhatsApp-Image-2024-09-12-at-11.52.14-1.jpeg',
    priceSingle: '300 DH',
    pricePack: '1 500 DH les 10 séances (150 DH / séance)',
    priceNote: 'Le pack reste valable toute l\'année.',
    sections: [
      {
        h2: "En quoi est-ce différent d'un tapis de salle classique ?",
        paragraphs: [
          "Sur un tapis ordinaire, vous dépensez des calories et c'est tout. Ici, trois choses s'ajoutent.",
          "La chaleur infrarouge fait travailler le corps en profondeur et élève la dépense pendant toute la séance. La pression négative crée une aspiration douce sur les jambes, les hanches et les fessiers, ce qui stimule la circulation précisément dans les zones difficiles. Et la marche, contrairement au vélo, sollicite la chaîne musculaire postérieure, donc les fessiers et l'arrière des cuisses."
        ]
      },
      {
        h2: "Pour qui est fait le tapis infrarouge ?",
        paragraphs: [
          "Pour vous si vous préférez marcher que pédaler, si vous voulez travailler les fessiers et l'arrière des cuisses, ou si vous cherchez une activité à intégrer facilement après le travail.",
          "C'est aussi le choix de celles qui restent assises toute la journée et qui veulent se remettre debout sans courir."
        ]
      },
      {
        h2: "Comment se déroule une séance ?",
        paragraphs: [
          "Vous montez sur le tapis, jambes dans la cabine, buste à l'extérieur. La cabine se referme à la taille.",
          "Vous marchez à votre allure, entre 30 et 45 minutes selon le programme défini avec la coach. La vitesse et l'inclinaison s'ajustent à tout moment. Ce n'est pas une course, c'est une marche soutenue dans un environnement chauffé."
        ]
      },
      {
        h2: "Quels résultats peut-on attendre ?",
        paragraphs: [
          "Une dépense énergétique élevée, un travail ciblé sur les fessiers et les jambes, et une stimulation de la circulation qui aide à soulager la sensation de jambes lourdes.",
          "Comme toujours, cela dépend de votre régularité et de votre alimentation. C'est pour cette raison que nous commençons par le diagnostic InBody, qui est offert."
        ]
      },
      {
        h2: "Combien coûte une séance ?",
        paragraphs: [
          "300 DH la séance, 1 500 DH les dix séances, soit 150 DH la séance. Le pack reste valable toute l'année.",
          "Deux à trois séances par semaine donnent le meilleur rythme."
        ]
      }
    ],
    faq: [
      { q: 'Faut-il avoir un bon niveau ?', a: "Non, vous marchez à votre allure. On part de là où vous en êtes." },
      { q: "Peut-on alterner avec l'InfraBike ?", a: "Oui, et beaucoup le font. Les deux sont au même tarif et peuvent se combiner dans un même pack." },
      { q: 'Que porter ?', a: "Une tenue de sport et des baskets." },
      { q: 'Transpire-t-on beaucoup ?', a: "Oui, c'est le principe de la cabine. Prévoyez de quoi vous changer." },
      { q: 'Y a-t-il un risque pour le dos ?', a: "La marche est à faible impact. Si vous avez des douleurs connues, dites-le nous, l'InfraBike en position assise sera peut-être plus indiqué." }
    ],
    related: [
      { label: 'Sport Nouvelle Génération', href: '/services/sport-nouvelle-generation' },
      { label: 'InfraBike', href: '/services/sport-nouvelle-generation/infrabike' },
      { label: 'Infra Roller', href: '/services/sport-nouvelle-generation/infra-roller' },
      { label: 'Drainage lymphatique', href: '/services/soins-amincissants/drainage-lymphatique' },
      { label: 'Voir tous les tarifs', href: '/tarifs' }
    ],
    ctaText: 'Votre diagnostic InBody est offert.'
  },
  {
    category: 'sport-nouvelle-generation',
    categoryName: 'Sport Nouvelle Génération',
    slug: 'infra-roller',
    metaTitle: 'Infra Roller à Rabat : cellulite et drainage | INFRASLIM',
    metaDescription: 'Massage mécanique et chaleur infrarouge sur la cellulite et les jambes lourdes, à Agdal. 300 DH la séance, 1 500 DH les dix.',
    eyebrow: 'SPORT NOUVELLE GÉNÉRATION · MASSAGE ROULEAUX INFRAROUGE',
    h1: 'Infra Roller à Rabat, contre la cellulite et les jambes lourdes',
    leadIntro: "La cellulite n'est pas une question de poids. Des femmes très minces en ont, d'autres plus rondes n'en ont pas. C'est une affaire de tissus, de circulation et d'hormones, et c'est pour ça que maigrir ne la fait pas disparaître. L'Infra Roller associe un massage mécanique par rouleaux à la chaleur infrarouge : les rouleaux travaillent les tissus en profondeur pendant que la chaleur améliore la souplesse de la peau. Une séance dure 30 minutes.",
    heroImage: 'https://infraslim.ma/wp-content/uploads/2024/10/WhatsApp-Image-2024-09-12-at-12.06.54.jpeg',
    priceSingle: '300 DH',
    pricePack: '1 500 DH les 10 séances (150 DH / séance)',
    priceNote: 'Le pack est valable toute l\'année.',
    sections: [
      {
        h2: "Pourquoi la cellulite résiste-t-elle au sport ?",
        paragraphs: [
          "Parce que le sport fait fondre la graisse mais ne défait pas les tissus.",
          "La peau d'orange vient de cellules graisseuses comprimées entre des cloisons de collagène, avec souvent une mauvaise circulation locale. Vous pouvez perdre du poids sans que l'aspect capitonné change, et c'est ce qui décourage beaucoup de femmes.",
          "Le travail mécanique agit précisément là : il mobilise les tissus, relance la circulation et aide à améliorer l'aspect de la peau."
        ]
      },
      {
        h2: "Pour qui est fait l'Infra Roller ?",
        paragraphs: [
          "Pour vous si vous avez de la peau d'orange sur les cuisses ou les fesses, si vous ressentez des jambes lourdes, ou si vous avez perdu du poids sans que l'aspect de la peau suive.",
          "C'est aussi le complément logique d'une séance de cardio : l'effort crée la dépense, le roller travaille les tissus. Beaucoup de nos clientes enchaînent les deux."
        ]
      },
      {
        h2: "Comment se passe une séance ?",
        paragraphs: [
          "Vous êtes allongée, la zone à travailler exposée. Les rouleaux passent sur la peau selon un mouvement réglé, pendant que la chaleur infrarouge agit en parallèle.",
          "La sensation est celle d'un massage appuyé, parfois intense sur les zones très marquées, jamais douloureux. L'intensité se règle avec vous."
        ]
      },
      {
        h2: "Combien de séances contre la cellulite ?",
        paragraphs: [
          "C'est un travail de fond. Comptez une cure de dix séances, à raison de deux séances par semaine, pour juger d'un résultat.",
          "300 DH la séance, 1 500 DH les dix, soit 150 DH la séance. Le pack est valable toute l'année.",
          "Pour un résultat plus net, nous associons souvent l'Infra Roller au VelaShape et à une activité cardio régulière."
        ]
      }
    ],
    faq: [
      { q: "L'Infra Roller fait-il maigrir ?", a: "Non, et il ne faut pas attendre ça de lui. Il travaille l'aspect de la peau et la circulation. La perte de poids vient de l'effort et de l'alimentation." },
      { q: 'Est-ce douloureux ?', a: "Non. Le massage est appuyé, l'intensité se règle pendant la séance." },
      { q: 'Y a-t-il des marques après ?', a: "Parfois une légère rougeur, qui part en quelques minutes." },
      { q: 'Peut-on le faire sur le ventre ?', a: "Oui, le ventre, les cuisses, les hanches et les fesses sont les zones les plus travaillées." },
      { q: 'Combien de temps dure une séance ?', a: "30 minutes." }
    ],
    related: [
      { label: 'Sport Nouvelle Génération', href: '/services/sport-nouvelle-generation' },
      { label: 'VelaShape', href: '/services/soins-amincissants/velashape' },
      { label: 'InfraBike', href: '/services/sport-nouvelle-generation/infrabike' },
      { label: 'Drainage lymphatique', href: '/services/soins-amincissants/drainage-lymphatique' },
      { label: 'Voir tous les tarifs', href: '/tarifs' }
    ],
    ctaText: 'Votre diagnostic InBody est offert.'
  },

  // =========================================================================
  // 2. SOINS AMINCISSANTS
  // =========================================================================
  {
    category: 'soins-amincissants',
    categoryName: 'Soins Amincissants',
    slug: 'velashape',
    metaTitle: 'VelaShape à Rabat : remodelage du corps | INFRASLIM',
    metaDescription: "Remodelage des zones résistantes et travail sur l'aspect de la peau à Agdal. 300 DH la séance, 2 000 DH les dix séances.",
    eyebrow: 'SOINS AMINCISSANTS · REMODELAGE CORPOREL',
    h1: 'VelaShape à Rabat, remodeler les zones qui résistent',
    leadIntro: "Il y a toujours une zone qui ne suit pas. Vous avez perdu du poids, le visage s'est affiné, les bras aussi, mais les hanches ou le ventre sont restés. Le VelaShape est un soin de remodelage corporel qui associe chaleur, aspiration et massage par rouleaux sur une zone ciblée. Il agit sur l'aspect de la peau et sur les volumes localisés, en cabine, dans notre centre d'Agdal.",
    heroImage: 'https://infraslim.ma/wp-content/uploads/2024/10/879A0428.jpg',
    priceSingle: '300 DH',
    pricePack: '2 000 DH les 10 séances (200 DH / séance)',
    priceNote: 'Le pack reste valable toute l\'année.',
    sections: [
      {
        h2: 'Sur quelles zones agit le VelaShape ?',
        paragraphs: [
          "Les zones les plus demandées sont le ventre, les hanches, la culotte de cheval et l'arrière des cuisses. Les bras et le dos sont possibles également.",
          "Le soin se travaille zone par zone, c'est ce qui le distingue d'une activité générale comme le cardio. On cible ce qui résiste au lieu de traiter l'ensemble."
        ]
      },
      {
        h2: 'Pour qui est fait ce soin ?',
        paragraphs: [
          "Pour vous si une zone précise ne bouge pas malgré vos efforts, si votre peau manque de fermeté après une perte de poids, ou si vous avez un aspect capitonné que le sport n'a pas corrigé.",
          "Ce n'est pas un soin pour perdre du poids. C'est un soin de remodelage, qui donne ses meilleurs résultats sur une femme déjà active."
        ]
      },
      {
        h2: 'Comment se déroule une séance de VelaShape ?',
        paragraphs: [
          "Vous êtes allongée, la zone découverte. La tête de l'appareil est passée lentement sur la peau, en mouvements réguliers.",
          "Vous ressentez une chaleur et une aspiration, comme un massage profond. Ce n'est pas douloureux. La séance dure entre 30 et 45 minutes selon la taille de la zone."
        ]
      },
      {
        h2: 'Combien de séances de VelaShape faut-il ?',
        paragraphs: [
          "C'est un soin qui demande de la répétition. Comptez une cure de dix séances, à raison d'une à deux par semaine.",
          "300 DH la séance, 2 000 DH les dix séances, soit 200 DH la séance. Le pack reste valable toute l'année."
        ]
      },
      {
        h2: 'VelaShape ou Infra Roller, quelle différence ?',
        paragraphs: [
          "Les deux travaillent mécaniquement les tissus, mais pas de la même façon.",
          "L'Infra Roller est un massage par rouleaux associé à la chaleur infrarouge, souvent pris après une séance de sport. Le VelaShape combine chaleur, aspiration et rouleaux sur une zone ciblée, avec un travail plus concentré sur le remodelage.",
          "Dans un programme complet, les deux se combinent très bien."
        ]
      }
    ],
    faq: [
      { q: 'Le VelaShape fait-il perdre du poids ?', a: "Non. Il remodèle et travaille l'aspect de la peau. La perte de poids vient de l'effort et de l'alimentation." },
      { q: 'Y a-t-il des contre-indications ?', a: "Parlez-nous de votre situation avant la première séance, notamment en cas de grossesse ou de problème circulatoire connu." },
      { q: 'Peut-on voir une différence dès la première séance ?', a: "Non. Jugez après une cure complète, pas après une séance." },
      { q: 'Faut-il une tenue particulière ?', a: "Non, tout est prévu sur place." },
      { q: "Peut-on l'associer au sport le même jour ?", a: "Oui, et c'est souvent ce que nous recommandons." }
    ],
    related: [
      { label: 'Soins Amincissants', href: '/services/soins-amincissants' },
      { label: 'Infra Roller', href: '/services/sport-nouvelle-generation/infra-roller' },
      { label: 'Madérothérapie', href: '/services/soins-amincissants/maderotherapie' },
      { label: 'InfraBike', href: '/services/sport-nouvelle-generation/infrabike' },
      { label: 'Voir tous les tarifs', href: '/tarifs' }
    ],
    ctaText: 'Votre diagnostic InBody est offert.'
  },
  {
    category: 'soins-amincissants',
    categoryName: 'Soins Amincissants',
    slug: 'maderotherapie',
    metaTitle: 'Madérothérapie à Rabat, massage aux outils de bois | INFRASLIM',
    metaDescription: 'Massage manuel aux outils de bois par une praticienne, à Agdal. Fermeté, remodelage et drainage. 600 DH la séance, 5 000 DH les dix.',
    eyebrow: 'SOINS AMINCISSANTS · SOIN MANUEL EXPERTE',
    h1: 'Madérothérapie à Rabat, le massage manuel aux outils de bois',
    leadIntro: "Toutes les techniques d'amincissement ne passent pas par une machine. La madérothérapie est un soin entièrement manuel, et c'est précisément ce qui fait sa force. C'est un massage pratiqué avec des outils de bois de formes différentes, réalisé de bout en bout par une praticienne. Les mouvements travaillent les tissus en profondeur, mobilisent les zones de graisse localisée et stimulent la circulation.",
    heroImage: 'https://infraslim.ma/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-11-at-13.55.13.jpeg',
    priceSingle: '600 DH',
    pricePack: '5 000 DH les 10 séances (500 DH / séance)',
    priceNote: 'Pack valable toute l\'année, paiement en plusieurs fois possible.',
    sections: [
      {
        h2: "Pourquoi un soin manuel plutôt qu'un appareil ?",
        paragraphs: [
          "Parce que la main sent ce qu'une machine ne détecte pas.",
          "Une praticienne adapte la pression en temps réel, insiste là où les tissus sont les plus denses, allège là où la zone est sensible. Elle suit le trajet lymphatique au lieu d'appliquer un programme uniforme.",
          "C'est un soin plus long, plus impliquant pour celle qui le pratique, et c'est ce qui explique son tarif."
        ]
      },
      {
        h2: 'Pour qui est faite la madérothérapie ?',
        paragraphs: [
          "Pour vous si votre peau manque de fermeté après une perte de poids ou une grossesse, si vous avez de la cellulite installée, ou si vous préférez un soin manuel à un appareil.",
          "C'est aussi un bon choix si vous cherchez un soin qui travaille le corps et détend en même temps. Beaucoup de nos clientes en ressortent autant relâchées qu'après un massage classique."
        ]
      },
      {
        h2: 'Comment se passe une séance ?',
        paragraphs: [
          "Vous êtes allongée. La praticienne commence par un échauffement manuel, puis utilise successivement plusieurs outils de bois, chacun adapté à une zone et à un mouvement.",
          "La pression est soutenue. Sur une zone très marquée, la sensation peut être intense les premières fois, elle s'atténue au fil des séances à mesure que les tissus s'assouplissent. Dites-le si c'est trop, l'intensité se règle.",
          "La séance dure environ une heure."
        ]
      },
      {
        h2: 'Combien de séances de madérothérapie ?',
        paragraphs: [
          "Une cure de dix séances, à raison d'une à deux par semaine, est le format de référence.",
          "600 DH la séance, 5 000 DH les dix séances, soit 500 DH la séance. Le pack est valable toute l'année et peut se régler en plusieurs fois."
        ]
      },
      {
        h2: 'Madérothérapie ou drainage lymphatique ?',
        paragraphs: [
          "Les deux sont des soins manuels à 600 DH, mais ils ne visent pas la même chose.",
          "La madérothérapie travaille les tissus en profondeur : fermeté, cellulite, remodelage. Le drainage lymphatique est plus doux et vise la circulation et la rétention d'eau.",
          "Si vos jambes gonflent, c'est le drainage. Si votre peau manque de tenue, c'est la madérothérapie."
        ]
      }
    ],
    faq: [
      { q: 'Est-ce douloureux ?', a: "Non, mais c'est appuyé. L'intensité se règle avec la praticienne." },
      { q: 'Y a-t-il des bleus après ?', a: "Rarement, et légers. Dites-nous si votre peau marque facilement." },
      { q: 'Combien de temps dure une séance ?', a: "Environ une heure." },
      { q: 'Peut-on la faire sur le ventre après une grossesse ?', a: "Oui, en respectant un délai après l'accouchement. Parlez-en à votre médecin, nous adapterons." },
      { q: 'Les outils sont-ils nettoyés entre chaque cliente ?', a: "Oui, systématiquement." }
    ],
    related: [
      { label: 'Soins Amincissants', href: '/services/soins-amincissants' },
      { label: 'Drainage lymphatique', href: '/services/soins-amincissants/drainage-lymphatique' },
      { label: 'VelaShape', href: '/services/soins-amincissants/velashape' },
      { label: 'Sport Nouvelle Génération', href: '/services/sport-nouvelle-generation' },
      { label: 'Voir tous les tarifs', href: '/tarifs' }
    ],
    ctaText: 'Votre diagnostic InBody est offert.'
  },
  {
    category: 'soins-amincissants',
    categoryName: 'Soins Amincissants',
    slug: 'drainage-lymphatique',
    metaTitle: 'Drainage lymphatique manuel à Rabat | INFRASLIM',
    metaDescription: "Drainage manuel par une praticienne à Agdal, contre la rétention d'eau et les jambes lourdes. 600 DH la séance, 5 000 DH les dix.",
    eyebrow: 'SOINS AMINCISSANTS · RÉTENTION D\'EAU & CIRCULATION',
    h1: 'Drainage lymphatique manuel à Rabat',
    leadIntro: "Le soir, vos chevilles ont gonflé. Vos chaussures serrent plus qu'au réveil. Votre ventre est plus rond qu'au lever alors que vous n'avez rien mangé de particulier. Ce n'est pas de la graisse, c'est de l'eau. Le drainage lymphatique est un massage manuel doux qui suit le trajet de la lymphe pour aider le corps à évacuer les liquides retenus, réalisé par une praticienne dans notre centre d'Agdal.",
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85',
    priceSingle: '600 DH',
    pricePack: '5 000 DH les 10 séances (500 DH / séance)',
    priceNote: 'Pack valable toute l\'année.',
    sections: [
      {
        h2: "Qu'est-ce que la rétention d'eau exactement ?",
        paragraphs: [
          "La lymphe est un liquide qui circule dans le corps et participe à l'évacuation des déchets. Contrairement au sang, elle n'a pas de pompe : elle circule grâce aux mouvements du corps et à la contraction musculaire.",
          "Quand on reste assise toute la journée, qu'il fait chaud, ou lors de certaines périodes du cycle, cette circulation ralentit. Les liquides stagnent, souvent dans les jambes et le ventre. C'est ce qui donne cette sensation de lourdeur et de gonflement."
        ]
      },
      {
        h2: 'Pour qui est fait le drainage lymphatique ?',
        paragraphs: [
          "Pour vous si vous avez les jambes lourdes en fin de journée, si vos chevilles ou vos doigts gonflent, si votre ventre se ballonne le soir, ou si vous restez assise ou debout longtemps au travail.",
          "C'est aussi un soin très demandé en été, quand la chaleur accentue la rétention."
        ]
      },
      {
        h2: 'Comment se déroule une séance ?',
        paragraphs: [
          "Vous êtes allongée. La praticienne effectue des mouvements lents, doux et rythmés, en remontant des extrémités vers le cœur, en suivant le trajet des ganglions.",
          "C'est un soin très différent d'un massage tonique : la pression est légère, presque effleurée par moments. C'est la précision du geste qui compte, pas la force.",
          "La séance dure environ une heure. Beaucoup de clientes s'endorment."
        ]
      },
      {
        h2: 'Quels effets ressent-on ?',
        paragraphs: [
          "Une sensation de légèreté dans les jambes, souvent dès la fin de la séance. Une envie d'uriner plus fréquente dans les heures qui suivent, qui est normale et attendue.",
          "Sur une cure, nos clientes rapportent le plus souvent un confort durable et une impression de dégonflement, particulièrement au niveau des jambes et du ventre."
        ]
      },
      {
        h2: 'Combien de séances faut-il ?',
        paragraphs: [
          "Pour un effet installé, comptez une cure de dix séances, à raison d'une à deux par semaine. En entretien, une séance par mois suffit souvent.",
          "600 DH la séance, 5 000 DH les dix séances, soit 500 DH la séance. Pack valable toute l'année."
        ]
      },
      {
        h2: 'Drainage manuel ou pressothérapie ?',
        paragraphs: [
          "Les deux agissent sur la circulation, mais la pressothérapie est un appareil : des bottes gonflables exercent une compression séquentielle. Elle est efficace, confortable, et coûte 300 DH la séance.",
          "Le drainage manuel est plus précis et plus complet, parce qu'une praticienne suit le trajet lymphatique et adapte la pression. Il coûte 600 DH.",
          "Beaucoup de clientes alternent les deux."
        ]
      }
    ],
    faq: [
      { q: 'Est-ce douloureux ?', a: "Non, c'est l'un des soins les plus doux du centre." },
      { q: 'Faut-il boire après ?', a: "Oui, buvez normalement dans la journée pour accompagner l'élimination." },
      { q: 'Peut-on en faire pendant les règles ?', a: "Oui, et c'est souvent le moment où il soulage le plus." },
      { q: 'Et pendant une grossesse ?', a: "Demandé l'avis de votre médecin. Nous adapterons si c'est autorisé." },
      { q: 'Le drainage fait-il maigrir ?', a: "Il fait dégonfler, ce qui n'est pas la même chose. La silhouette change, mais la masse grasse ne diminue pas d'elle-même." }
    ],
    related: [
      { label: 'Soins Amincissants', href: '/services/soins-amincissants' },
      { label: 'Pressothérapie', href: '/services/soins-amincissants/pressotherapie' },
      { label: 'Madérothérapie', href: '/services/soins-amincissants/maderotherapie' },
      { label: 'Voir tous les tarifs', href: '/tarifs' }
    ],
    ctaText: 'Votre diagnostic InBody est offert : il distingue précisément la masse grasse de la rétention d\'eau.'
  },
  {
    category: 'soins-amincissants',
    categoryName: 'Soins Amincissants',
    slug: 'pressotherapie',
    metaTitle: 'Pressothérapie à Rabat : jambes lourdes | INFRASLIM',
    metaDescription: "Compression séquentielle contre les jambes lourdes et la rétention d'eau, à Agdal. 300 DH la séance, 1 500 DH les dix séances.",
    eyebrow: 'SOINS AMINCISSANTS · COMPRESSION SÉQUENTIELLE',
    h1: 'Pressothérapie à Rabat, contre les jambes lourdes',
    leadIntro: "Vous passez la journée assise au bureau ou debout derrière un comptoir. Le soir, vos jambes sont lourdes, vos chevilles ont gonflé, et vous n'avez qu'une envie : les surélever. La pressothérapie est un soin de compression séquentielle : vous enfilez des bottes gonflables qui se remplissent d'air par zones successives, des pieds vers les cuisses, pour reproduire l'action naturelle du retour veineux et lymphatique.",
    heroImage: 'https://infraslim.ma/wp-content/uploads/2024/10/Sequence-04.00_00_33_01.Still001.jpg',
    priceSingle: '300 DH',
    pricePack: '1 500 DH les 10 séances (150 DH / séance)',
    priceNote: 'Pack valable toute l\'année.',
    sections: [
      {
        h2: 'Comment ça marche ?',
        paragraphs: [
          "Les bottes sont divisées en compartiments. L'air gonfle d'abord celui des pieds, puis des mollets, puis des cuisses, dans un ordre précis, avant de se relâcher.",
          "Cette vague de compression pousse les liquides vers le haut du corps, là où le système lymphatique peut les évacuer. C'est mécanique, confortable, et cela ne demande aucun effort de votre part."
        ]
      },
      {
        h2: 'Pour qui est faite la pressothérapie ?',
        paragraphs: [
          "Pour vous si vous avez les jambes lourdes, si vos chevilles gonflent en fin de journée, si vous restez longtemps dans la même position, ou si vous voyagez souvent.",
          "C'est aussi un excellent soin de récupération après une séance de sport, et un allié en été, quand la chaleur ralentit la circulation."
        ]
      },
      {
        h2: 'Comment se passe une séance ?',
        paragraphs: [
          "Vous êtes installée confortablement, allongée ou semi-allongée. Vous enfilez les bottes, le programme démarre, et vous n'avez plus rien à faire.",
          "La séance dure environ 30 minutes. La pression est réglable : elle doit être ferme et agréable, jamais inconfortable.",
          "C'est l'un des rares soins du centre où l'on peut tout simplement fermer les yeux."
        ]
      },
      {
        h2: 'Quels effets attendre ?',
        paragraphs: [
          "Une sensation de légèreté immédiate dans les jambes, qui est l'effet le plus rapporté dès la première séance.",
          "Sur une cure, un confort plus durable, surtout si vous êtes soumise à de la station debout prolongée ou à la chaleur."
        ]
      },
      {
        h2: 'Combien de séances et à quel prix ?',
        paragraphs: [
          "En cure, une à deux séances par semaine pendant cinq semaines. En entretien, une séance toutes les deux semaines.",
          "300 DH la séance, 1 500 DH les dix séances, soit 150 DH la séance. Pack valable toute l'année.",
          "C'est l'un des soins les plus accessibles du centre, et l'un de ceux dont l'effet se ressent le plus vite."
        ]
      }
    ],
    faq: [
      { q: 'Est-ce agréable ?', a: "Oui, la plupart des clientes trouvent la séance relaxante." },
      { q: 'Combien de temps dure une séance ?', a: "Environ 30 minutes." },
      { q: 'Peut-on la faire après le sport ?', a: "Oui, c'est même une excellente récupération." },
      { q: 'Y a-t-il des contre-indications ?', a: "Signalez-nous tout problème veineux connu, une phlébite récente ou une grossesse avant la première séance." },
      { q: 'Faut-il se déshabiller ?', a: "Non, les bottes se mettent par-dessus une tenue légère." }
    ],
    related: [
      { label: 'Soins Amincissants', href: '/services/soins-amincissants' },
      { label: 'Drainage lymphatique', href: '/services/soins-amincissants/drainage-lymphatique' },
      { label: 'InfraBike', href: '/services/sport-nouvelle-generation/infrabike' },
      { label: 'Voir tous les tarifs', href: '/tarifs' }
    ],
    ctaText: 'Votre diagnostic InBody est offert.'
  },

  // =========================================================================
  // 3. SOINS DU VISAGE
  // =========================================================================
  {
    category: 'soins-visage',
    categoryName: 'Soins du Visage',
    slug: 'hydrafacial',
    metaTitle: 'Hydrafacial à Rabat : éclat et hydratation | INFRASLIM',
    metaDescription: 'Nettoyage, exfoliation et hydratation en une séance à Agdal, Rabat. Sans éviction sociale. 400 DH le soin, institut 100 % femmes.',
    eyebrow: 'SOINS DU VISAGE · ÉCLAT & HYDRATATION',
    h1: 'Hydrafacial à Rabat, le soin éclat sans éviction sociale',
    leadIntro: "Teint terne, pores visibles, peau qui tire ou qui brille selon les zones. Ce n'est pas un problème de peau grave, c'est une peau qui demande un vrai nettoyage. L'Hydrafacial est un soin du visage qui enchaîne nettoyage, exfoliation, extraction des impuretés et hydratation en une seule séance, grâce à un embout qui aspire et diffuse des sérums. Vous ressortez avec un teint net, immédiatement.",
    heroImage: 'https://infraslim.ma/wp-content/uploads/2024/10/WhatsApp-Image-2024-09-26-at-14.13.21-2-1.jpeg',
    priceSingle: '400 DH le soin',
    priceNote: 'Les soins du visage se prennent à la séance.',
    sections: [
      {
        h2: 'Pourquoi ce soin est-il si demandé ?',
        paragraphs: [
          "Parce qu'il donne un résultat visible tout de suite, sans rougeurs et sans avoir à se cacher pendant trois jours.",
          "C'est ce qu'on appelle un soin sans éviction sociale : vous pouvez enchaîner avec un déjeuner, un rendez-vous ou une soirée. C'est ce qui en fait le soin le plus choisi avant un événement."
        ]
      },
      {
        h2: 'Les étapes du soin',
        paragraphs: [
          "L'ensemble dure entre 30 et 45 minutes."
        ],
        ordered: [
          "Nettoyage et exfoliation douce, qui retire les cellules mortes de surface",
          "Extraction des impuretés et des points noirs, par aspiration, sans pression des doigts",
          "Hydratation par diffusion de sérums adaptés à votre peau"
        ]
      },
      {
        h2: 'Pour quel type de peau ?',
        paragraphs: [
          "Pour quasiment toutes. C'est l'un des rares soins qui convient aussi bien aux peaux grasses, qu'aux peaux mixtes, sèches ou sensibles, parce que l'intensité et les sérums s'adaptent.",
          "Il est particulièrement indiqué si vous avez le teint terne, des pores dilatés, des points noirs, ou une peau déshydratée malgré vos crèmes."
        ]
      },
      {
        h2: 'À quelle fréquence faire un Hydrafacial ?',
        paragraphs: [
          "Une séance toutes les quatre à six semaines permet de maintenir le résultat. C'est un soin d'entretien, pas un traitement.",
          "400 DH le soin. Les soins du visage se prennent à la séance, il n'y a pas de pack."
        ]
      },
      {
        h2: 'Hydrafacial ou Carbon Peel ?',
        paragraphs: [
          "L'Hydrafacial nettoie, extrait et hydrate. Il vise l'éclat et le confort.",
          "Le Carbon Peel travaille davantage le grain de peau et l'aspect des pores, avec un effet plus marqué sur les peaux grasses.",
          "Si votre peau est déshydratée et terne, choisissez l'Hydrafacial. Si elle brille et que les pores vous gênent, le Carbon Peel sera plus adapté."
        ]
      }
    ],
    faq: [
      { q: 'Y a-t-il des rougeurs après ?', a: "Non, c'est précisément l'intérêt de ce soin." },
      { q: 'Peut-on le faire avant un mariage ?', a: "Oui, idéalement deux à trois jours avant." },
      { q: 'Est-ce douloureux ?', a: "Non. L'extraction se fait par aspiration, pas par pression." },
      { q: 'Peut-on venir maquillée ?', a: "Oui, le démaquillage fait partie du soin." },
      { q: 'Faut-il une protection solaire après ?', a: "Oui, comme après tout soin du visage, et toute l'année." }
    ],
    related: [
      { label: 'Soins du Visage', href: '/services/soins-visage' },
      { label: 'Carbon Peel', href: '/services/soins-visage/carbon-peel' },
      { label: 'Microneedling', href: '/services/soins-visage/microneedling' },
      { label: 'Soin anti-acné', href: '/services/soins-visage/soin-anti-acne' },
      { label: 'Voir tous les tarifs', href: '/tarifs' }
    ],
    ctaText: 'Prenez rendez-vous sur WhatsApp au 06 15 10 98 98.'
  },
  {
    category: 'soins-visage',
    categoryName: 'Soins du Visage',
    slug: 'microneedling',
    metaTitle: "Microneedling à Rabat : cicatrices d'acné | INFRASLIM",
    metaDescription: "Stimulation de la peau contre les cicatrices d'acné et le relief, à Agdal. 450 DH le soin, institut 100 % femmes.",
    eyebrow: 'SOINS DU VISAGE · RÉGÉNÉRATION & COLLAGÈNE',
    h1: 'Microneedling à Rabat, contre les cicatrices et le relief',
    leadIntro: "L'acné est partie depuis longtemps, mais elle a laissé des marques. Des creux, un relief irrégulier, une peau qui accroche la lumière. Les crèmes n'y changent rien, parce que le problème n'est pas en surface. Le microneedling consiste à créer de micro-perforations contrôlées dans la peau à l'aide de fines aiguilles, déclenchant le processus naturel de réparation et la production de collagène.",
    heroImage: 'https://infraslim.ma/wp-content/uploads/2024/10/Sequence-04.00_00_25_19.Still003.jpg',
    priceSingle: '450 DH le soin',
    priceNote: 'Les soins du visage se prennent à la séance.',
    sections: [
      {
        h2: 'Comment ça agit sur les cicatrices ?',
        paragraphs: [
          "Une cicatrice en creux est une zone où le collagène manque. En stimulant la peau de façon contrôlée, on lui demande d'en reproduire.",
          "Le résultat n'est pas immédiat : il se construit sur plusieurs semaines après chaque séance, à mesure que la peau se régénère. C'est un soin qui demande de la patience et de la répétition."
        ]
      },
      {
        h2: 'Pour qui est fait le microneedling ?',
        paragraphs: [
          "Pour vous si vous avez des cicatrices d'acné, un relief irrégulier, des pores dilatés, ou une peau qui manque de densité.",
          "Il agit aussi sur les ridules et la fermeté, c'est pourquoi il entre souvent dans un protocole anti-âge."
        ]
      },
      {
        h2: 'Comment se déroule une séance ?',
        paragraphs: [
          "La peau est nettoyée, puis une crème anesthésiante est appliquée et laissée poser. Le soin lui-même dure une vingtaine de minutes. Un sérum est appliqué pour terminer.",
          "La sensation est celle de picotements. Avec l'anesthésiant, c'est largement supportable.",
          "Comptez environ une heure sur place avec la pose de la crème."
        ]
      },
      {
        h2: 'Y a-t-il des rougeurs après ?',
        paragraphs: [
          "Oui, et il faut le savoir avant de réserver. La peau est rouge, comme un coup de soleil, pendant quelques heures à 24 ou 48 heures selon l'intensité.",
          "C'est pour cette raison qu'on ne programme pas un microneedling la veille d'un événement. Prévoyez-le plutôt en début de semaine, ou un vendredi si vous avez le week-end devant vous."
        ]
      },
      {
        h2: 'Combien de séances faut-il ?',
        paragraphs: [
          "Comptez une série de trois à six séances espacées de trois à quatre semaines, selon l'état de la peau. Nous vous donnons le rythme précis au premier rendez-vous.",
          "450 DH le soin. Les soins du visage se prennent à la séance."
        ]
      }
    ],
    faq: [
      { q: 'Est-ce douloureux ?', a: "La crème anesthésiante rend le soin supportable. Il reste des picotements." },
      { q: 'Combien de temps les rougeurs durent-elles ?', a: "De quelques heures à 48 heures." },
      { q: 'Peut-on se maquiller après ?', a: "Attendez 24 heures." },
      { q: 'Peut-on le faire en été ?', a: "Oui, à condition d'éviter strictement le soleil et d'utiliser une protection solaire." },
      { q: 'Convient-il aux peaux foncées ?', a: "Oui, le microneedling est mécanique et non lumineux, il présente moins de risque de tache que certaines technologies." },
      { q: "Peut-on l'associer à un autre soin ?", a: "Oui, mais pas le même jour. Espacez d'au moins une semaine." }
    ],
    related: [
      { label: 'Soins du Visage', href: '/services/soins-visage' },
      { label: 'Soin anti-acné', href: '/services/soins-visage/soin-anti-acne' },
      { label: 'Hydrafacial', href: '/services/soins-visage/hydrafacial' },
      { label: 'Soin anti-âge', href: '/services/soins-visage/soin-anti-age' },
      { label: 'Voir tous les tarifs', href: '/tarifs' }
    ],
    ctaText: 'Prenez rendez-vous sur WhatsApp au 06 15 10 98 98.'
  },
  {
    category: 'soins-visage',
    categoryName: 'Soins du Visage',
    slug: 'carbon-peel',
    metaTitle: 'Carbon Peel à Rabat : grain de peau et pores | INFRASLIM',
    metaDescription: "Soin au charbon contre les pores dilatés et l'excès de sébum, à Agdal. 400 DH le soin, institut 100 % femmes.",
    eyebrow: 'SOINS DU VISAGE · CHARBON ACTIF & LASER',
    h1: 'Carbon Peel à Rabat, pour un grain de peau affiné',
    leadIntro: "Votre peau brille dès le milieu de la journée. Les pores se voient sur les ailes du nez et les joues. Le maquillage ne tient pas et marque le relief. Le Carbon Peel combine l'application d'une fine couche de charbon actif et un passage au laser : le charbon pénètre dans les pores, le laser le cible, et l'ensemble est éliminé avec les impuretés qu'il a captées.",
    heroImage: 'https://infraslim.ma/wp-content/uploads/2024/10/infraslim-page-dacceuil-02-scaled.jpg',
    priceSingle: '400 DH le soin',
    priceNote: 'Soin en cabine de 30 minutes.',
    sections: [
      {
        h2: 'Pourquoi le charbon ?',
        paragraphs: [
          "Le charbon actif a une forte capacité d'absorption. Appliqué sur la peau, il s'infiltre dans les pores et capte le sébum et les impuretés.",
          "Le passage du laser cible ensuite spécifiquement ces particules de charbon. C'est cette combinaison qui permet de nettoyer en profondeur et de travailler l'aspect du grain de peau."
        ]
      },
      {
        h2: 'Pour quel type de peau ?',
        paragraphs: [
          "Avant tout pour les peaux mixtes à grasses, celles qui brillent, qui marquent les pores, ou qui font des points noirs récurrents.",
          "Il convient aussi aux peaux normales qui cherchent un effet de lissage ponctuel du grain.",
          "Si votre peau est sèche ou très sensible, l'Hydrafacial sera plus adapté."
        ]
      },
      {
        h2: 'Comment se passe une séance ?',
        paragraphs: [
          "La peau est nettoyée, puis le charbon est appliqué en couche fine et laissé sécher quelques minutes. Le laser passe ensuite sur l'ensemble du visage.",
          "Vous ressentez une sensation de chaleur et de légers picotements, avec un bruit sec caractéristique à chaque impulsion. Ce n'est pas douloureux.",
          "La séance dure environ 30 minutes."
        ]
      },
      {
        h2: 'Quel résultat et en combien de séances ?',
        paragraphs: [
          "Un effet net dès la première séance sur la propreté de la peau et la luminosité.",
          "Pour un travail de fond sur les pores et le sébum, comptez une série de quatre à six séances espacées de deux à trois semaines.",
          "400 DH le soin."
        ]
      }
    ],
    faq: [
      { q: 'Y a-t-il des rougeurs après ?', a: "Une légère rougeur possible pendant quelques heures, rarement plus." },
      { q: 'Peut-on se maquiller le soir même ?', a: "Mieux vaut attendre le lendemain." },
      { q: 'Est-ce adapté aux peaux foncées ?', a: "Nous vérifions votre phototype lors du premier rendez-vous avant de régler l'appareil." },
      { q: 'Peut-on le faire avant un événement ?', a: "Oui, en prévoyant deux jours de marge." },
      { q: 'Faut-il éviter le soleil après ?', a: "Oui, et appliquer une protection solaire." }
    ],
    related: [
      { label: 'Soins du Visage', href: '/services/soins-visage' },
      { label: 'Hydrafacial', href: '/services/soins-visage/hydrafacial' },
      { label: 'Microneedling', href: '/services/soins-visage/microneedling' },
      { label: 'Soin anti-acné', href: '/services/soins-visage/soin-anti-acne' },
      { label: 'Voir tous les tarifs', href: '/tarifs' }
    ],
    ctaText: 'Prenez rendez-vous sur WhatsApp au 06 15 10 98 98.'
  },
  {
    category: 'soins-visage',
    categoryName: 'Soins du Visage',
    slug: 'kobido',
    metaTitle: 'Massage Kobido à Rabat, lifting japonais | INFRASLIM',
    metaDescription: 'Massage facial japonais sans appareil ni produit, à Agdal. Tonus des traits et détente profonde. 400 DH le soin.',
    eyebrow: 'SOINS DU VISAGE · MASSAGE FACIAL JAPONAIS',
    h1: 'Massage Kobido à Rabat, le soin du visage sans appareil',
    leadIntro: "On pense souvent qu'un soin du visage efficace demande une machine. Le Kobido prouve le contraire depuis des siècles. C'est un massage facial japonais traditionnel, réalisé uniquement à la main, qui travaille les muscles du visage, du cou et du décolleté par une succession de mouvements rapides et de pressions précises.",
    heroImage: 'https://infraslim.ma/wp-content/uploads/2024/10/879A0532.jpg',
    priceSingle: '400 DH le soin',
    priceNote: 'Séance de 45 min à 1 heure.',
    sections: [
      {
        h2: 'Pourquoi masser les muscles du visage ?',
        paragraphs: [
          "Parce que le visage compte une cinquantaine de muscles, et qu'ils se contractent comme les autres.",
          "La mâchoire serrée, le front plissé devant un écran, les tensions accumulées dans le cou : tout cela se lit sur les traits. Un visage tendu paraît fatigué, même après une bonne nuit.",
          "Le Kobido relâche ces tensions et stimule la circulation. C'est pour cette raison qu'on le surnomme parfois le lifting japonais, même s'il ne s'agit évidemment pas d'un acte de chirurgie."
        ]
      },
      {
        h2: 'Pour qui est fait le Kobido ?',
        paragraphs: [
          "Pour vous si vos traits sont tirés, si vous avez le teint fatigué, si vous serrez la mâchoire, ou si vous cherchez un soin du visage qui détend autant qu'il travaille.",
          "C'est aussi un bon choix si votre peau est sensible et supporte mal les appareils ou les actifs puissants. Le Kobido n'utilise ni machine, ni acide, ni laser."
        ]
      },
      {
        h2: 'Comment se déroule une séance ?',
        paragraphs: [
          "Vous êtes allongée. La praticienne travaille le visage, le cou et le décolleté par une alternance de mouvements très rapides, de lissages lents et de pressions sur des points précis.",
          "Le rythme surprend au début, puis on se laisse porter. Beaucoup de clientes s'endorment.",
          "La séance dure environ 45 minutes à une heure."
        ]
      },
      {
        h2: 'Quel résultat et à quelle fréquence ?',
        paragraphs: [
          "Un visage visiblement détendu en sortant, des traits reposés et un teint plus lumineux par l'effet sur la circulation.",
          "En entretien, une séance par mois. En cure, une séance par semaine pendant quatre à six semaines pour un effet plus installé.",
          "400 DH le soin."
        ]
      }
    ],
    faq: [
      { q: 'Est-ce douloureux ?', a: "Non, c'est l'un des soins les plus agréables du centre." },
      { q: 'Y a-t-il des rougeurs après ?', a: "Non, aucune." },
      { q: 'Peut-on le faire avant une soirée ?', a: "Oui, c'est même idéal, le teint est lumineux en sortant." },
      { q: 'Convient-il aux peaux sensibles ?', a: "Oui, particulièrement. Il n'utilise aucun actif ni appareil." },
      { q: "Peut-on l'associer à un autre soin ?", a: "Oui, il se combine bien avec un Hydrafacial, en le faisant après." }
    ],
    related: [
      { label: 'Soins du Visage', href: '/services/soins-visage' },
      { label: 'Hydrafacial', href: '/services/soins-visage/hydrafacial' },
      { label: 'Soin anti-âge', href: '/services/soins-visage/soin-anti-age' },
      { label: 'Hammam Traditionnel', href: '/services/hammam' },
      { label: 'Voir tous les tarifs', href: '/tarifs' }
    ],
    ctaText: 'Prenez rendez-vous sur WhatsApp au 06 15 10 98 98.'
  },
  {
    category: 'soins-visage',
    categoryName: 'Soins du Visage',
    slug: 'soin-anti-age',
    metaTitle: 'Soin anti-âge à Rabat, protocole ciblé | INFRASLIM',
    metaDescription: 'Protocole complet contre les rides et le manque de fermeté, à Agdal. 800 DH le soin, institut 100 % femmes.',
    eyebrow: 'SOINS DU VISAGE · PROTOCOLE CIBLÉ FERMETÉ',
    h1: 'Soin anti-âge à Rabat, un protocole et non un soin unique',
    leadIntro: "Les premières ridules autour des yeux. L'ovale du visage qui se dessine moins nettement. Une peau qui met plus de temps à retrouver son éclat le matin. Notre soin anti-âge n'est pas un soin classique rallongé : c'est un protocole complet, qui combine plusieurs étapes et plusieurs actifs sur une séance longue, construite autour de la fermeté et du grain de peau.",
    heroImage: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1400&q=85',
    priceSingle: '800 DH le soin',
    priceNote: 'Protocole complet ciblé (environ 1 heure).',
    sections: [
      {
        h2: "Ce qui change avec l'âge",
        paragraphs: [
          "La peau produit moins de collagène et d'élastine. Le renouvellement cellulaire ralentit. L'hydratation se maintient moins bien.",
          "Concrètement : les traits se marquent, la peau perd en rebond, le teint devient plus terne. Ce n'est pas une fatalité, mais cela ne se corrige pas avec une crème seule."
        ]
      },
      {
        h2: 'Pour qui est fait ce soin ?',
        paragraphs: [
          "Pour vous si vous voyez apparaître des ridules, si votre peau manque de fermeté, si votre teint est terne, ou si vous souhaitez agir en prévention à partir de la trentaine.",
          "Il convient aussi après une période de fatigue, de stress ou une perte de poids, situations où la peau du visage marque rapidement."
        ]
      },
      {
        h2: 'Comment se déroule la séance ?',
        paragraphs: [
          "Elle commence par un nettoyage en profondeur et une exfoliation adaptée à votre peau.",
          "Suit la phase active : application d'actifs ciblés sur la fermeté et le renouvellement cellulaire, avec un travail manuel qui favorise leur pénétration et relance la circulation.",
          "La séance se termine par une phase d'hydratation et de protection. Comptez environ une heure."
        ]
      },
      {
        h2: 'Combien de séances faut-il ?',
        paragraphs: [
          "Un soin isolé donne un bel effet immédiat. Pour un résultat installé, comptez une série de quatre à six séances espacées de deux à trois semaines, puis un entretien mensuel.",
          "800 DH le soin. C'est le tarif de nos trois protocoles ciblés, qui sont plus longs et plus complets que les soins à 400 DH."
        ]
      },
      {
        h2: 'Soin anti-âge ou microneedling ?',
        paragraphs: [
          "Ils ne travaillent pas de la même façon et se complètent bien.",
          "Le microneedling stimule mécaniquement la production de collagène, avec un effet de fond sur le relief et la densité. Il laisse des rougeurs.",
          "Le soin anti-âge travaille par les actifs et le massage, sans éviction sociale. On peut sortir juste après.",
          "Dans un protocole complet, nous alternons souvent les deux."
        ]
      }
    ],
    faq: [
      { q: 'À partir de quel âge ?', a: "Il n'y a pas de règle. La prévention commence souvent vers 30 ans." },
      { q: 'Y a-t-il des rougeurs ?', a: "Non, ce soin n'entraîne pas d'éviction sociale." },
      { q: 'Peut-on le faire avant un événement ?', a: "Oui, idéalement la veille ou l'avant-veille." },
      { q: 'Pourquoi 800 DH plutôt que 400 ?', a: "Parce que c'est un protocole plus long, avec plusieurs étapes et des actifs ciblés." },
      { q: 'Faut-il arrêter ses crèmes habituelles ?', a: "Non, au contraire. Nous vous conseillons sur la routine à tenir entre les séances." }
    ],
    related: [
      { label: 'Soins du Visage', href: '/services/soins-visage' },
      { label: 'Microneedling', href: '/services/soins-visage/microneedling' },
      { label: 'Kobido', href: '/services/soins-visage/kobido' },
      { label: 'Voir tous les tarifs', href: '/tarifs' }
    ],
    ctaText: 'Prenez rendez-vous sur WhatsApp au 06 15 10 98 98.'
  },
  {
    category: 'soins-visage',
    categoryName: 'Soins du Visage',
    slug: 'soin-anti-acne',
    metaTitle: 'Soin anti-acné à Rabat, protocole ciblé | INFRASLIM',
    metaDescription: "Protocole complet contre l'acné active et les marques, à Agdal, Rabat. 800 DH le soin, institut 100 % femmes.",
    eyebrow: 'SOINS DU VISAGE · PROTOCOLE CIBLÉ PURETÉ',
    h1: 'Soin anti-acné à Rabat',
    leadIntro: "L'acné n'est pas réservée à l'adolescence. Beaucoup de femmes en font pour la première fois à 25 ou 35 ans, souvent sur le bas du visage, la mâchoire et le menton. Notre soin anti-acné est un protocole complet qui agit sur trois fronts : l'excès de sébum, les impuretés installées dans les pores, et l'apaisement de la peau.",
    heroImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa904?auto=format&fit=crop&w=1400&q=85',
    priceSingle: '800 DH le soin',
    priceNote: 'Protocole complet ciblé (environ 1 heure).',
    sections: [
      {
        h2: "Pourquoi l'acné adulte est différente",
        paragraphs: [
          "L'acné de l'adolescence touche surtout la zone T, le front et le nez. L'acné adulte se concentre plutôt sur le bas du visage, et elle est souvent liée aux variations hormonales, au stress et à la fatigue.",
          "Elle est aussi plus inflammatoire et laisse plus facilement des marques, parce que la peau se renouvelle moins vite."
        ]
      },
      {
        h2: 'Pour qui est fait ce soin ?',
        paragraphs: [
          "Pour vous si vous avez des boutons récurrents, des pores obstrués, une peau qui réagit mal aux produits agressifs, ou des marques rouges ou brunes laissées par d'anciens boutons.",
          "Une précision importante : nous intervenons sur une acné légère à modérée. Si votre acné est sévère, inflammatoire ou kystique, consultez d'abord un dermatologue. Nous travaillerons volontiers en complément de son suivi."
        ]
      },
      {
        h2: 'Comment se déroule la séance ?',
        paragraphs: [
          "Nettoyage en profondeur, puis exfoliation douce adaptée à une peau réactive.",
          "Vient ensuite l'extraction, réalisée avec précaution, suivie d'une phase d'actifs ciblés sur le sébum et l'inflammation.",
          "La séance se termine par un apaisement et une hydratation, parce qu'une peau acnéique n'est pas une peau qu'il faut assécher. C'est l'erreur la plus répandue. Comptez environ une heure."
        ]
      },
      {
        h2: 'Combien de séances ?',
        paragraphs: [
          "L'acné se traite dans la durée. Comptez une série de quatre à six séances espacées de deux à trois semaines, puis un entretien mensuel.",
          "800 DH le soin."
        ]
      },
      {
        h2: "Et pour les marques laissées par l'acné ?",
        paragraphs: [
          "Ce sont deux problèmes distincts, et donc deux approches.",
          "Le soin anti-acné agit sur l'acné active. Pour les cicatrices en creux et le relief, c'est le microneedling qui travaille, en stimulant la production de collagène.",
          "On traite d'abord l'acné active, ensuite les marques. Dans cet ordre."
        ]
      }
    ],
    faq: [
      { q: 'La peau peut-elle réagir après ?', a: "Une légère rougeur est possible pendant quelques heures." },
      { q: 'Faut-il arrêter son traitement dermatologique ?', a: "Non, surtout pas. Dites-nous ce que vous utilisez, nous adapterons le soin." },
      { q: 'Peut-on percer les boutons soi-même ?', a: "C'est ce qui crée les marques. L'extraction en cabine est faite autrement." },
      { q: 'Combien de temps avant de voir une différence ?', a: "Généralement après deux à trois séances." },
      { q: 'Convient-il aux peaux sensibles ?', a: "Oui, le protocole s'adapte. Une peau acnéique est souvent une peau fragilisée." }
    ],
    related: [
      { label: 'Soins du Visage', href: '/services/soins-visage' },
      { label: 'Microneedling', href: '/services/soins-visage/microneedling' },
      { label: 'Carbon Peel', href: '/services/soins-visage/carbon-peel' },
      { label: 'Hydrafacial', href: '/services/soins-visage/hydrafacial' },
      { label: 'Voir tous les tarifs', href: '/tarifs' }
    ],
    ctaText: 'Prenez rendez-vous sur WhatsApp au 06 15 10 98 98.'
  },

  // =========================================================================
  // 4. ÉPILATION ET LASER
  // =========================================================================
  {
    category: 'epilation-laser',
    categoryName: 'Épilation & Laser',
    slug: 'epilation-laser-diode',
    metaTitle: 'Épilation laser diode à Rabat | INFRASLIM',
    metaDescription: 'Épilation définitive au laser diode à Agdal, par une équipe 100 % féminine. 200 DH la zone, 2 000 DH le corps complet.',
    eyebrow: 'ÉPILATION & LASER · ÉQUIPE 100 % FÉMININE',
    h1: 'Épilation définitive au laser diode à Rabat',
    leadIntro: "Des années de cire, de rasage, de repousse qui gratte et de rendez-vous à recaler. À un moment, on se demande combien tout cela a coûté. Le laser diode envoie une lumière absorbée par la mélanine du poil, transformée en chaleur, qui agit sur le follicule pileux. Séance après séance, le poil repousse plus fin, plus clair, puis plus du tout.",
    heroImage: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1400&q=85',
    priceSingle: '200 DH la zone',
    pricePack: '2 000 DH le corps complet',
    sections: [
      {
        h2: 'Pourquoi faut-il plusieurs séances ?',
        paragraphs: [
          "Parce que le laser n'agit que sur les poils en phase de croissance, et que tous les poils d'une zone ne sont jamais en croissance en même temps.",
          "À un instant donné, seule une partie de la pilosité est « visible » pour le laser. Les séances suivantes attrapent les poils qui étaient au repos. C'est pour cette raison qu'on espace les séances de quatre à six semaines : on attend que le cycle suivant se présente.",
          "Aucune technologie ne contourne ce principe. Une promesse d'épilation définitive en une séance n'existe pas."
        ]
      },
      {
        h2: 'Combien de séances faut-il prévoir ?',
        paragraphs: [
          "Généralement six à huit séances espacées de quatre à six semaines, suivies de séances d'entretien plus rares.",
          "Le nombre dépend de la zone, de l'épaisseur et de la couleur des poils, et de votre type de peau. Les aisselles et le maillot répondent souvent plus vite que les jambes."
        ]
      },
      {
        h2: 'Nos tarifs',
        paragraphs: [
          "200 DH la zone · 2 000 DH le corps complet.",
          "Le corps complet devient avantageux dès que vous traitez plusieurs zones en même temps, ce qui est le cas le plus fréquent."
        ]
      },
      {
        h2: 'Comment préparer sa séance ?',
        paragraphs: [
          "Rasez la zone la veille ou le jour même. Le laser a besoin du follicule, pas du poil de surface.",
          "N'épilez pas à la cire ni à la pince dans les quatre semaines qui précèdent : cela retire la racine, et il n'y a plus rien à cibler.",
          "Évitez le soleil et l'autobronzant avant et après. Une peau bronzée augmente le risque de réaction et réduit l'efficacité."
        ]
      },
      {
        h2: 'Est-ce douloureux ?',
        paragraphs: [
          "On décrit généralement une sensation de picotement, ou d'élastique qui claque sur la peau. C'est bref et supportable.",
          "L'appareil est équipé d'un système de refroidissement, et l'intensité se règle pendant la séance. Les zones les plus sensibles sont le maillot et la lèvre supérieure."
        ]
      }
    ],
    faq: [
      { q: 'Le laser fonctionne-t-il sur tous les phototypes ?', a: "Le laser diode convient à une large gamme de peaux. Nous vérifions votre peau et vos poils au premier rendez-vous." },
      { q: 'Fonctionne-t-il sur les poils blancs ou roux ?', a: "Non. Sans mélanine, il n'y a rien à cibler. La cire reste la solution." },
      { q: 'Peut-on faire du laser en été ?', a: "Oui, en évitant strictement l'exposition et avec une protection solaire." },
      { q: 'Et pendant une grossesse ?', a: "Nous reportons les séances. L'épilation à la cire reste possible." },
      { q: 'Combien de temps dure une séance ?', a: "De quelques minutes pour une petite zone à environ une heure pour le corps complet." },
      { q: 'Peut-on épiler le visage ?', a: "Oui, le duvet et le menton sont parmi les zones les plus demandées." }
    ],
    related: [
      { label: 'Épilation & Laser', href: '/services/epilation-laser' },
      { label: 'Détatouage au laser', href: '/services/epilation-laser/detatouage-laser' },
      { label: 'Hammam Traditionnel', href: '/services/hammam' },
      { label: 'Voir tous les tarifs', href: '/tarifs' }
    ],
    ctaText: 'Prenez rendez-vous sur WhatsApp au 06 15 10 98 98.'
  },
  {
    category: 'epilation-laser',
    categoryName: 'Épilation & Laser',
    slug: 'detatouage-laser',
    metaTitle: 'Détatouage au laser à Rabat | INFRASLIM',
    metaDescription: 'Effacement progressif de tatouage au laser à Agdal, par une équipe 100 % féminine. 400 DH la zone, sur rendez-vous.',
    eyebrow: 'ÉPILATION & LASER · DÉTATOUAGE PROGRESSIF',
    h1: 'Détatouage au laser à Rabat',
    leadIntro: "Un tatouage fait à vingt ans ne raconte pas forcément la même chose à trente-cinq. Un prénom, un symbole, un trait de maquillage permanent qui a mal vieilli. Le détatouage au laser consiste à fragmenter les pigments d'encre en particules suffisamment fines pour que l'organisme les élimine naturellement. Le tatouage s'estompe progressivement, séance après séance.",
    heroImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=85',
    priceSingle: '400 DH la zone',
    priceNote: 'Estimation du nombre de séances lors du 1er rendez-vous.',
    sections: [
      {
        h2: 'Comment ça fonctionne ?',
        paragraphs: [
          "L'encre d'un tatouage est composée de pigments logés dans le derme, trop gros pour être évacués par le corps.",
          "Le laser envoie une impulsion très brève absorbée par ces pigments, qui se fragmentent. Les particules deviennent alors assez petites pour être prises en charge par le système immunitaire et éliminées sur plusieurs semaines.",
          "C'est votre corps qui fait le travail d'élimination. Le laser ne fait que préparer le terrain, et c'est pourquoi il faut du temps entre deux séances."
        ]
      },
      {
        h2: 'Combien de séances faut-il ?',
        paragraphs: [
          "C'est la question la plus difficile, parce que la réponse dépend de beaucoup de facteurs : l'ancienneté du tatouage, la densité et la couleur de l'encre, la profondeur, la zone du corps et votre peau.",
          "Un tatouage ancien et peu dense part plus vite qu'un tatouage récent et saturé. Les encres noires répondent généralement mieux que les couleurs.",
          "Nous faisons une estimation lors du premier rendez-vous, après avoir vu le tatouage. Nous préférons une estimation honnête à une promesse rapide."
        ]
      },
      {
        h2: 'Combien de temps entre deux séances ?',
        paragraphs: [
          "Plusieurs semaines, parce qu'il faut laisser à l'organisme le temps d'éliminer les pigments fragmentés.",
          "Espacer suffisamment donne de meilleurs résultats que multiplier les séances rapprochées."
        ]
      },
      {
        h2: 'Combien ça coûte ?',
        paragraphs: [
          "400 DH la zone. Le tarif et le nombre de séances estimé vous sont précisés après avoir vu le tatouage."
        ]
      },
      {
        h2: 'Le tatouage disparaît-il complètement ?',
        paragraphs: [
          "Soyons honnêtes : cela dépend. Certains tatouages s'effacent presque entièrement, d'autres laissent une ombre résiduelle.",
          "Nous vous disons ce qui est réaliste dans votre cas dès le premier rendez-vous. Une estimation prudente vaut mieux qu'une déception après six séances."
        ]
      }
    ],
    faq: [
      { q: 'Est-ce douloureux ?', a: "C'est plus sensible qu'une séance d'épilation. La sensation est brève et la zone est refroidie." },
      { q: 'Comment soigner la zone après ?', a: "Nous vous donnons les consignes précises en fin de séance. En général, protéger, ne pas gratter, éviter le soleil." },
      { q: 'Peut-on le faire en été ?', a: "Mieux vaut éviter. La zone traitée doit être tenue à l'abri du soleil." },
      { q: 'Les couleurs partent-elles aussi bien que le noir ?', a: "Généralement moins bien. Nous en parlons selon votre tatouage." },
      { q: 'Peut-on se refaire tatouer au même endroit après ?', a: "C'est possible dans de nombreux cas, une fois la peau bien cicatrisée." }
    ],
    related: [
      { label: 'Épilation & Laser', href: '/services/epilation-laser' },
      { label: 'Épilation laser diode', href: '/services/epilation-laser/epilation-laser-diode' },
      { label: 'Contact & Accès', href: '/contact' },
      { label: 'Voir tous les tarifs', href: '/tarifs' }
    ],
    ctaText: 'Un premier rendez-vous permet d\'estimer le nombre de séances.'
  }
];

export function getPrestation(category: string, slug: string): PrestationData | undefined {
  return PRESTATIONS.find((p) => p.category === category && p.slug === slug);
}
