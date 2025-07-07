import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { DoorOpen, Lock, Key, Shield, Clock, Star, Phone, CheckCircle, AlertTriangle, Euro, Award } from "lucide-react";
import Footer from "../components/Footer";

const ServicePage = ({ type }) => {
  const services = {
    "ouverture-porte": {
      title: "Ouverture de Porte Claquée dans le Var (83)",
      subtitle: "Intervention Urgence 24h/24",
      description: "Vous êtes bloqué dehors, porte claquée ? Serrure Minute intervient partout dans le Var en moins de 30 minutes, 24h/24 et 7j/7. Ouverture sans dégât, devis gratuit.",
      icon: DoorOpen,
      image: "https://images.pexels.com/photos/830899/pexels-photo-830899.jpeg",
      color: "from-blue-500 to-blue-600",
      metaTitle: "Ouverture Porte Claquée Var (83) – Serrurier 24/24",
      canonical: "https://serrure-minute-var.com/urgences/ouverture-porte-claquee",
      testimonial: {
        name: "Sophie",
        city: "Fréjus",
        text: "Porte claquée à Fréjus dimanche soir, ils sont venus en 25 min, porte ouverte sans rien casser. Parfait."
      },
      content: {
        intro: "Vous êtes bloqué dehors, porte claquée derrière vous ? Pas de panique. Serrure Minute intervient partout dans le Var en moins de 30 minutes, 24h/24 et 7j/7, même les jours fériés. Nos artisans serruriers expérimentés ouvrent votre porte sans dégât et au meilleur prix, devis gratuit avant chaque intervention.",
        causes: [
          "Courant d'air qui claque la porte",
          "Clé oubliée à l'intérieur",
          "Enfant qui ferme la porte",
          "Serrure qui se bloque spontanément",
          "Mécanisme défaillant"
        ],
        process: "Notre méthode d'ouverture sans dommage : techniques d'ouverture fines (radio, crochetage), aucun perçage inutile, respect total de votre cylindre, travail propre et garanti. Nos serruriers sont équipés d'outils professionnels et interviennent rapidement dans tout le Var, y compris Toulon, Fréjus, Draguignan, Hyères, La Seyne et tous les villages alentours.",
        price: "À partir de 90€, devis gratuit avant intervention. Intervention sans casse, garantie 1 an, remboursable par votre assurance habitation, agréé assurances et carte bleue.",
        emergency: "30 minutes maximum sur place. Disponibles 24/7, jours fériés, nuits, dimanches compris. Devis annoncé avant toute opération.",
        zones: "Var Est : Fréjus, Saint-Raphaël, Puget. Var Ouest : Toulon, Hyères, La Seyne. Haut-Var : Draguignan, Brignoles."
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
      },
      content: {
        intro: "Une serrure bloquée ou une clé cassée dans la serrure peut transformer votre journée en cauchemar. Ces problèmes techniques nécessitent l'intervention d'un professionnel équipé d'outils spécialisés. Serrure Minute dispose d'une expertise de plus de 15 ans dans le dépannage de serrures de tous types : cylindre européen, serrure multipoints, serrure à gorges, serrure électronique.",
        causes: [
          "Usure naturelle du mécanisme de serrure",
          "Clé forcée ou tournée trop brutalement",
          "Corps étranger dans le cylindre",
          "Gel en hiver qui bloque le mécanisme",
          "Tentative d'effraction qui endommage la serrure",
          "Clé usée qui se casse dans le cylindre"
        ],
        process: "Notre diagnostic commence par une analyse précise du type de blocage. Pour une serrure bloquée, nous déterminons si le problème vient du cylindre, du mécanisme interne ou de la poignée. Pour une clé cassée, nous utilisons des extracteurs professionnels pour retirer le morceau sans endommager le cylindre. Dans 80% des cas, nous pouvons réparer sans changer la serrure complète.",
        price: "Nos tarifs de dépannage serrure sont fixes et transparents. Le prix varie selon la complexité de l'intervention et les pièces à remplacer. Un simple déblocage coûte moins cher qu'un remplacement de cylindre. Tous nos devis sont gratuits et détaillés. Nous acceptons les paiements par carte bancaire et chèque.",
        emergency: "Nos camions d'intervention sont équipés d'un stock important de cylindres, serrures et pièces détachées des principales marques : Fichet, Vachette, JPM, Muel, Picard. Cela nous permet de réparer immédiatement la plupart des pannes."
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
      },
      content: {
        intro: "Perdre ses clés est l'une des situations les plus stressantes du quotidien. Que vous les ayez perdues en rentrant du travail, lors d'une sortie ou même chez vous, Serrure Minute propose une solution complète : ouverture immédiate, sécurisation temporaire et remplacement définitif. Notre service 24h/24 vous évite de passer la nuit dehors.",
        causes: [
          "Clés tombées pendant une promenade",
          "Clés oubliées dans un lieu public",
          "Clés volées lors d'un cambriolage de voiture",
          "Clés perdues lors d'un déménagement",
          "Clés cassées qui ne permettent plus l'ouverture",
          "Trousseau égaré avec toutes les clés"
        ],
        process: "Après ouverture de votre porte, nous évaluons la situation sécuritaire. Si vos clés ont été volées ou perdues dans un lieu identifiable, nous recommandons fortement le changement immédiat de la serrure pour éviter toute intrusion malveillante. Si la perte semble accidentelle et sans risque, nous pouvons nous contenter de faire refaire des clés. Nous vous conseillons objectivement selon votre situation.",
        price: "Le coût d'une intervention pour perte de clés comprend l'ouverture de porte plus les éventuels travaux de sécurisation. Faire refaire des clés sur un cylindre existant coûte beaucoup moins cher qu'un changement complet de serrure. Nous vous expliquons toutes les options avec leurs tarifs respectifs pour que vous puissiez choisir en connaissance de cause.",
        emergency: "En cas de perte de clés avec suspicion de vol, nous intervenons en urgence absolue car votre sécurité est en jeu. Nous pouvons installer temporairement un verrou de sécurité en attendant le changement définitif de la serrure principale."
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
      },
      content: {
        intro: "Être victime d'un cambriolage est un traumatisme qui nécessite une réaction immédiate pour sécuriser votre domicile. Serrure Minute comprend l'urgence de la situation et intervient dans l'heure pour remettre votre logement en sécurité. Nos équipes travaillent en coordination avec les forces de l'ordre et les experts d'assurance pour faciliter vos démarches.",
        causes: [
          "Porte forcée avec serrure endommagée",
          "Fenêtre brisée nécessitant une condamnation",
          "Serrure crochetée ou percée par les cambrioleurs",
          "Porte d'entrée arrachée ou déformée",
          "Points de fermeture multiples endommagés",
          "Système de sécurité neutralisé"
        ],
        process: "Notre intervention post-cambriolage suit un protocole strict : sécurisation immédiate des accès, évaluation des dommages, établissement d'un devis détaillé pour l'assurance, remplacement provisoire ou définitif des éléments endommagés. Nous photographions tous les dégâts pour faciliter votre dossier d'indemnisation. Nos factures sont directement acceptées par toutes les compagnies d'assurance.",
        price: "Les travaux de sécurisation après cambriolage sont généralement pris en charge intégralement par votre assurance habitation. Nous avançons les frais et nous occupons de toute la facturation directe avec votre assureur. Vous n'avez aucun frais à débourser, sauf éventuelle franchise selon votre contrat.",
        emergency: "Nous comprenons le stress post-cambriolage. C'est pourquoi nous proposons un accompagnement complet : conseil en sécurisation, mise en relation avec des vitriers partenaires, recommandations pour améliorer la sécurité future de votre domicile. Notre objectif est de vous redonner confiance dans votre sécurité."
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
      className="min-h-screen pt-24"
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

      {/* Introduction détaillée */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {service.title} dans le Var (83)
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                {service.content.intro}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Causes communes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Causes fréquentes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.content.causes.map((cause, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <p className="text-gray-700">{cause}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Méthode d'intervention */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Notre méthode d'intervention
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.content.process}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Intervention soignée</h3>
                      <p className="text-gray-600">Respect total de votre propriété avec techniques non destructives</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Outils professionnels</h3>
                      <p className="text-gray-600">Équipement de pointe pour tous types de serrures</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Garantie 1 an</h3>
                      <p className="text-gray-600">Tous nos travaux sont garantis pour votre tranquillité</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs et urgence */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Euro className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Tarifs transparents</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  {service.content.price}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Urgence 24h/24</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  {service.content.emergency}
                </p>
              </motion.div>
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