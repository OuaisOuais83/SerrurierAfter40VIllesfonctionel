import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, Star, DoorOpen, Lock, Key, Shield, CheckCircle } from "lucide-react";
import Footer from "../components/Footer";
import { citiesData, baseFaq, faqsByCity } from "../data/citiesData";

const LocalPage = ({ city }) => {
  const cityData = citiesData[city];
  if (!cityData) return <div className="min-h-screen pt-20 flex items-center justify-center"><h1>Ville non trouvée</h1></div>;

  // Services offerts
  const services = [
    {
      icon: DoorOpen,
      title: "ouverture de porte claquée",
      description: "Intervention rapide sans dégât",
      link: "/urgences/ouverture-porte-claquee"
    },
    {
      icon: Lock,
      title: "remplacement de serrure",
      description: "Serrures multipoints et blindées",
      link: "/urgences/serrure-bloquee-clef-cassee"
    },
    {
      icon: Key,
      title: "réparation de serrure bloquée",
      description: "Déblocage professionnel",
      link: "/urgences/perte-cles"
    },
    {
      icon: Shield,
      title: "mise en sécurité après cambriolage",
      description: "Sécurisation d'urgence",
      link: "/urgences/apres-cambriolage"
    }
  ];

  // FAQ spécifiques à la ville ou FAQ de base
  const getFAQs = () => {
    const cityFaqs = faqsByCity[city];
    if (cityFaqs) {
      return cityFaqs;
    }
    return baseFaq.map(faq => ({
      question: faq.question.replace(/\[VILLE\]/g, cityData.name),
      answer: faq.answer.replace(/\[VILLE\]/g, cityData.name)
    }));
  };

  const faqs = getFAQs();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20"
    >
      <Helmet>
        <title>Serrurier {cityData.name} 24h/24 – Urgences, ouverture porte claquée, dépannage rapide</title>
        <meta name="description" content={`Urgence serrurier à ${cityData.name} ? Ouverture porte claquée, serrure bloquée, intervention en 30 min. 24h/24. Devis gratuit, remboursé assurance.`} />
        <link rel="canonical" href={cityData.canonical} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Serrure Minute",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "135 Avenue Victor Hugo",
              "addressLocality": "Fréjus",
              "postalCode": "83600",
              "addressCountry": "FR"
            },
            "telephone": "+33786356139",
            "areaServed": cityData.name,
            "openingHours": "24/7",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "250"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section avec H1 */}
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

      {/* Introduction (80-100 mots) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Vous recherchez un serrurier à {cityData.name} ? Serrure Minute intervient en moins de 30 minutes, 24h/24, 7j/7, même les jours fériés. Artisan agréé assurances, nous ouvrons votre porte claquée sans dégât, remplaçons votre serrure ou sécurisons vos accès après effraction. Notre devis est gratuit, nos prix sont fixes et transparents. Appelez dès maintenant pour une intervention rapide à {cityData.name} et dans ses alentours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* H2 : Nos services de serrurerie à [Ville] */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Nos services de serrurerie à {cityData.name}
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Serrure Minute propose l'ensemble des prestations de serrurerie d'urgence pour particuliers et professionnels :
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Link to={service.link} className="block">
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <p className="text-gray-700 mb-8">
              Nous travaillons avec tous types de serrures (multipoints, blindées, standard) et assurons une intervention dans les règles, sans surfacturation, avec garantie d'un an sur la prestation. Nos techniciens sont formés aux dernières technologies de serrurerie et disposent d'un stock complet de pièces détachées pour intervenir efficacement sur place.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Expertise technique à {cityData.name}</h3>
              <p className="text-gray-700 mb-4">
                Spécialisés dans tous types de serrures : cylindre européen, serrure multipoints A2P, serrure connectée, serrure biométrique, blindage de porte. Intervention sur toutes marques : Fichet, Picard, Vachette, Bricard, Mottura, Pollux, Reelax, JPM.
              </p>
              <p className="text-gray-700">
                Nos techniciens maîtrisent les techniques d'ouverture les plus récentes : manipulation douce, bumping contrôlé, impressioning, pick gun électronique. Chaque intervention est réalisée avec des outils professionnels de dernière génération pour garantir une ouverture sans dégât dans 95% des cas.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Stock permanent à {cityData.name}</h3>
              <p className="text-gray-700">
                Nos véhicules d'intervention transportent en permanence plus de 200 références de cylindres, serrures et accessoires de sécurité. Cette organisation nous permet de résoudre 90% des pannes sur place, sans avoir à revenir le lendemain. Cylindres de sécurité, serrures multipoints, verrous haute sûreté, cornières anti-pinces : tout notre matériel respecte les normes A2P et est couvert par notre garantie d'un an.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H2 : Zones d'intervention à [Ville] */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Zones d'intervention à {cityData.name}
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Notre serrurier se déplace en 30 minutes maximum dans tous les quartiers de {cityData.name}, notamment dans les secteurs résidentiels, les zones pavillonnaires, les résidences sécurisées et les centres-villes historiques. Nous connaissons parfaitement la topographie locale, les heures de pointe et les meilleurs itinéraires pour optimiser nos délais d'intervention.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="grid grid-cols-1 gap-3">
                  {cityData.quartiers.map((quartier, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-gray-700 font-medium">{quartier}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Communes voisines</h3>
                <div className="space-y-2 mb-4">
                  {cityData.communesVoisines.map((commune, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">{commune}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Disponible 24h/24, 7j/7, y compris dimanche et jours fériés. Notre central d'appel gère les urgences en temps réel et oriente immédiatement le technicien le plus proche de votre localisation à {cityData.name}.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Secteurs prioritaires :</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Centre-ville et zones piétonnes</li>
                    <li>• Quartiers résidentiels et pavillonnaires</li>
                    <li>• Zones d'activités et commerciales</li>
                    <li>• Résidences seniors et établissements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2 : Pourquoi nous faire confiance à [Ville] ? */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Pourquoi nous faire confiance à {cityData.name} ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">✔ Artisan diplômé et expérimenté</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">✔ Intervention 30 min</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-900">✔ Agréé assurances</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">✔ Garantie d'un an</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">✔ Devis gratuit</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-900">✔ Remboursé par la plupart des assurances habitation et cartes bancaires</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-8">
              Serrure Minute est présent dans le Var depuis plus de 10 ans, et a réalisé plus de 500 interventions à {cityData.name} chaque année. Nos techniciens connaissent parfaitement la géographie locale, les types d'habitat et les spécificités architecturales de {cityData.name}. Cette expertise locale nous permet d'optimiser nos délais d'intervention et d'adapter nos solutions aux contraintes spécifiques de votre quartier. Votre satisfaction est notre priorité absolue.
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Notre engagement qualité à {cityData.name}</h3>
              <p className="text-gray-700">
                Entreprise certifiée, nos interventions respectent les normes de sécurité en vigueur. Nous proposons une prise en charge complète : diagnostic gratuit, devis transparent, intervention soignée, nettoyage du chantier et conseils personnalisés pour renforcer votre sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* H2 : Avis clients [Ville] */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Avis clients {cityData.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cityData.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-md"
                >
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-gray-600 text-xs">{testimonial.quartier}, {cityData.name}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* H2 : FAQ serrurier [VILLE] - Structure Rich Snippets */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              FAQ serrurier {cityData.name}
            </h2>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quel est le prix d'une ouverture de porte à {cityData.name} ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Nos tarifs dépendent du type de porte et de l'heure. Un devis gratuit est toujours fourni avant intervention.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Intervenez-vous la nuit ou les jours fériés ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oui, nous intervenons 24h/24, 7j/7, même les dimanches, Noël et le jour de l'an.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Est-ce remboursé par mon assurance habitation ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Oui. Nous délivrons une facture conforme pour la prise en charge par votre assurance habitation ou carte bleue.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Votre serrurier à {cityData.name} endommage-t-il la porte ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dans 95 % des cas, l'ouverture est réalisée sans aucun dégât grâce à notre méthode professionnelle.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* H2 : Nos engagements à [Ville] */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Nos engagements à {cityData.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">✅ Intervention 30 min</h3>
                <p className="text-gray-700 text-sm">Délai garanti à {cityData.name}</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">✅ Disponibilité 24h/24 – 7j/7</h3>
                <p className="text-gray-700 text-sm">Même jours fériés</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6">
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">✅ Prix fixe sans surprise</h3>
                <p className="text-gray-700 text-sm">Devis gratuit et transparent</p>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-2xl p-6">
                <CheckCircle className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">✅ Garantie 1 an</h3>
                <p className="text-gray-700 text-sm">Sur toutes prestations</p>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-2xl p-6">
                <Shield className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">✅ Remboursement par assurance possible</h3>
                <p className="text-gray-700 text-sm">Agréé toutes compagnies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section maillage interne vers pages urgences - Liens exacts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Nos interventions en urgence à {cityData.name}
            </h2>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <li>
                <Link to="/urgences/ouverture-porte-claquee" className="block">
                  <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group hover:from-red-100 hover:to-red-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                        <DoorOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-700 transition-colors">
                          Ouverture de porte claquée
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Intervention rapide 24h/24 à {cityData.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/urgences/perte-cle" className="block">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group hover:from-blue-100 hover:to-blue-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                        <Key className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                          Perte ou vol de clé
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Remplacement de cylindre à {cityData.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/urgences/effraction" className="block">
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group hover:from-orange-100 hover:to-orange-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-700 transition-colors">
                          Sécurisation après effraction
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Remise en sécurité immédiate à {cityData.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/urgences/serrure-bloquee" className="block">
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group hover:from-purple-100 hover:to-purple-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                        <Lock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                          Serrure bloquée
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Déblocage et réparation à {cityData.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Pourquoi choisir Serrure Minute à {cityData.name} ?
              </h3>
              <p className="text-gray-700 mb-6">
                Notre équipe de serruriers professionnels intervient dans tous les quartiers de {cityData.name} avec un seul objectif : résoudre votre problème de serrurerie rapidement et efficacement. Que vous soyez confronté à une porte claquée, une serrure qui refuse de s'ouvrir, une clé cassée dans la serrure ou un cambriolage, nous avons la solution adaptée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+33786356139"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Urgence {cityData.name}</span>
                </a>
                <Link
                  to="/"
                  className="bg-white border border-blue-200 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  Tous nos services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Appelez maintenant
          </h2>
          <div className="mb-8">
            <a
              href="tel:+33786356139"
              className="text-4xl font-bold text-white hover:text-blue-200 transition-colors"
            >
              07 86 35 61 39
            </a>
            <p className="text-xl text-blue-100 mt-2">
              Disponible 24h/24 – 7j/7 – même jours fériés
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
              Voir nos services
            </Link>
          </div>

          {/* Maillage interne */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Link to="/" className="text-blue-200 hover:text-white transition-colors text-sm">
              ← Page d'accueil
            </Link>
            <Link to="/contact" className="text-blue-200 hover:text-white transition-colors text-sm">
              → Contact
            </Link>
            <Link to="/urgences/ouverture-porte-claquee" className="text-blue-200 hover:text-white transition-colors text-sm">
              → Ouverture porte claquée
            </Link>
            <Link to="/urgences/serrure-bloquee-clef-cassee" className="text-blue-200 hover:text-white transition-colors text-sm">
              → Serrure bloquée
            </Link>
            <Link to="/urgences/perte-cles" className="text-blue-200 hover:text-white transition-colors text-sm">
              → Perte de clé
            </Link>
            <Link to="/urgences/apres-cambriolage" className="text-blue-200 hover:text-white transition-colors text-sm">
              → Après cambriolage
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default LocalPage;