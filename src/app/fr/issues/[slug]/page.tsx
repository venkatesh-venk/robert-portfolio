import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';

// Generate static paths for all issues
export function generateStaticParams() {
  return [
    { slug: 'open-door-troubles' },
    { slug: 'safety' },
    { slug: 'garbage-pest-control' },
    { slug: 'affordable-housing' },
    { slug: 'parks-green-spaces' },
    { slug: 'traffic-road-safety' },
    { slug: 'noise-quality-of-life' },
    { slug: 'local-business-support' }
  ];
}

const issuesData: Record<string, any> = {
  'open-door-troubles': {
    title: 'Problèmes Open Door',
    subtitle: 'Résoudre la crise du refuge pour sans-abri à Milton-Parc',
    image: '/images/cityline-mtl-plateau.png',
    sections: [
      {
        heading: 'La situation actuelle',
        content: `À l'heure actuelle, le centre pour sans-abri Open Door, situé au 3535 avenue du Parc, accueille quotidiennement environ 50 à 70 personnes sans abri. Bien que ce service soit important, l'installation présente des limites importantes. Elle ne fonctionne que pendant la journée et n'offre que 30 lits au total, laissant de nombreuses personnes à l'extérieur jour et nuit.

En conséquence, de grands groupes restent devant les portes principales, les ruelles, les escaliers et les trottoirs des résidents voisins. Pour passer le temps, beaucoup se tournent vers la consommation de drogues, ce qui a malheureusement attiré des trafiquants de drogue qui parcourent maintenant la région à pied ou à vélo, sollicitant ouvertement des ventes — ciblant même les étudiants de l'Université McGill et les résidents du quartier.`
      },
      {
        heading: 'Impact sur la communauté',
        content: `Cette situation a entraîné une augmentation visible des vols, des cambriolages et de la mendicité agressive, tandis que l'hygiène publique a fortement diminué en raison des crachats, vomissements, urinations et déchets alimentaires autour du centre. Par conséquent, la population de rats a explosé, et l'intersection Milton-Parc, autrefois sûre et accueillante pour les étudiants, est maintenant associée au crime, à la drogue et à l'insécurité.

Notre communauté a travaillé sans relâche pour proposer des solutions, mais il est clair que l'administration actuelle ne traite pas cette question avec l'urgence qu'elle exige. Le temps des retards est terminé — nous devons agir maintenant.`
      },
      {
        heading: 'Notre engagement',
        content: `Nous nous engageons à déplacer cette installation Open Door loin de la zone résidentielle et à trouver un endroit parfait avec une installation beaucoup plus grande qui peut correctement servir la population sans-abri tout en respectant la sécurité et la qualité de vie des résidents de Milton-Parc.`
      }
    ]
  },
  'safety': {
    title: 'Sécurité des étudiants, enfants et aînés',
    subtitle: 'Assurer une communauté sûre pour tous les résidents',
    image: '/images/montreal_paint.jpeg',
    sections: [
      {
        heading: 'Une communauté diversifiée en danger',
        content: `Milton-Parc, au cœur du centre-ville de Montréal, rassemble un mélange diversifié de résidents et de visiteurs. La communauté abrite des étudiants, de jeunes couples, des familles avec enfants et des résidents âgés, qui méritent tous de se sentir en sécurité dans leur propre quartier.

Cependant, malgré des demandes répétées des résidents, la présence policière et les patrouilles restent insuffisantes. Ce manque de sécurité constante a contribué à de graves problèmes, notamment des coups de couteau, du harcèlement et des incidents d'intimidation dans la région de Milton-Parc.`
      },
      {
        heading: 'Le besoin d\'action',
        content: `Bien que des patrouilles occasionnelles aient lieu, elles ne suffisent pas à dissuader efficacement l'activité de drogue, le vol et l'intimidation. Les étudiants qui rentrent tard le soir, les enfants qui jouent à l'extérieur et les familles qui vaquent à leurs occupations quotidiennes ne devraient jamais avoir à craindre pour leur sécurité.`
      },
      {
        heading: 'Notre solution',
        content: `C'est pourquoi nous demandons des patrouilles policières accrues et cohérentes — en particulier à vélo. Cela garantirait des temps de réponse plus rapides, une plus grande visibilité et un engagement communautaire plus fort. Une présence policière proactive et fiable découragera non seulement le crime, mais restaurera également la confiance parmi les résidents, les étudiants et les familles que Milton-Parc est à nouveau un endroit sûr et accueillant pour vivre, étudier et élever des enfants.`
      }
    ]
  },
  'garbage-pest-control': {
    title: 'Gestion des déchets et lutte antiparasitaire',
    subtitle: 'Restaurer la propreté et la santé publique',
    image: '/images/cityline-mtl-plateau.png',
    sections: [
      {
        heading: 'Le problème croissant',
        content: `Un autre problème majeur auquel la communauté est confrontée est le problème croissant de l'accumulation de déchets et des infestations parasitaires. Les poubelles débordantes, les déchets sur les trottoirs et les déchets mal gérés ont créé des conditions insalubres dans tout le quartier. Cette situation a directement contribué à l'augmentation rapide des rats et autres parasites, sapant davantage la propreté et la qualité de vie de la région.

Le problème s'est aggravé car les espaces publics autour du refuge pour sans-abri et les intersections achalandées sont fréquemment utilisés pour manger, flâner et jeter des déchets.`
      },
      {
        heading: 'Risques pour la santé et la sécurité',
        content: `Si cela n'est pas traité, cela nuit non seulement à l'image du quartier, mais pose également de graves risques pour la santé publique des étudiants, des familles et des résidents âgés.`
      },
      {
        heading: 'Stratégie globale',
        content: `Nous exigeons une stratégie complète de gestion des déchets et de lutte antiparasitaire pour Milton-Parc. Cela comprend:

• Une collecte des déchets plus fréquente et le nettoyage des trottoirs
• L'installation de poubelles sécurisées résistantes aux rongeurs
• Une application plus stricte des violations de déchets
• Un programme coordonné de lutte antiparasitaire pour réduire la population de rats

En abordant la gestion des déchets et la lutte antiparasitaire avec urgence, nous pouvons restaurer Milton-Parc en une communauté propre, sûre et accueillante qui reflète la fierté de ses résidents.`
      }
    ]
  },
  'affordable-housing': {
    title: 'Logement abordable et sécuritaire',
    subtitle: 'Rendre le logement accessible et sûr pour tous',
    image: '/images/montreal_paint.jpeg',
    sections: [
      {
        heading: 'La crise du logement',
        content: `L'augmentation des coûts de logement à Milton-Parc et au Plateau Mont-Royal met les maisons abordables hors de portée des étudiants, des jeunes familles et des personnes âgées. En même temps, les appartements mal entretenus et les propriétaires négligents créent des conditions de vie dangereuses et instables.`
      },
      {
        heading: 'Nos solutions proposées',
        content: `• Application plus stricte des normes de logement pour assurer des conditions de vie sûres
• Protections renforcées pour les locataires contre les augmentations de loyer injustes et les expulsions
• Investissement dans de nouveaux projets de logements abordables qui répondent aux besoins des résidents ordinaires

En abordant ces problèmes, nous pouvons nous assurer que les deux quartiers restent inclusifs, accueillants et accessibles à tous, plutôt que d'être hors de portée des résidents de longue date.`
      }
    ]
  },
  'parks-green-spaces': {
    title: 'Parcs publics et espaces verts',
    subtitle: 'Créer des espaces dynamiques et sûrs pour tous',
    image: '/images/cityline-mtl-plateau.png',
    sections: [
      {
        heading: 'État actuel de nos parcs',
        content: `Milton-Parc et le Plateau Mont-Royal abritent des communautés dynamiques, mais les parcs et terrains de jeux souffrent souvent de négligence, d'un mauvais entretien, d'un éclairage insuffisant et d'installations limitées. Ces espaces verts sont essentiels pour que les étudiants, les familles et les personnes âgées puissent se détendre, faire de l'exercice et socialiser en toute sécurité.`
      },
      {
        heading: 'Nos solutions proposées',
        content: `• Meilleur entretien des parcs existants, y compris l'aménagement paysager et la propreté
• Création de nouveaux espaces récréatifs pour les jeunes, les familles et les personnes âgées
• Ajout de bancs, d'arbres et de sentiers sécuritaires pour améliorer l'utilisabilité
• Éclairage amélioré pour assurer la sécurité pendant les heures du soir

Les parcs bien entretenus contribuent à des communautés plus saines et plus heureuses et encouragent les résidents à s'engager activement dans leurs quartiers.`
      }
    ]
  },
  'traffic-road-safety': {
    title: 'Sécurité routière',
    subtitle: 'Rendre les rues sûres pour tous',
    image: '/images/montreal_paint.jpeg',
    sections: [
      {
        heading: 'Préoccupations actuelles en matière de sécurité',
        content: `Les rues achalandées et les intersections de Milton-Parc et du Plateau Mont-Royal posent des risques pour les piétons, les cyclistes et les conducteurs. Les véhicules en excès de vitesse, les passages pour piétons mal marqués et les pistes cyclables inadéquates ont déjà entraîné des accidents et des quasi-accidents.`
      },
      {
        heading: 'Nos solutions proposées',
        content: `• Signaux piétons améliorés et passages pour piétons clairement marqués pour des traversées de rue plus sûres
• Pistes cyclables élargies et protégées pour encourager le cyclisme sécuritaire
• Mesures de contrôle de la vitesse, telles que des dos d'âne et des initiatives d'apaisement de la circulation
• Attention particulière à la sécurité autour des écoles, des parcs et des logements étudiants

En donnant la priorité à la sécurité routière, nous pouvons rendre les rues plus sûres pour tous, réduire les accidents et promouvoir des modes de vie sains et actifs.`
      }
    ]
  },
  'noise-quality-of-life': {
    title: 'Bruit et qualité de vie',
    subtitle: 'Équilibrer dynamisme et habitabilité',
    image: '/images/cityline-mtl-plateau.png',
    sections: [
      {
        heading: 'Le défi',
        content: `Les deux quartiers sont dynamiques et animés, mais le bruit est devenu une préoccupation majeure. Les perturbations nocturnes autour des logements étudiants, des bars et des lieux de vie nocturne dérangent les familles et les personnes âgées. La construction et l'activité de rue ajoutent encore au problème.`
      },
      {
        heading: 'Nos solutions proposées',
        content: `• Application plus stricte des règlements sur le bruit pour protéger les zones résidentielles
• Coordination avec les universités et les organisations étudiantes pour minimiser les perturbations nocturnes
• Réglementation équilibrée de la vie nocturne pour s'assurer que le divertissement ne compromet pas le confort des résidents
• Mesures de réduction du bruit pendant les projets de construction pour limiter les perturbations

Une communauté prospère doit aussi être habitable — où les étudiants, les familles et les personnes âgées peuvent profiter de la paix sans sacrifier le dynamisme.`
      }
    ]
  },
  'local-business-support': {
    title: 'Commerce local et engagement communautaire',
    subtitle: 'Renforcer notre économie locale et nos liens communautaires',
    image: '/images/montreal_paint.jpeg',
    sections: [
      {
        heading: 'Soutenir les petites entreprises',
        content: `Les petites entreprises de Milton-Parc et du Plateau Mont-Royal ont du mal en raison des préoccupations en matière de sécurité, des problèmes de propreté et de la concurrence des grandes chaînes. En même temps, les résidents se sentent souvent déconnectés de la prise de décision municipale.`
      },
      {
        heading: 'Nos solutions proposées',
        content: `• Incitatifs et programmes de soutien pour les petites entreprises locales pour les aider à prospérer
• Rues commerciales propres et sûres qui attirent les clients et les visiteurs
• Création d'un conseil consultatif de quartier pour donner aux résidents et aux propriétaires d'entreprises une voix plus forte dans les décisions locales
• Expansion des événements communautaires et des programmes culturels pour favoriser un sentiment d'appartenance

En renforçant l'économie locale et en promouvant l'engagement communautaire, nous pouvons créer des quartiers sûrs, prospères et accueillants pour tous.`
      }
    ]
  }
};

export default function IssueDetailPage({ params }: { params: { slug: string } }) {
  const issue = issuesData[params.slug];

  if (!issue) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Image Section */}
        <div className="relative h-[400px] w-full">
          <Image
            src={issue.image}
            alt={issue.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
          
          {/* Back Button */}
          <Link 
            href="/fr"
            className="absolute top-8 left-8 flex items-center gap-2 text-white hover:text-primary-300 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Retour à l&apos;accueil</span>
          </Link>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {issue.title}
              </h1>
              <p className="text-xl text-white/90">
                {issue.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {issue.sections.map((section: any, index: number) => (
            <section key={index} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {section.heading}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            </section>
          ))}

          {/* Call to Action */}
          <div className="mt-16 bg-primary-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rejoignez-nous pour faire la différence
            </h3>
            <p className="text-gray-700 mb-6">
              Ensemble, nous pouvons relever ces défis et construire une meilleure communauté pour tous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/fr#contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
              >
                S&apos;impliquer
              </Link>
              <Link
                href="/fr#issues"
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200"
              >
                Voir tous les enjeux
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

