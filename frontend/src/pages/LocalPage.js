import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, Star, DoorOpen, Lock, Key, Shield } from "lucide-react";
import Footer from "../components/Footer";

const LocalPage = ({ city }) => {
  const cities = {
    "toulon": {
      name: "Toulon",
      title: "Serrurier à Toulon",
      subtitle: "Urgence 24h/24",
      description: "Serrure Minute Toulon : urgence ouverture porte, changement serrure, 24h/24, 30min, agréé assurances, devis gratuit.",
      metaTitle: "Serrurier Toulon (83) – Urgence 24h/24 – 30 min",
      canonical: "https://serrure-minute-var.com/zones/serrurier-toulon",
      districts: ["Le Mourillon", "Pont du Las", "La Serinette", "Centre-ville", "Sainte-Musse", "La Rode"],
      testimonial: {
        name: "Mathieu L.",
        text: "Suite à un cambriolage, j'ai appelé Serrure Minute. Ils sont venus immédiatement sécuriser ma porte et changer la serrure. Travail impeccable et prise en charge assurance."
      }
    },
    "frejus": {
      name: "Fréjus",
      title: "Serrurier à Fréjus",
      subtitle: "Intervention en 30min",
      description: "Serrurier Minute Fréjus : dépannage serrurerie, ouverture de porte, changement de serrure, 30min, devis gratuit, 24h/24.",
      metaTitle: "Serrurier Fréjus (83) – Dépannage Urgence 24/24",
      canonical: "https://serrure-minute-var.com/zones/serrurier-frejus",
      districts: ["Centre-ville", "Plage", "Caïs", "Villeneuve", "Saint-Aygulf", "Fréjus-Plage"],
      testimonial: {
        name: "Sophie M.",
        text: "Intervention très rapide après que ma porte se soit claquée. L'artisan est arrivé en 20 minutes et a ouvert ma porte sans aucun dégât. Service professionnel et prix correct."
      }
    },
    "draguignan": {
      name: "Draguignan",
      title: "Serrurier à Draguignan",
      subtitle: "Urgence 24h/24",
      description: "Serrurier Minute Draguignan : ouverture de porte, serrure cassée, sécurisation, devis gratuit, 24h/24, 30 min.",
      metaTitle: "Serrurier Draguignan (83) – Dépannage Urgence 24/7",
      canonical: "https://serrure-minute-var.com/zones/serrurier-draguignan",
      districts: ["Centre historique", "Malmont", "Sainte-Roseline", "Nartuby", "Riou-Blanc", "Figanières"],
      testimonial: {
        name: "Isabelle R.",
        text: "J'ai perdu mes clés un dimanche soir. Malgré l'heure tardive, un serrurier est venu m'ouvrir ma porte. Service de qualité, je recommande vivement !"
      }
    },
    "hyeres": {
      name: "Hyères",
      title: "Serrurier à Hyères",
      subtitle: "Intervention Urgence 24/7",
      description: "Serrurier Minute Hyères : ouverture de porte, urgence serrure, devis gratuit, 30 min, 24/7, agréé assurances.",
      metaTitle: "Serrurier Hyères (83) – Urgence Dépannage 24/24",
      canonical: "https://serrure-minute-var.com/zones/serrurier-hyeres",
      districts: ["Centre-ville", "Giens", "Porquerolles", "Ayguade", "Almanarre", "La Capte"],
      testimonial: {
        name: "Benoît L.",
        text: "Serrure complètement bloquée un dimanche. L'équipe est venue rapidement et a réparé sans changer toute la serrure. Parfait !"
      }
    },
    "la-seyne": {
      name: "La Seyne-sur-Mer",
      title: "Serrurier à La Seyne",
      subtitle: "Intervention Urgence 24/7",
      description: "Serrurier Minute La Seyne : ouverture porte claquée, sécurisation après cambriolage, 24/24, 30 min, devis gratuit.",
      metaTitle: "Serrurier La Seyne (83) – Dépannage Urgence 24h/24",
      canonical: "https://serrure-minute-var.com/zones/serrurier-la-seyne",
      districts: ["Centre-ville", "Janas", "Berthe", "Sablettes", "Tamaris", "Mar Vivo"],
      testimonial: {
        name: "Karim M.",
        text: "Après un cambriolage, ils ont sécurisé ma porte immédiatement. Travail professionnel et prise en charge par l'assurance. Merci !"
      }
    }
  };

  const cityData = cities[city];
  if (!cityData) return <div>Ville non trouvée</div>;

  const services = [
    {
      icon: DoorOpen,
      title: "Ouverture de porte claquée",
      description: "Intervention rapide sans dégât",
      link: "/urgences/ouverture-porte-claquee"
    },
    {
      icon: Lock,
      title: "Serrure bloquée / clé cassée",
      description: "Réparation et remplacement",
      link: "/urgences/serrure-bloquee-clef-cassee"
    },
    {
      icon: Key,
      title: "Perte de clés",
      description: "Ouverture et sécurisation",
      link: "/urgences/perte-cles"
    },
    {
      icon: Shield,
      title: "Sécurisation après cambriolage",
      description: "Intervention d'urgence",
      link: "/urgences/apres-cambriolage"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20"
    >
      <Helmet>
        <title>{cityData.metaTitle}</title>
        <meta name="description" content={cityData.description} />
        <link rel="canonical" href={cityData.canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-md mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {cityData.title}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {cityData.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33786356139"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>07 86 35 61 39</span>
              </a>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Devis gratuit
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nos services à {cityData.name}
            </h2>
            <p className="text-xl text-gray-600">
              Intervention rapide dans tous les quartiers de {cityData.name}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.link} className="block">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Zones d'intervention à {cityData.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Quartiers desservis</h3>
                <div className="grid grid-cols-2 gap-4">
                  {cityData.districts.map((district, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-gray-700">{district}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Délai d'intervention</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-green-500" />
                    <div>
                      <p className="font-semibold text-gray-900">15-25 minutes</p>
                      <p className="text-sm text-gray-600">Délai moyen à {cityData.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className="font-semibold text-gray-900">24h/24 - 7j/7</p>
                      <p className="text-sm text-gray-600">Disponibilité permanente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Avis client</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-700 italic mb-6">
                "{cityData.testimonial.text}"
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {cityData.testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{cityData.testimonial.name}</p>
                  <p className="text-gray-600">{cityData.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Urgence à {cityData.name} ? Intervention immédiate !
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Nos équipes sont prêtes à intervenir dans tous les quartiers de {cityData.name}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33786356139"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors"
            >
              📞 Appeler maintenant
            </a>
            <Link
              to="/"
              className="bg-blue-800 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-900 transition-colors"
            >
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default LocalPage;