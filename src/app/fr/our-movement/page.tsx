"use client";

import { motion } from "framer-motion";
import { Users, Target, Heart, Lightbulb, Shield, TrendingUp, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OurMovementPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const principles = [
    {
      icon: Users,
      title: "Axé sur la communauté",
      description: "Nous croyons que les meilleures solutions viennent de l'écoute et du travail avec les membres de la communauté. Chaque voix compte et chaque préoccupation est valide."
    },
    {
      icon: Target,
      title: "Orienté vers l'action",
      description: "Nous ne parlons pas seulement de changement—nous le réalisons. Notre mouvement se concentre sur des solutions pratiques et réalisables aux vrais problèmes communautaires."
    },
    {
      icon: Heart,
      title: "Leadership compatissant",
      description: "Nous dirigeons avec empathie, comprenant que derrière chaque problème se trouvent de vraies personnes avec de vraies histoires et de vrais besoins."
    },
    {
      icon: Lightbulb,
      title: "Solutions innovantes",
      description: "Nous combinons la sagesse traditionnelle avec des approches modernes pour créer des politiques innovantes qui fonctionnent pour tous."
    },
    {
      icon: Shield,
      title: "Intégrité et transparence",
      description: "Nous opérons avec une transparence complète, nous tenant responsables aux normes éthiques les plus élevées."
    },
    {
      icon: TrendingUp,
      title: "Valeurs progressistes",
      description: "Nous croyons en la construction d'une communauté plus équitable, durable et inclusive pour les générations actuelles et futures."
    }
  ];

  const achievements = [
    "Plaidé avec succès pour une présence policière accrue dans le secteur Milton-Parc",
    "Mené des consultations communautaires avec plus de 500 résidents",
    "Développé des propositions complètes sur l'abordabilité du logement",
    "Partenariat avec des organisations locales sur des initiatives environnementales",
    "Organisé des événements de nettoyage communautaire avec plus de 200 bénévoles"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-primary-50 to-orange-50">
      {/* Hero Image Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/images/montreal_paint.jpeg"
          alt="Arrière-plan communautaire"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-8 flex items-center gap-2 text-white hover:text-primary-300 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Retour à l&apos;accueil</span>
        </button>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Qu&apos;est-ce que <span className="text-primary-400">Citoyens en Action</span> ?
              </h1>
              <p className="text-xl text-white/90">
                Citoyens en Action est un mouvement politique progressiste de base dédié à créer un changement positif dans notre communauté par la collaboration, l&apos;innovation et un engagement authentique envers le service public.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre histoire
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Citoyens en Action est né d&apos;une idée simple mais puissante : que le vrai changement vient des citoyens travaillant ensemble pour relever les défis auxquels fait face leur communauté.
                </p>
                <p>
                  Nous avons commencé avec un petit groupe de voisins préoccupés qui ont vu des problèmes dans notre quartier—des préoccupations de sécurité autour de l&apos;installation Open Door à l&apos;abordabilité inadéquate du logement, des parcs négligés aux problèmes de sécurité routière. Plutôt que de simplement nous plaindre, nous avons décidé d&apos;agir.
                </p>
                <p>
                  Aujourd'hui, nous sommes devenus un mouvement dynamique de citoyens engagés, de leaders communautaires, d'étudiants, de familles et d'aînés—tous unis par une vision partagée d'une communauté meilleure et plus vivable pour tous.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/cityline-mtl-plateau.png"
                alt="Rassemblement communautaire"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos principes fondamentaux
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ces valeurs directrices façonnent tout ce que nous faisons et chaque décision que nous prenons
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-saffron-500 rounded-full mb-4">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-gray-600">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We've Accomplished */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que nous avons accompli
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des résultats concrets grâce à l'engagement communautaire et à l'action dédiée
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-saffron-50 rounded-lg p-8 md:p-12"
          >
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <p className="text-lg text-gray-700 pt-1">
                    {achievement}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-primary-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Rejoignez notre mouvement
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ensemble, nous pouvons construire la communauté que nous méritons tous. Votre voix, votre passion et votre engagement peuvent faire une vraie différence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/fr/community"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                S'impliquer
              </Link>
              <Link
                href="/fr#issues"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200"
              >
                Voir notre plateforme
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

