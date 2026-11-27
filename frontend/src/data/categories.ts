export interface CategorySection {
  h2: string;
  paragraphs: string[];
  bullets?: { title: string; desc: string; href?: string }[];
  table?: { headers: string[]; rows: string[][] };
}

export interface CategoryFAQ {
  q: string;
  a: string;
}

export interface CategoryData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  leadIntro: string;
  heroImage: string;
  sections: CategorySection[];
  prestationsList: { name: string; price?: string; href?: string }[];
  faq: CategoryFAQ[];
  related: { label: string; href: string }[];
  ctaText: string;
}

export const CATEGORIES: CategoryData[] = [
  {
    slug: 'sport-nouvelle-generation',
    name: 'Sport Nouvelle Génération',
    metaTitle: 'Salle de sport pour femmes à Rabat, infrarouge | INFRASLIM',
    metaDescription: "Sport infrarouge et vacuum à Agdal : jusqu'à 1 300 calories en 30 minutes. Salle 100 % féminine, coach, 1 500 DH les dix séances.",
    eyebrow: '01 · EFFORT & INFRAROUGE · SALLE 100 % FÉMININE',
    h1: 'Sport nouvelle génération pour femmes à Rabat',
    leadIntro: "Vous n'avez pas deux heures par jour, vous n'aimez pas les salles bondées, et le cardio classique ne donne rien sur le bas du corps. C'est pour ça que nous avons monté cet espace. Le sport nouvelle génération associe l'effort physique à deux technologies : la chaleur infrarouge et la pression négative. Vous pédalez ou vous marchez dans une cabine qui chauffe le bas du corps et stimule la circulation. Une séance dure 30 minutes et permet de brûler jusqu'à 1 300 calories, dans une salle entièrement féminine à Agdal.",
    heroImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=85',
    sections: [
      {
        h2: "Comment l'infrarouge change une séance de sport",
        paragraphs: [
          "La chaleur infrarouge agit en profondeur, là où la chaleur d'ambiance ne va pas. Le corps travaille davantage pour maintenir sa température, ce qui élève la dépense énergétique pendant toute la séance et au-delà.",
          "La pression négative, ou vacuum, crée une aspiration douce sur le bas du corps. Elle stimule la circulation précisément dans les zones où la graisse s'installe le plus chez la femme : cuisses, hanches et fesses.",
          "Associées à un effort cardio même modéré, ces deux technologies donnent en 30 minutes ce qu'une heure de vélo classique ne donne pas."
        ]
      },
      {
        h2: 'Nos quatre équipements',
        paragraphs: [],
        bullets: [
          {
            title: 'InfraBike',
            desc: "Un vélo semi-allongé en cabine infrarouge. Vous êtes assise, le dos soutenu. C'est l'équipement le plus choisi pour démarrer.",
            href: '/services/sport-nouvelle-generation/infrabike'
          },
          {
            title: 'Tapis roulant infrarouge',
            desc: "La marche en cabine, debout. Il sollicite davantage les fessiers et convient si vous préférez marcher que pédaler.",
            href: '/services/sport-nouvelle-generation/tapis-roulant-infrarouge'
          },
          {
            title: 'Infra Roller',
            desc: "Des rouleaux massants combinés à la chaleur. Il ne s'agit plus de cardio mais d'un travail mécanique sur la cellulite et le drainage, souvent pris en complément.",
            href: '/services/sport-nouvelle-generation/infra-roller'
          },
          {
            title: 'Renforcement musculaire',
            desc: "Un espace avec machines et une coach qui vous accompagne. Gagner du muscle fait monter la dépense au repos, c'est le complément qui manque à beaucoup de programmes minceur."
          }
        ]
      },
      {
        h2: 'Faut-il être sportive pour commencer ?',
        paragraphs: [
          "Non, et c'est probablement la question qu'on nous pose le plus.",
          "L'intensité est réglée sur votre niveau et vous allez à votre rythme. Beaucoup de nos clientes n'avaient pas fait de sport depuis des années, parfois depuis l'adolescence. L'effort est à faible impact, ce qui ménage les genoux et le dos.",
          "Une coach reste disponible pendant la séance. Vous n'êtes jamais seule devant une machine."
        ]
      },
      {
        h2: 'Combien de séances par semaine ?',
        paragraphs: [
          "Deux à trois séances par semaine donnent le meilleur rythme. En dessous, le corps n'installe pas d'habitude. Au-dessus, la régularité devient difficile à tenir dans la durée.",
          "Un pack de dix séances correspond à un premier cycle d'environ quatre à cinq semaines. Il coûte 1 500 DH, soit 150 DH la séance au lieu de 300 DH à l'unité, et reste valable toute l'année."
        ]
      },
      {
        h2: 'Quels résultats peut-on attendre ?',
        paragraphs: [
          "Cela dépend de votre point de départ, de votre régularité et de votre alimentation. C'est précisément pour cette raison que nous commençons par un diagnostic InBody, offert.",
          "Ce que nous constatons le plus souvent avec nos clientes régulières : une sensation de jambes plus légères dès les premières semaines, puis des changements de mensurations avant que la balance ne bouge. Le muscle pèse plus lourd que la graisse, un poids stable ne veut donc pas dire qu'il ne se passe rien."
        ]
      }
    ],
    prestationsList: [
      { name: 'InfraBike', price: '300 DH · Pack 10 : 1 500 DH', href: '/services/sport-nouvelle-generation/infrabike' },
      { name: 'Tapis roulant infrarouge', price: '300 DH · Pack 10 : 1 500 DH', href: '/services/sport-nouvelle-generation/tapis-roulant-infrarouge' },
      { name: 'Infra Roller', price: '300 DH · Pack 10 : 1 500 DH', href: '/services/sport-nouvelle-generation/infra-roller' },
      { name: 'Renforcement musculaire (avec coach)', price: '300 DH · Pack 10 : 1 500 DH' }
    ],
    faq: [
      { q: 'Que faut-il apporter ?', a: "Une tenue de sport et une bouteille d'eau. Le reste est sur place." },
      { q: 'La chaleur est-elle difficile à supporter ?', a: "La cabine monte progressivement et reste réglable à tout moment." },
      { q: 'Peut-on venir pendant ses règles ?', a: "Oui, sans difficulté particulière." },
      { q: 'Et pendant une grossesse ?', a: "Parlez-en d'abord à votre médecin. Nous adapterons ensuite, ou nous vous orienterons vers des prestations plus adaptées." },
      { q: 'Le diagnostic InBody est-il obligatoire ?', a: "Non, mais il est offert et c'est lui qui permet de régler l'intensité correctement." },
      { q: 'Les packs ont-ils une date limite ?', a: "Non, ils sont valables toute l'année." }
    ],
    related: [
      { label: 'Voir les tarifs', href: '/tarifs' },
      { label: 'Soins Amincissants', href: '/services/soins-amincissants' },
      { label: 'Découvrir le centre', href: '/le-centre' },
      { label: 'Conseils & Blog', href: '/blog' }
    ],
    ctaText: 'Votre diagnostic InBody est offert.'
  },
  {
    slug: 'soins-amincissants',
    name: 'Soins Amincissants',
    metaTitle: 'Soins amincissants à Rabat, centre 100 % femmes | INFRASLIM',
    metaDescription: 'VelaShape, madérothérapie, drainage lymphatique et pressothérapie à Agdal. Soins choisis après un diagnostic InBody offert.',
    eyebrow: '02 · MINCEUR & REMODELAGE · SOINS EN CABINE',
    h1: 'Soins amincissants à Rabat',
    leadIntro: "Le sport fait fondre, les soins remodèlent. Les deux ne font pas le même travail, et c'est leur association qui donne les résultats les plus nets. Nos soins amincissants agissent sur ce que l'effort seul ne règle pas : la cellulite, la rétention d'eau, la fermeté de la peau et les zones qui résistent. Ils se pratiquent en cabine, à Agdal, dans un centre entièrement féminin.",
    heroImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=85',
    sections: [
      {
        h2: 'Quel soin pour quel problème ?',
        paragraphs: [
          "C'est la vraie question, et la réponse dépend de ce que montre votre diagnostic."
        ],
        bullets: [
          { title: "Si c'est de la rétention d'eau", desc: "Jambes lourdes, chevilles gonflées en fin de journée, ventre qui gonfle le soir. La pressothérapie et le drainage lymphatique agissent sur la circulation et le confort." },
          { title: "Si c'est de la cellulite", desc: "Peau d'orange, aspect capitonné sur les cuisses ou les fesses. Le VelaShape et la madérothérapie travaillent mécaniquement les tissus." },
          { title: "Si c'est de la graisse localisée", desc: "Une zone qui ne bouge pas alors que le reste a maigri. Le VelaShape associé au sport infrarouge est le protocole que nous proposons le plus souvent." },
          { title: "Si c'est un manque de fermeté", desc: "Après une perte de poids ou une grossesse. La madérothérapie associée au renforcement musculaire redonne de la tenue." }
        ]
      },
      {
        h2: 'Nos soins',
        paragraphs: [],
        bullets: [
          { title: 'VelaShape', desc: "Remodelage du corps et travail sur l'aspect de la peau. 300 DH la séance, 2 000 DH les dix.", href: '/services/soins-amincissants/velashape' },
          { title: 'Madérothérapie', desc: "Un massage manuel aux outils de bois, réalisé par une praticienne. Un des deux soins les plus complets du centre. 600 DH la séance, 5 000 DH les dix.", href: '/services/soins-amincissants/maderotherapie' },
          { title: 'Drainage lymphatique', desc: "Un drainage manuel complet, pour la circulation et le confort. 600 DH la séance, 5 000 DH les dix.", href: '/services/soins-amincissants/drainage-lymphatique' },
          { title: 'Pressothérapie', desc: "Une compression séquentielle qui relance la circulation des jambes. 300 DH la séance, 1 500 DH les dix.", href: '/services/soins-amincissants/pressotherapie' },
          { title: 'Sauna dôme', desc: "Une chaleur infrarouge enveloppante, pour la détente et l'élimination. 300 DH la séance, 1 500 DH les dix." },
          { title: 'Couverture chauffante', desc: "Un soin enveloppant, souvent pris en complément d'une séance de sport. 300 DH la séance, 1 500 DH les dix." },
          { title: 'Massages minceur', desc: "Amincissant, tonifiant ou relaxant, au choix. 300 DH la séance, 2 500 DH les dix." }
        ]
      },
      {
        h2: 'Pourquoi certains soins coûtent-ils plus cher ?',
        paragraphs: [
          "Parce qu'ils ne demandent pas le même temps ni la même intervention.",
          "La pressothérapie et le sauna dôme se déroulent en cabine, avec un appareil. La madérothérapie et le drainage lymphatique sont des soins manuels, réalisés de bout en bout par une praticienne, et durent plus longtemps. C'est ce qui explique l'écart entre 1 500 et 5 000 DH les dix séances."
        ]
      },
      {
        h2: 'Combien de séances faut-il prévoir ?',
        paragraphs: [
          "Un cycle de dix séances est le format de référence, à raison d'une à deux séances par semaine selon le soin.",
          "Nos packs de dix séances sont valables toute l'année, vous n'êtes donc pas contrainte par un délai. Les règlements se font en espèces ou par virement, et un paiement en plusieurs fois est possible."
        ]
      }
    ],
    prestationsList: [
      { name: 'VelaShape', price: '300 DH · Pack 10 : 2 000 DH', href: '/services/soins-amincissants/velashape' },
      { name: 'Madérothérapie', price: '600 DH · Pack 10 : 5 000 DH', href: '/services/soins-amincissants/maderotherapie' },
      { name: 'Drainage lymphatique', price: '600 DH · Pack 10 : 5 000 DH', href: '/services/soins-amincissants/drainage-lymphatique' },
      { name: 'Pressothérapie', price: '300 DH · Pack 10 : 1 500 DH', href: '/services/soins-amincissants/pressotherapie' },
      { name: 'Sauna dôme', price: '300 DH · Pack 10 : 1 500 DH' },
      { name: 'Couverture chauffante', price: '300 DH · Pack 10 : 1 500 DH' },
      { name: 'Massages minceur (amincissant, tonifiant, relaxant)', price: '300 DH · Pack 10 : 2 500 DH' }
    ],
    faq: [
      { q: 'Un soin amincissant fait-il maigrir à lui seul ?', a: "Non, et personne de sérieux ne vous le dira. Un soin travaille la circulation, la fermeté ou l'aspect de la peau. La perte de poids vient de l'effort et de l'alimentation. Les deux se complètent." },
      { q: 'Combien de temps dure une séance ?', a: "Entre 30 et 60 minutes selon le soin. Nous vous le précisons à la prise de rendez-vous." },
      { q: 'Peut-on enchaîner un soin et une séance de sport ?', a: "Oui, et c'est même une combinaison que nous recommandons souvent, le soin après l'effort." },
      { q: 'Faut-il une tenue particulière ?', a: "Non, tout est prévu sur place." },
      { q: 'Les soins sont-ils douloureux ?', a: "Non. La madérothérapie peut être intense sur certaines zones, l'intensité se règle avec la praticienne." }
    ],
    related: [
      { label: 'Sport Nouvelle Génération', href: '/services/sport-nouvelle-generation' },
      { label: 'Voir les tarifs', href: '/tarifs' },
      { label: 'Conseils & Blog', href: '/blog' }
    ],
    ctaText: 'Votre diagnostic InBody est offert.'
  },
  {
    slug: 'soins-visage',
    name: 'Soins du Visage',
    metaTitle: 'Soins du visage à Rabat, institut 100 % femmes | INFRASLIM',
    metaDescription: 'Hydrafacial, microneedling, Carbon Peel, Kobido et soins ciblés anti-âge, anti-taches et anti-acné à Agdal, Rabat. De 400 à 800 DH.',
    eyebrow: '03 · ÉCLAT & ANTI-ÂGE · INSTITUT VISAGE',
    h1: 'Soins du visage et anti-âge à Rabat',
    leadIntro: "Un bon soin du visage ne se choisit pas sur un nom. Il se choisit sur ce que votre peau demande. Nos soins du visage se répartissent en deux familles : les soins d'éclat et de nettoyage, et les soins ciblés sur un problème précis. Le protocole est déterminé après un échange sur votre type de peau, vos habitudes et ce que vous souhaitez corriger, dans notre institut d'Agdal.",
    heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85',
    sections: [
      {
        h2: 'Quel soin pour quelle peau ?',
        paragraphs: [],
        bullets: [
          { title: 'Peau terne, pores dilatés, teint fatigué', desc: "L'Hydrafacial nettoie, exfolie et hydrate en une séance. C'est le soin d'entretien le plus demandé.", href: '/services/soins-visage/hydrafacial' },
          { title: 'Grain de peau irrégulier, excès de sébum', desc: "Le Carbon Peel travaille la surface et resserre l'aspect des pores.", href: '/services/soins-visage/carbon-peel' },
          { title: "Marques d'acné, cicatrices, relief", desc: "Le microneedling stimule la peau en profondeur. Il demande plusieurs séances.", href: '/services/soins-visage/microneedling' },
          { title: 'Traits marqués, manque de tonus', desc: "Le Kobido est un massage facial japonais, sans appareil, qui travaille les muscles du visage.", href: '/services/soins-visage/kobido' },
          { title: 'Un problème installé (rides, taches, acné active)', desc: "Nos trois soins ciblés (anti-âge, anti-taches, anti-acné) sont des protocoles plus complets et plus longs.", href: '#tarifs-pole' }
        ]
      },
      {
        h2: 'Nos soins',
        paragraphs: [],
        table: {
          headers: ['Soin', 'Pour qui', 'Prix'],
          rows: [
            ['Soin visage classique', 'Entretien, toutes peaux', '400 DH'],
            ['Hydrafacial', 'Éclat, hydratation, pores', '400 DH'],
            ['Carbon Peel', 'Grain de peau, sébum', '400 DH'],
            ['Massage Kobido', 'Tonus, détente, traits tirés', '400 DH'],
            ['Microneedling', 'Cicatrices, relief, régénération', '450 DH'],
            ['Soin anti-âge', 'Rides et fermeté', '800 DH'],
            ['Soin anti-taches', 'Taches pigmentaires', '800 DH'],
            ['Soin anti-acné', 'Acné active et marques', '800 DH']
          ]
        }
      },
      {
        h2: 'Pourquoi les soins ciblés coûtent-ils 800 DH ?',
        paragraphs: [
          "Parce qu'ils ne sont pas un soin unique mais un protocole. Ils combinent plusieurs étapes et plusieurs actifs sur une séance plus longue, construite autour d'un problème précis.",
          "Un soin à 400 DH entretient et fait du bien. Un soin ciblé à 800 DH vise un résultat sur une problématique identifiée, et s'inscrit généralement dans une série de séances."
        ]
      },
      {
        h2: 'Combien de séances faut-il ?',
        paragraphs: [
          "Pour un soin d'entretien comme l'Hydrafacial, une séance toutes les quatre à six semaines suffit à maintenir le résultat.",
          "Pour un soin ciblé, comptez une série de trois à six séances espacées de deux à quatre semaines, selon le protocole. Nous vous donnons le rythme précis lors du premier rendez-vous, après avoir vu votre peau."
        ]
      },
      {
        h2: 'Peut-on venir avec du maquillage ?',
        paragraphs: [
          "Oui, le démaquillage fait partie du soin. Venez comme vous êtes.",
          "En revanche, évitez l'exposition au soleil dans les jours qui précèdent et qui suivent un soin, en particulier pour le microneedling et le Carbon Peel. Une protection solaire est recommandée après, toute l'année."
        ]
      }
    ],
    prestationsList: [
      { name: 'Hydrafacial', price: '400 DH', href: '/services/soins-visage/hydrafacial' },
      { name: 'Carbon Peel', price: '400 DH', href: '/services/soins-visage/carbon-peel' },
      { name: 'Massage Kobido', price: '400 DH', href: '/services/soins-visage/kobido' },
      { name: 'Microneedling', price: '450 DH', href: '/services/soins-visage/microneedling' },
      { name: 'Soin anti-âge', price: '800 DH', href: '/services/soins-visage/soin-anti-age' },
      { name: 'Soin anti-acné', price: '800 DH', href: '/services/soins-visage/soin-anti-acne' },
      { name: 'Soin visage classique', price: '400 DH' },
      { name: 'Soin anti-taches', price: '800 DH' }
    ],
    faq: [
      { q: 'Les soins conviennent-ils aux peaux sensibles ?', a: "Oui, à condition d'adapter le protocole. C'est l'objet de l'échange avant le soin." },
      { q: 'Y a-t-il des rougeurs après ?', a: "L'Hydrafacial et le Kobido n'en laissent pas. Le microneedling et le Carbon Peel peuvent laisser des rougeurs quelques heures, parfois jusqu'au lendemain." },
      { q: 'Peut-on faire un soin avant un événement ?', a: "Oui pour l'Hydrafacial et le Kobido, idéalement deux à trois jours avant. Évitez le microneedling dans la semaine qui précède." },
      { q: 'Les soins du visage ont-ils des packs ?', a: "Non, ils se prennent à la séance. Les packs de dix concernent le sport et les soins du corps." },
      { q: 'Faut-il prendre rendez-vous ?', a: "Oui, pour tous les soins." }
    ],
    related: [
      { label: 'Voir les tarifs', href: '/tarifs' },
      { label: 'Épilation & Laser', href: '/services/epilation-laser' },
      { label: 'Conseils & Blog', href: '/blog' }
    ],
    ctaText: 'Prenez rendez-vous sur WhatsApp au 06 15 10 98 98, du lundi au samedi de 08h00 à 20h00.'
  },
  {
    slug: 'epilation-laser',
    name: 'Épilation & Laser',
    metaTitle: 'Épilation définitive au laser à Rabat | INFRASLIM',
    metaDescription: 'Épilation laser diode, épilation à la cire et détatouage à Agdal, Rabat. Équipe 100 % féminine. À partir de 200 DH la zone.',
    eyebrow: '04 · LASER & ÉPILATION · ÉQUIPE 100 % FÉMININE',
    h1: 'Épilation définitive au laser à Rabat',
    leadIntro: "Se faire épiler demande de la confiance. C'est une zone intime, une position inconfortable, et souvent une gêne qu'on n'exprime pas. Chez INFRASLIM, l'épilation est réalisée par une équipe entièrement féminine, dans un centre où aucun homme n'entre. Nous proposons l'épilation définitive au laser diode, l'épilation à la cire et le détatouage, à Agdal.",
    heroImage: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1400&q=85',
    sections: [
      {
        h2: "Comment fonctionne l'épilation au laser diode ?",
        paragraphs: [
          "Le laser envoie une lumière absorbée par la mélanine du poil. Cette énergie se transforme en chaleur et agit sur le follicule pileux, qui produit alors un poil plus fin, plus clair, puis plus du tout.",
          "Le laser n'agit que sur les poils en phase de croissance, et tous les poils d'une zone ne sont jamais en croissance au même moment. C'est pour cette raison qu'une seule séance ne suffit jamais, quelle que soit la technologie."
        ]
      },
      {
        h2: "Combien de séances faut-il pour une épilation définitive ?",
        paragraphs: [
          "Comptez généralement six à huit séances espacées de quatre à six semaines, puis des séances d'entretien plus espacées.",
          "Ce nombre dépend de la zone, de la couleur et de l'épaisseur de vos poils, et de votre type de peau. Les aisselles et le maillot répondent souvent plus vite que les jambes. Nous faisons le point avec vous à la première séance, après avoir vu la zone."
        ]
      },
      {
        h2: 'Nos tarifs',
        paragraphs: [
          "Épilation laser diode : 200 DH la zone · Épilation laser, corps complet : 2 000 DH · Détatouage au laser : 400 DH la zone.",
          "Épilation à la cire, toutes zones : jambes entières 100 DH, demi-jambes 60 DH, bras entiers 70 DH, aisselles 50 DH, maillot intégral 100 DH, visage 100 DH, duvet ou menton 50 DH, sourcils 50 DH."
        ]
      },
      {
        h2: 'Laser ou cire, que choisir ?',
        paragraphs: [
          "Le laser est un investissement sur la durée : plus cher au départ, il réduit durablement la pilosité et finit par coûter moins cher que des années de cire.",
          "La cire reste le bon choix si vous voulez un résultat immédiat sans engagement, si la zone est petite, ou en entretien entre deux séances de laser sur une autre zone.",
          "Beaucoup de nos clientes font les deux : le laser sur les grandes zones, la cire sur le reste."
        ]
      },
      {
        h2: 'Comment préparer une séance de laser ?',
        paragraphs: [
          "Rasez la zone la veille ou le jour même. Ne l'épilez pas à la cire ni à la pince dans les quatre semaines qui précèdent, le laser a besoin du follicule intact.",
          "Évitez l'exposition au soleil et l'autobronzant avant et après la séance. Une peau bronzée augmente le risque de réaction et réduit l'efficacité du laser."
        ]
      }
    ],
    prestationsList: [
      { name: 'Épilation laser diode', price: '200 DH / zone · 2 000 DH corps complet', href: '/services/epilation-laser/epilation-laser-diode' },
      { name: 'Détatouage au laser', price: '400 DH / zone', href: '/services/epilation-laser/detatouage-laser' },
      { name: 'Épilation à la cire (toutes zones)', price: 'de 50 à 100 DH' }
    ],
    faq: [
      { q: 'Est-ce douloureux ?', a: "On décrit généralement une sensation de picotement ou d'élastique qui claque. L'appareil est équipé d'un système de refroidissement et l'intensité se règle pendant la séance." },
      { q: 'Le laser fonctionne-t-il sur tous les types de peau ?', a: "Le laser diode convient à une large gamme de phototypes. Nous vérifions votre peau et vos poils lors du premier rendez-vous avant de commencer." },
      { q: 'Peut-on faire du laser en été ?', a: "Oui, à condition d'éviter l'exposition directe au soleil avant et après, et d'utiliser une protection solaire." },
      { q: 'Peut-on épiler le visage au laser ?', a: "Oui, le duvet et le menton font partie des zones les plus demandées." },
      { q: 'Et pendant une grossesse ?', a: "Nous reportons les séances de laser pendant la grossesse. L'épilation à la cire reste possible." },
      { q: 'Combien de temps dure une séance ?', a: "De quelques minutes pour une petite zone à une heure environ pour le corps complet." }
    ],
    related: [
      { label: 'Voir les tarifs', href: '/tarifs' },
      { label: 'Soins du Visage', href: '/services/soins-visage' },
      { label: 'Hammam Traditionnel', href: '/services/hammam' }
    ],
    ctaText: 'Prenez rendez-vous sur WhatsApp au 06 15 10 98 98.'
  },
  {
    slug: 'hammam',
    name: 'Hammam',
    metaTitle: 'Hammam traditionnel à Rabat, 100 % femmes | INFRASLIM',
    metaDescription: 'Savon noir, gommage au kessa et rinçage, à Agdal. Hammam Infraslim 150 DH, Hammam Royal 250 DH. Centre entièrement féminin.',
    eyebrow: '05 · RITUELS & BIEN-ÊTRE · ESPACE 100 % FÉMININ',
    h1: 'Hammam traditionnel à Rabat',
    leadIntro: "Au Maroc, le hammam n'est pas un soin exotique, c'est un rituel qu'on connaît depuis l'enfance. Ce qu'on cherche en grandissant, c'est de pouvoir le vivre au calme, dans un endroit propre, sans bousculade. Notre hammam propose le rituel complet, savon noir, gommage au kessa et rinçage, dans un espace réservé aux femmes à Agdal. Il se prend seul, ou en prolongement d'une séance de sport ou d'un soin.",
    heroImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85',
    sections: [
      {
        h2: 'Le déroulé du rituel',
        paragraphs: [
          "Vous êtes installée dans la salle chaude. La chaleur humide ouvre les pores et prépare la peau.",
          "Le savon noir, à base d'huile d'olive, est appliqué sur tout le corps et laissé poser quelques minutes. Vient ensuite le gommage au kessa, le gant traditionnel, qui retire les peaux mortes. Le rinçage termine le rituel.",
          "Vous ressortez avec une peau nette, lisse, et cette sensation de légèreté qui est la vraie raison pour laquelle on y revient."
        ]
      },
      {
        h2: 'Nos deux formules',
        paragraphs: [],
        bullets: [
          { title: 'Hammam Infraslim · 150 DH', desc: "Le rituel essentiel : savon noir, gommage au kessa, rinçage." },
          { title: 'Hammam Royal · 250 DH', desc: "La version complète, pour un moment plus long et plus enveloppant." }
        ]
      },
      {
        h2: 'Pourquoi faire un hammam après le sport ?',
        paragraphs: [
          "Parce que les deux se complètent bien.",
          "Après une séance de cardio infrarouge, la peau a transpiré et les pores sont déjà ouverts. Le gommage est alors plus efficace, et la chaleur humide prolonge la détente musculaire.",
          "C'est une combinaison que beaucoup de nos clientes réservent le samedi : une séance de sport, puis le hammam dans la foulée."
        ]
      },
      {
        h2: 'À quelle fréquence venir ?',
        paragraphs: [
          "Une fois par mois suffit pour la plupart des peaux. Toutes les deux semaines si votre peau produit beaucoup de sébum ou si vous faites du sport régulièrement.",
          "Un gommage trop fréquent agresse la peau au lieu de l'entretenir. Mieux vaut espacer et bien hydrater entre deux passages."
        ]
      }
    ],
    prestationsList: [
      { name: 'Hammam Infraslim (savon noir, gommage kessa, rinçage)', price: '150 DH' },
      { name: 'Hammam Royal (version complète)', price: '250 DH' }
    ],
    faq: [
      { q: 'Faut-il apporter quelque chose ?', a: "Non, tout est fourni. Prévoyez simplement de quoi vous changer." },
      { q: 'Le hammam est-il mixte ?', a: "Non. Comme l'ensemble du centre, il est exclusivement réservé aux femmes." },
      { q: 'Peut-on venir pendant ses règles ?', a: "Oui, sans difficulté." },
      { q: 'Peut-on faire un hammam avant une épilation ?', a: "Évitez de les enchaîner le même jour, la peau est plus sensible après un gommage. Prévoyez au moins 24 heures d'écart." },
      { q: 'Y a-t-il un pack hammam ?', a: "Non, le hammam se prend à la séance." },
      { q: 'Faut-il réserver ?', a: "Oui, comme toutes nos prestations." }
    ],
    related: [
      { label: 'Voir les tarifs', href: '/tarifs' },
      { label: 'Sport Nouvelle Génération', href: '/services/sport-nouvelle-generation' },
      { label: 'Soins Amincissants', href: '/services/soins-amincissants' },
      { label: 'Découvrir le centre', href: '/le-centre' }
    ],
    ctaText: 'Réservez votre hammam sur WhatsApp au 06 15 10 98 98.'
  }
];
