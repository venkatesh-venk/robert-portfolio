"use client";

import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Users, Megaphone, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CommunityLocationsPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  // Key locations/neighborhoods
  const locations = [
    {
      name: "Milton-Parc",
      description: "Cœur de la vie étudiante avec un engagement communautaire actif. Nous abordons les préoccupations de sécurité et améliorons la qualité de vie.",
      address: "Arrondissement Plateau-Mont-Royal",
      focus: ["Sécurité étudiante", "Qualité du logement", "Événements communautaires"],
      contactPerson: "Coordinateur local",
      image: "/images/montreal_paint.jpeg"
    },
    {
      name: "Mile End",
      description: "Pôle culturel dynamique où nous travaillons sur le soutien aux petites entreprises et l'amélioration de la sécurité routière.",
      address: "Arrondissement Plateau-Mont-Royal",
      focus: ["Soutien aux PME", "Sécurité routière", "Événements culturels"],
      contactPerson: "Liaison communautaire",
      image: "/images/cityline-mtl-plateau.png"
    },
    {
      name: "Plateau Est",
      description: "Quartiers résidentiels où nous nous concentrons sur les parcs, les espaces verts et les initiatives familiales.",
      address: "Arrondissement Plateau-Mont-Royal",
      focus: ["Parcs & Loisirs", "Services familiaux", "Espaces verts"],
      contactPerson: "Organisateur de quartier",
      image: "/images/mount_royal_image.png"
    }
  ];

  // Local initiatives and events
  const initiatives = [
    {
      icon: Calendar,
      title: "Assemblées publiques communautaires",
      schedule: "Chaque 2e mardi, 19h00",
      location: "Centre communautaire Milton-Parc",
      description: "Rassemblements mensuels où les résidents partagent leurs préoccupations, posent des questions et aident à façonner nos politiques. Votre voix compte !",
      nextDate: "Prochaine réunion : 9 janvier 2024",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Users,
      title: "Événements de bénévolat",
      schedule: "Samedis, 10h00 - 14h00",
      location: "Divers emplacements de quartier",
      description: "Rejoignez-nous pour des nettoyages communautaires, l'embellissement des parcs et des projets d'amélioration du quartier.",
      nextDate: "Prochain événement : Nettoyage de parc - 13 janvier 2024",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Megaphone,
      title: "Sensibilisation porte-à-porte",
      schedule: "Quotidien, 14h00 - 18h00",
      location: "Partout dans Plateau-Mont-Royal",
      description: "Rencontrez notre équipe en personne. Nous visitons chaque rue pour écouter vos préoccupations et partager notre vision.",
      nextDate: "Actuellement actif dans Mile End",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-primary-50 to-orange-50">
      {/* Hero Image Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/images/montreal_paint.jpeg"
          alt="Notre communauté"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-8 flex items-center gap-2 text-white hover:text-primary-300 transition-colors group z-10"
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
                Dans votre <span className="text-primary-400">communauté</span>
              </h1>
              <p className="text-xl text-white/90">
                De Milton-Parc au Mile End - nous sommes actifs dans votre quartier avec des assemblées publiques, des événements de bénévolat et du porte-à-porte.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Serving Our District Section */}
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
              Au service du Plateau-Mont-Royal
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous sommes fiers de servir les quartiers diversifiés du Plateau-Mont-Royal. Voici où vous pouvez nous trouver travaillant chaque jour pour améliorer notre communauté.
            </p>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-16"
          >
            <Image
              src="/images/cityline-mtl-plateau.png"
              alt="Carte Plateau-Mont-Royal"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-lg font-semibold bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                📍 Milton-Parc • Mile End • Plateau Est
              </p>
            </div>
          </motion.div>

          {/* Key Locations Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-primary-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-primary-100"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{location.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <p className="text-sm text-primary-600 font-medium">{location.address}</p>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{location.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900">Nos priorités :</p>
                    <div className="flex flex-wrap gap-2">
                      {location.focus.map((item, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Initiatives & Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impliquez-vous localement
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rejoignez-nous lors de nos événements et initiatives réguliers. Il se passe toujours quelque chose dans votre quartier.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${initiative.color} mb-4`}>
                  <initiative.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {initiative.title}
                </h3>
                
                <div className="space-y-2 mb-4 text-sm">
                  <p className="text-primary-600 font-semibold">{initiative.schedule}</p>
                  <p className="text-gray-600">{initiative.location}</p>
                </div>
                
                <p className="text-gray-700 mb-4">{initiative.description}</p>
                
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-primary-600">{initiative.nextDate}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Get Involved CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Faites une différence dans votre quartier
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Que vous puissiez faire du bénévolat une heure ou devenir organisateur communautaire, il y a une place pour vous dans notre mouvement.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Appelez-nous</h3>
                </div>
                <p className="text-white/90">(514) XXX-XXXX</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Écrivez-nous</h3>
                </div>
                <p className="text-white/90">contact@citoyensenaction.ca</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/fr/community')}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Rejoignez notre équipe
              </button>
              <button
                onClick={() => router.push('/fr#contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                Contactez-nous
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

