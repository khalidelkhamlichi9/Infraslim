'use strict';

module.exports = {
  register(/*{ strapi }*/) {},

  async bootstrap({ strapi }) {
    try {
      // 1. Activer automatiquement les permissions publiques (find / findOne)
      const publicRole = await strapi
        .query('plugin::users-permissions.role')
        .findOne({ where: { type: 'public' } });

      if (publicRole) {
        const permissionsToEnable = [
          'api::service.service.find',
          'api::service.service.findOne',
          'api::article.article.find',
          'api::article.article.findOne',
          'api::faq.faq.find',
          'api::faq.faq.findOne',
          'api::global-setting.global-setting.find',
        ];

        for (const action of permissionsToEnable) {
          const existing = await strapi
            .query('plugin::users-permissions.permission')
            .findOne({
              where: { action, role: publicRole.id },
            });

          if (!existing) {
            await strapi.query('plugin::users-permissions.permission').create({
              data: { action, role: publicRole.id },
            });
          }
        }
      }

      // 2. Seed des Services si la collection est vide
      const serviceCount = await strapi.entityService.count('api::service.service');
      if (serviceCount === 0) {
        const servicesData = [
          {
            slug: 'sport-nouvelle-generation',
            title: 'Sport Nouvelle Génération',
            subtitle: "Brûlez jusqu'à 1300 calories en 30 minutes grâce à la chaleur infrarouge",
            category: '01 · Effort & Infrarouge',
            badge: 'Pôle Sportif',
            description: "L'alliance unique de l'effort cardio et des rayons infrarouges longs. Cette technologie stimule la thermogenèse, accélère le déstockage des graisses profondes et purifie l'organisme sans surcharger les articulations.",
            subservices: ['InfraBike Allongé', 'Tapis Roulant Infrarouge', 'Infra Roller Massage', 'Renforcement Musculaire'],
            benefits: [
              'Perte calorique multipliée par 3 par rapport au sport classique',
              'Élimination intense des toxines par sudation douce',
              'Soulagement des courbatures et régénération musculaire',
              'Amélioration de la tonicité dès la 1ère séance'
            ],
            pricingOverview: { singleSession: '300 MAD', pack10: '2 400 MAD' },
            publishedAt: new Date(),
          },
          {
            slug: 'soins-amincissants',
            title: 'Soins Amincissants',
            subtitle: 'Technologies de remodelage corporel et drainage sur-mesure',
            category: '02 · Remodelage & Minceur',
            badge: 'Pôle Minceur',
            description: "Dites adieu aux capitons et à la rétention d'eau. Nos praticiennes certifiées combinent des technologies médicales de pointe (VelaShape, radiofréquence, ultrasons) à des soins manuels experts pour cibler chaque zone rebelle.",
            subservices: ['VelaShape Anti-Cellulite', 'Madérothérapie Sculptante', 'Drainage Lymphatique Renata', 'Pressothérapie Médicale', 'Sauna Dôme Détox'],
            benefits: [
              'Réduction visible de la cellulite fibreuse et aqueuse',
              'Affinement du tour de taille, hanches et cuisses',
              'Sensation de jambes légères immédiate',
              'Raffermissement cutané durable'
            ],
            pricingOverview: { singleSession: '400 MAD', pack10: '3 200 MAD' },
            publishedAt: new Date(),
          },
          {
            slug: 'soins-visage',
            title: 'Soins du Visage',
            subtitle: 'Protocoles médico-esthétiques pour un éclat et une pureté inégalés',
            category: '03 · Éclat & Anti-Âge',
            badge: 'Pôle Esthétique Visage',
            description: "Une peau purifiée en profondeur, repulpée et lumineuse dès la première séance. Découvrez nos protocoles d'exception associant dermatologie esthétique et massages liftants traditionnels.",
            subservices: ['Hydrafacial Deluxe', 'Carbon Peel Laser Hollywood', 'Massage Kobido Liftant', 'Microneedling & Sérums'],
            benefits: [
              'Extraction indolore des impuretés et comédons',
              'Hydratation intense et infusion de vitamines',
              'Lissage des ridules et stimulation du collagène',
              'Teint éclatant effet peau de verre'
            ],
            pricingOverview: { singleSession: '500 MAD', pack10: '4 000 MAD' },
            publishedAt: new Date(),
          },
          {
            slug: 'epilation-laser',
            title: 'Épilation & Laser',
            subtitle: 'Laser Diode haute performance pour une peau douce définitivement',
            category: '04 · Netteté & Confort Durable',
            badge: 'Pôle Laser',
            description: "Libérez-vous de la corvée de l'épilation. Notre équipement laser diode tri-longueur d'onde avec refroidissement continu garantit des séances rapides, sécurisées et quasi-indolores sur tous les phototypes.",
            subservices: ["Laser Diode Tri-Longueur d'Onde", 'Détatouage & Taches Pigmentaires', 'Épilation à la Cire Douce'],
            benefits: [
              'Destruction définitive du follicule pileux',
              'Système de refroidissement protecteur pour un confort maximal',
              'Efficace sur poils clairs à foncés, peaux claires à mates',
              'Protocoles encadrés par des spécialistes formées'
            ],
            pricingOverview: { singleSession: 'Sur devis', pack10: 'Facilités de paiement' },
            publishedAt: new Date(),
          },
          {
            slug: 'hammam',
            title: 'Hammam Traditionnel',
            subtitle: 'Un sanctuaire de sérénité 100% féminin aux rituels beldi ancestraux',
            category: '05 · Rituels Ancestraux',
            badge: 'Pôle Bien-Être Beldi',
            description: "Vapeur enveloppante, savon noir beldi aux huiles essentielles, gommage méticuleux au gant Kessa et enveloppement purifiant au ghassoul naturel. Une immersion sensorielle unique au cœur de la tradition marocaine.",
            subservices: ['Savon Noir & Eucalyptus', 'Gommage Kessa Traditionnel', 'Enveloppement Ghassoul Royal', 'Massage de Clôture aux Huiles'],
            benefits: [
              'Détoxification profonde et élimination des cellules mortes',
              "Peau d'une douceur et d'un soyeux incomparables",
              'Détente musculaire absolue et libération des tensions',
              "Respect strict de l'intimité et hygiène irréprochable"
            ],
            pricingOverview: { singleSession: '80 MAD', pack10: '250 MAD (Rituel complet)' },
            publishedAt: new Date(),
          },
        ];

        for (const item of servicesData) {
          await strapi.entityService.create('api::service.service', { data: item });
        }
      }

      // 3. Seed des Articles de Blog si la collection est vide
      const articleCount = await strapi.entityService.count('api::article.article');
      if (articleCount === 0) {
        const articlesData = [
          {
            slug: 'pourquoi-sport-infrarouge-brule-3x-plus-calories',
            title: 'Pourquoi le sport infrarouge brûle 3× plus de calories ?',
            category: 'Sport Infrarouge',
            date: '15 Novembre 2026',
            readTime: '4 min',
            excerpt: "Comprenez le mécanisme de thermogenèse qui permet de dépenser jusqu'à 1300 kcal en une séance de 30 minutes sans traumatisme articulaire.",
            content: "La chaleur infrarouge pénètre directement dans les tissus sous-cutanés jusqu'à 4 à 5 cm de profondeur. Contrairement à une séance de cardio classique où la température monte par friction mécanique, l'infrarouge active immédiatement le système lymphatique et la micro-circulation. Vos cellules déstockent les lipides plus rapidement, tout en ménageant votre système cardio-vasculaire.",
            publishedAt: new Date(),
          },
          {
            slug: 'velashape-vs-maderotherapie-que-choisir',
            title: 'VelaShape vs Madérothérapie : quel soin choisir pour la cellulite ?',
            category: 'Minceur',
            date: '08 Novembre 2026',
            readTime: '5 min',
            excerpt: 'Technologie médicale ou rouleaux de bois ancestraux colombiens ? Notre comparatif pour déterminer le soin adapté à votre type de cellulite.',
            content: 'Le VelaShape combine radiofréquence bipolaire, lumière infrarouge et palper-rouler mécanique : il est idéal pour la cellulite adipeuse et le relâchement cutané. La madérothérapie, quant à elle, utilise des instruments en bois naturel pour drainer les liquides interstitiels et briser les adhérences fibreuses. Chez INFRASLIM, nous combinons souvent les deux pour des résultats spectaculaires.',
            publishedAt: new Date(),
          },
          {
            slug: 'hydrafacial-secret-peau-glow-rabat',
            title: "Hydrafacial à Rabat : le secret d'un teint lumineux en 45 minutes",
            category: 'Soins Visage',
            date: '28 Octobre 2026',
            readTime: '3 min',
            excerpt: 'Nettoyage, extraction et infusion de sérums : pourquoi ce soin médico-esthétique est devenu le préféré des femmes actives à Agdal.',
            content: "Grâce à sa technologie vortex brevetée, l'Hydrafacial désincruste les pores sans douleur, élimine le sébum oxydé et injecte simultanément des antioxydants, peptides et acide hyaluronique. Le résultat est immédiat : une peau parfaitement nette, repulpée et un éclat qui dure plusieurs semaines.",
            publishedAt: new Date(),
          },
        ];

        for (const item of articlesData) {
          await strapi.entityService.create('api::article.article', { data: item });
        }
      }

      // 4. Seed des FAQ si la collection est vide
      const faqCount = await strapi.entityService.count('api::faq.faq');
      if (faqCount === 0) {
        const faqsData = [
          {
            question: 'Le centre est-il vraiment réservé aux femmes ?',
            answer: "Oui, entièrement. Le vestiaire, la salle de sport, les cabines de soin et toute l'équipe. C'est le principe du centre depuis le premier jour.",
            order: 1,
            publishedAt: new Date(),
          },
          {
            question: 'Le diagnostic InBody est-il payant ?',
            answer: "Non, il est 100% offert et sans engagement. Il permet d'analyser précisément votre composition corporelle (masse grasse, masse musculaire, rétention d'eau) avant de commencer votre cure.",
            order: 2,
            publishedAt: new Date(),
          },
          {
            question: 'Combien de séances faut-il prévoir ?',
            answer: 'Dès la première séance, vous ressentez une sensation immédiate de légèreté et de bien-être. Pour des résultats visibles et durables sur la silhouette, nos programmes comportent généralement entre 5 et 10 séances.',
            order: 3,
            publishedAt: new Date(),
          },
          {
            question: 'Faut-il prendre rendez-vous ?',
            answer: 'Oui, toutes nos séances et nos soins se font uniquement sur rendez-vous via WhatsApp ou par téléphone au 06 15 10 98 98, afin de vous garantir zéro attente et une intimité totale.',
            order: 4,
            publishedAt: new Date(),
          },
          {
            question: 'Quels sont vos horaires ?',
            answer: 'Nous vous accueillons du lundi au samedi, de 08h00 à 20h00 sans interruption.',
            order: 5,
            publishedAt: new Date(),
          },
          {
            question: 'Où se garer à Agdal ?',
            answer: 'Le centre se trouve au 43 Rue Oum Rabiâ, Appt. N°2 à Agdal. Le parking surveillé Kaïs se situe à seulement 240 mètres (3 minutes à pied).',
            order: 6,
            publishedAt: new Date(),
          },
        ];

        for (const item of faqsData) {
          await strapi.entityService.create('api::faq.faq', { data: item });
        }
      }

      // 5. Seed des Paramètres Généraux (Single Type) s'ils n'existent pas
      const globalSetting = await strapi.entityService.findMany('api::global-setting.global-setting');
      if (!globalSetting) {
        await strapi.entityService.create('api::global-setting.global-setting', {
          data: {
            centerName: 'INFRASLIM',
            tagline: 'Centre Santé & Beauté 100% Femmes',
            address: '43 Rue Oum Rabiâ, Appt. N°2, Agdal, Rabat (Parking Kaïs à 240m)',
            phone: '+212 615 10 98 98',
            whatsapp: 'https://wa.me/212615109898?text=Bonjour%20INFRASLIM%2C%20je%20souhaite%20prendre%20rendez-vous.',
            hours: 'Lundi au Samedi : 08h00 – 20h00 (sur rendez-vous)',
            instagram: 'https://instagram.com/infraslim.ma',
            facebook: 'https://facebook.com/infraslim.ma',
          },
        });
      }
    } catch (err) {
      strapi.log.error('Erreur lors du bootstrap INFRASLIM :', err);
    }
  },
};
