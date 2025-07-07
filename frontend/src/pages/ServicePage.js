import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { DoorOpen, Lock, Key, Shield, Clock, Star, Phone, CheckCircle } from "lucide-react";
import Footer from "../components/Footer";

const ServicePage = ({ type }) => {
  const services = {
    "ouverture-porte": {
      title: "Ouverture de Porte Claquée",
      subtitle: "Urgence 24h/24 dans le Var",
      description: "Intervention en urgence ouverture porte claquée dans le Var 83 en moins de 30 min. Pas de dégât, devis gratuit, agréé assurances.",
      icon: DoorOpen,
      image: "https://images.pexels.com/photos/830899/pexels-photo-830899.jpeg",
      color: "from-blue-500 to-blue-600",
      metaTitle: "Ouverture Porte Claquée Var (83) – Serrurier 24/24",
      canonical: "https://serrure-minute-var.com/urgences/ouverture-porte-claquee",
      testimonial: {
        name: "Sophie M.",
        city: "Fréjus",
        text: "Intervention très rapide après que ma porte se soit claquée. L'artisan est arrivé en 20 minutes et a ouvert ma porte sans aucun dégât."
      }
    },
    "serrure-bloquee": {
      title: "Serrure Bloquée – Clé Cassée",
      subtitle: "Urgence Var 24h/24",
      description: "Serrure bloquée ou clé cassée dans le Var ? Dépannage express 30 min, devis gratuit, 24/24. Appelez Serrure Minute.",
      icon: Lock,
      image: "https://images.pexels.com/photos/8985454/pexels-photo-8985454.jpeg",
      color: "from-purple-500 to-purple-600",
      metaTitle: "Serrure Bloquée ou Clé Cassée Var (83) – Dépannage 24/7",
      canonical: "https://serrure-minute-var.com/urgences/serrure-bloquee-clef-cassee",
      testimonial: {
        name: "Benoît L.",
        city: "Hyères",
        text: "Serrure complètement bloquée un dimanche. L'équipe est venue rapidement et a réparé sans changer toute la serrure."
      }
    },
    "perte-cles": {
      title: "Perte de Clés",
      subtitle: "Dépannage Serrurier Var 24/7",
      description: "Vous avez perdu vos clés dans le Var ? Serrure Minute intervient 24/24 pour ouvrir et sécuriser, devis gratuit, remboursement assurance.",
      icon: Key,
      image: "https://images.pexels.com/photos/115642/pexels-photo-115642.jpeg",
      color: "from-green-500 to-green-600",
      metaTitle: "Perte de Clés Var (83) – Serrurier Dépannage 24/7",
      canonical: "https://serrure-minute-var.com/urgences/perte-cles",
      testimonial: {
        name: "Isabelle R.",
        city: "Draguignan",
        text: "J'ai perdu mes clés un dimanche soir. Malgré l'heure tardive, un serrurier est venu m'ouvrir ma porte. Service de qualité !"
      }
    },
    "apres-cambriolage": {
      title: "Sécurisation Après Cambriolage",
      subtitle: "Intervention Var 24h/24",
      description: "Après une effraction dans le Var ? Serrure Minute intervient 24/7 pour sécuriser portes et serrures, devis gratuit, agréé assurances.",
      icon: Shield,
      image: "https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg",
      color: "from-red-500 to-red-600",
      metaTitle: "Sécurisation Après Cambriolage Var (83) – Serrurier 24/24",
      canonical: "https://serrure-minute-var.com/urgences/apres-cambriolage",
      testimonial: {
        name: "Karim M.",
        city: "La Seyne",
        text: "Après un cambriolage, ils ont sécurisé ma porte immédiatement. Travail professionnel et prise en charge par l'assurance."
      }
    }
  };

  const service = services[type];
  if (!service) return <div>Service non trouvé</div>;

  const ServiceIcon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20"
    >
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={service.canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${service.color} mb-6`}>
              <ServiceIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {service.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33786356139"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Appeler maintenant</span>
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

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Notre méthode d'intervention
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Intervention soignée</h3>
                      <p className="text-gray-600">Nos artisans utilisent des techniques professionnelles pour préserver votre serrure.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Outils certifiés</h3>
                      <p className="text-gray-600">Équipement professionnel pour tous types de serrures modernes.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Garantie 1 an</h3>
                      <p className="text-gray-600">Tous nos travaux sont garantis 1 an pour votre tranquillité.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm font-medium">Intervention professionnelle</p>
                  <p className="text-lg font-bold">Sans dégât • Rapide • Efficace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Témoignage client</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-700 italic mb-6">
                "{service.testimonial.text}"
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {service.testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{service.testimonial.name}</p>
                  <p className="text-gray-600">{service.testimonial.city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Urgence ? Intervention immédiate !</h2>
          <p className="text-xl text-red-100 mb-8">
            Nos équipes sont prêtes à intervenir 24h/24 dans tout le Var
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33786356139"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-red-50 transition-colors"
            >
              📞 07 86 35 61 39
            </a>
            <Link
              to="/"
              className="bg-red-700 text-white px-8 py-4 rounded-full font-bold hover:bg-red-800 transition-colors"
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

export default ServicePage;