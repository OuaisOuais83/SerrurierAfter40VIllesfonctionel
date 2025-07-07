import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, Star, DoorOpen, Lock, Key, Shield, CheckCircle } from "lucide-react";
import Footer from "../components/Footer";
import { citiesData, introVariations, faqVariations } from "../data/citiesData";

const LocalPage = ({ city }) => {
  const cityData = citiesData[city];
  if (!cityData) return <div className="min-h-screen pt-20 flex items-center justify-center"><h1>Ville non trouvée</h1></div>;

  // Obtenir l'introduction personnalisée
  const getIntroText = () => {
    const variation = introVariations[cityData.introVariation] || introVariations[1];
    return variation.replace(/\[CITY\]/g, cityData.name);
  };

  // Obtenir les FAQ personnalisées
  const getFAQs = () => {
    const faqSet = faqVariations[cityData.introVariation] || faqVariations[1];
    return faqSet.map(faq => ({
      question: faq.question.replace(/\[CITY\]/g, cityData.name),
      answer: faq.answer.replace(/\[CITY\]/g, cityData.name)
    }));
  };

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

  const faqs = getFAQs();

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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Serrure Minute - ${cityData.name}`,
            "description": cityData.description,
            "url": cityData.canonical,
            "telephone": "+33786356139",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": cityData.name,
              "addressRegion": "Var",
              "postalCode": "83",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "43.1",
              "longitude": "6.1"
            },
            "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            }
          })}
        </script>
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

      {/* Introduction personnalisée */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Serrurier professionnel à {cityData.name}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {getIntroText()}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 bg-green-50 p-4 rounded-xl">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Intervention 30min</p>
                    <p className="text-gray-600 text-sm">Délai garanti à {cityData.name}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-xl">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Agréé assurances</p>
                    <p className="text-gray-600 text-sm">Remboursement facilité</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-purple-50 p-4 rounded-xl">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Garantie 1 an</p>
                    <p className="text-gray-600 text-sm">Sur toutes prestations</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nos services de serrurerie à {cityData.name}
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Zones d'intervention à {cityData.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Quartiers et districts desservis</h3>
                <div className="grid grid-cols-1 gap-3">
                  {cityData.districts.map((district, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-gray-700 font-medium">{district}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Points d'intérêt</h3>
                  <div className="space-y-2">
                    {cityData.landmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-700">{landmark}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Délai d'intervention</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-6 h-6 text-green-500" />
                      <div>
                        <p className="font-semibold text-gray-900">15-30 minutes</p>
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Questions fréquentes à {cityData.name}
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Témoignage client à {cityData.name}</h2>
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
                  <p className="text-gray-600">{cityData.testimonial.district}, {cityData.name}</p>
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
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Appeler maintenant</span>
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