import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { DoorOpen, Lock, Key, Shield, Clock, Star, Phone, CheckCircle, AlertTriangle, Euro, Award } from "lucide-react";
import Footer from "../components/Footer";

const ServicePage = ({ type }) => {
  const services = {
    "ouverture-porte": {
      title: "Ouverture de porte claquée dans le Var",
      subtitle: "Intervention 30 min 24h/24",
      description: "Serrurier Var – Ouverture porte claquée 24h/24, devis gratuit, agréé assurances, intervention 30 min sans casse.",
      icon: DoorOpen,
      image: "https://images.pexels.com/photos/830899/pexels-photo-830899.jpeg",
      color: "from-blue-500 to-blue-600",
      metaTitle: "Ouverture Porte Claquée Var 24h/24 – Intervention 30 min – Serrure Minute",
      canonical: "https://serrure-minute-var.com/urgences/ouverture-porte-claquee",
      testimonials: [
        {
          name: "Sonia",
          city: "Fréjus",
          text: "Intervention rapide à Fréjus un dimanche soir, porte ouverte en 15 minutes sans aucune casse. Je recommande !"
        },
        {
          name: "Karim",
          city: "Toulon", 
          text: "Clé oubliée à l'intérieur, dépannage en moins de 30 min, prix annoncé à l'avance, parfait."
        },
        {
          name: "Marc",
          city: "Hyères",
          text: "Service très professionnel, disponible même un jour férié, merci encore !"
        }
      ],
      content: {
        intro: "Vous êtes bloqué dehors à cause d'une porte claquée ? Pas de panique : Serrure Minute intervient en moins de 30 minutes dans tout le Var, de Fréjus à Toulon. Notre serrurier, agréé assurances, vous dépanne 24h/24, 7j/7, même les dimanches et jours fériés, y compris Noël et le 1er janvier. Avec notre devis gratuit et nos prix fixes, vous bénéficiez d'une ouverture sans casse et d'une garantie d'un an. Appelez maintenant pour une intervention immédiate.",
        causes: [
          "Courant d'air pendant l'été avec fenêtres ouvertes",
          "Clés oubliées à l'intérieur en sortant rapidement",
          "Enfants qui referment la porte en jouant",
          "Défauts de la serrure ou mécanismes fatigués",
          "Claquage inattendu dû à l'usure"
        ],
        causesText: "Dans le Var, beaucoup de portes claquées proviennent d'un simple courant d'air, surtout pendant l'été lorsque les fenêtres restent ouvertes. Il est également fréquent d'oublier ses clés à l'intérieur en sortant rapidement. Les enfants, en jouant, referment parfois la porte sans prévenir. Enfin, des défauts de la serrure ou des mécanismes fatigués peuvent entraîner un claquage inattendu. Ces situations sont courantes et nécessitent un professionnel formé pour ouvrir sans dégât.",
        process: "Nos artisans utilisent des outils précis, comme la radio, le by-pass ou le crochet professionnel, afin d'ouvrir votre porte claquée sans casser la serrure ni détériorer votre porte. Nous respectons toujours l'intégrité de votre installation. Notre savoir-faire garantit une remise en service immédiate, évitant tout remplacement inutile et limitant vos frais.",
        zones: ["Fréjus", "Toulon", "Hyères", "Draguignan", "La Seyne-sur-Mer", "Saint-Raphaël", "Brignoles", "Sanary-sur-Mer", "Six-Fours-les-Plages"],
        price: "Nous proposons un devis gratuit annoncé avant l'intervention. Nos tarifs sont transparents et fixes, sans surprise ni surfacturation. Dans la majorité des cas, l'ouverture d'une porte claquée est remboursée par votre assurance habitation ou votre carte bancaire (selon les clauses de votre contrat). Vous bénéficiez également d'une garantie d'un an sur notre prestation.",
        emergency: "Serrure Minute intervient sous 30 minutes partout dans le Var. Interventions possibles 24h/24, 7j/7, y compris jours fériés.",
        faqs: [
          {
            question: "Quel est le prix d'une ouverture de porte claquée ?",
            answer: "Cela dépend de l'heure et du type de porte. Un devis gratuit est annoncé à l'avance, sans surprise."
          },
          {
            question: "Est-ce que vous intervenez la nuit ou le dimanche ?",
            answer: "Oui, 24h/24, 7j/7, même les jours fériés comme Noël."
          },
          {
            question: "Est-ce remboursé par l'assurance ?",
            answer: "Dans la plupart des cas, oui. Nous vous aidons à remplir la déclaration si besoin."
          },
          {
            question: "Ma porte sera-t-elle endommagée ?",
            answer: "Non, nos techniques garantissent une ouverture sans dégât."
          }
        ],
        engagements: [
          "Intervention 30 minutes",
          "Devis gratuit", 
          "Garantie 1 an",
          "Remboursement par assurance habitation / CB",
          "Artisan agréé assurances"
        ]
      }
    },
    "serrure-bloquee": {
      title: "Serrure Bloquée ou Clé Cassée",
      subtitle: "Dépannage Urgence Var 24h/24",
      description: "Clé qui tourne dans le vide ? Serrure coincée ou clé cassée ? Serrure Minute vous dépanne en urgence dans tout le Var (83), 24h/24 et 7j/7. Intervention en moins de 30 minutes.",
      icon: Lock,
      image: "https://images.pexels.com/photos/8985454/pexels-photo-8985454.jpeg",
      color: "from-purple-500 to-purple-600",
      metaTitle: "Serrure Bloquée ou Clé Cassée Var (83) – Dépannage 24/7",
      canonical: "https://serrure-minute-var.com/urgences/serrure-bloquee-clef-cassee",
      testimonial: {
        name: "Benoît",
        city: "Hyères",
        text: "Clé cassée un samedi soir, intervention en 20 minutes, serrure intacte après le passage. Merci !"
      },
      content: {
        intro: "Clé qui tourne dans le vide ? Serrure coincée ou clé cassée à l'intérieur ? Serrure Minute vous dépanne en urgence dans tout le Var (83), 24h/24 et 7j/7. Nos artisans expérimentés interviennent en moins de 30 minutes avec du matériel professionnel pour résoudre la panne sans dégâts inutiles.",
        causes: [
          "Usure naturelle du mécanisme",
          "Tentative d'effraction",
          "Clé abîmée ou forcée",
          "Gel et humidité",
          "Corps étranger dans le cylindre",
          "Vieillissement de la serrure"
        ],
        process: "Notre méthode : extraction de clé cassée sans abîmer le barillet, déblocage serrure grippée, remplacement si nécessaire avec marque certifiée, garantie 1 an. Nos serruriers diagnostiquent sur place et proposent la meilleure solution : réparation ou changement de cylindre.",
        price: "À partir de 100€, devis gratuit avant intervention. Agréé assurances, garantie 1 an minimum sur nos interventions, sans majoration cachée, devis transparent.",
        emergency: "30 minutes max. Disponibles 24/7, Var entier, même villages isolés. Prix annoncé d'avance.",
        zones: "Toulon et environs, Fréjus / Saint-Raphaël, Draguignan / Haut Var, Brignoles."
      }
    },
    "perte-cles": {
      title: "Perte de Clés",
      subtitle: "Serrurier Urgence Var 24/7",
      description: "Vous avez perdu vos clés ? Pas de panique. Serrure Minute intervient dans tout le Var, 24h/24, 7j/7, même jours fériés, pour ouvrir votre porte et si besoin remplacer votre serrure sur place.",
      icon: Key,
      image: "https://images.pexels.com/photos/115642/pexels-photo-115642.jpeg",
      color: "from-green-500 to-green-600",
      metaTitle: "Perte de Clés Var (83) – Serrurier Dépannage 24/7",
      canonical: "https://serrure-minute-var.com/urgences/perte-cles",
      testimonial: {
        name: "Isabelle",
        city: "Draguignan",
        text: "J'ai perdu mes clés un dimanche, technicien venu en 30 min, serrure remplacée sans surprise."
      },
      content: {
        intro: "Vous avez perdu vos clés ? Pas de panique. Serrure Minute intervient dans tout le Var, 24h/24, 7j/7, même jours fériés, pour ouvrir votre porte et si besoin remplacer votre serrure sur place.",
        causes: [
          "Perte accidentelle des clés",
          "Vol ou cambriolage de voiture",
          "Clés oubliées dans un lieu public",
          "Clés perdues lors d'un déménagement",
          "Trousseau égaré avec toutes les clés",
          "Clés cassées qui ne fonctionnent plus"
        ],
        process: "Notre méthode : ouverture propre, remplacement de cylindre si nécessaire, devis gratuit avant intervention, pièces certifiées, garantie 1 an. En cas de vol ou de perte, le risque d'intrusion est réel. Mieux vaut remplacer immédiatement le cylindre pour protéger votre domicile et faire valoir votre assurance.",
        price: "Souvent remboursé par votre assurance habitation ou carte bleue (selon conditions). La serrure peut être remplacée si vous le souhaitez, pour la sécurité, nous le faisons sur place.",
        emergency: "Moins de 30 min généralement. 24/7, week-ends et jours fériés inclus. Partout dans le Var.",
        zones: "Intervention dans tout le Var : Toulon, Fréjus, Draguignan, Hyères, La Seyne et tous les villages."
      }
    },
    "apres-cambriolage": {
      title: "Sécurisation Après Cambriolage",
      subtitle: "Intervention Var 24/24",
      description: "Vous venez de subir un cambriolage ? Serrure Minute sécurise immédiatement votre porte et vos serrures dans tout le Var, 24h/24, 7j/7, y compris week-ends et jours fériés.",
      icon: Shield,
      image: "https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg",
      color: "from-red-500 to-red-600",
      metaTitle: "Sécurisation Après Cambriolage Var (83) – Serrurier 24/24",
      canonical: "https://serrure-minute-var.com/urgences/apres-cambriolage",
      testimonial: {
        name: "Karim",
        city: "La Seyne",
        text: "Cambriolage un samedi nuit, intervention en 25 min avec sécurisation de la porte, rassurant et efficace."
      },
      content: {
        intro: "Vous venez de subir un cambriolage ? Serrure Minute sécurise immédiatement votre porte et vos serrures dans tout le Var, 24h/24, 7j/7, y compris week-ends et jours fériés.",
        causes: [
          "Porte fracturée ou forcée",
          "Serrure endommagée par effraction",
          "Fenêtre brisée nécessitant condamnation",
          "Points de fermeture multiples endommagés",
          "Cylindre crocheté ou percé",
          "Système de sécurité neutralisé"
        ],
        process: "Nos solutions : blindage provisoire, changement de cylindre, remplacement de serrure, pose de barre de pivot, devis gratuit avant travaux, travail propre garanti. Une porte fracturée ou une serrure forcée vous expose à un nouveau vol dans les heures suivantes. Nous intervenons sous 30 minutes pour bloquer tout risque.",
        price: "Oui dans la majorité des contrats. Agréé assurances, devis transmis à votre assureur, garantie 1 an sur le matériel, intervention facturable le jour-même.",
        emergency: "Oui, 24/7, sans surcoût caché. Nous pouvons installer un blindage temporaire sur place en moins d'une heure.",
        zones: "Toulon, Fréjus, Draguignan, Hyères, tous les villages du Var."
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Questions fréquentes</h2>
            <div className="space-y-6">
              {type === 'ouverture-porte' && (
                <>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Combien coûte une ouverture de porte claquée ?</h3>
                    <p className="text-gray-700">À partir de 90€, devis gratuit avant intervention.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Intervenez-vous la nuit ?</h3>
                    <p className="text-gray-700">Oui, 24h/24, 7j/7, jours fériés inclus.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Est-ce que vous percez la serrure ?</h3>
                    <p className="text-gray-700">Jamais si la porte n'est pas verrouillée, nous l'ouvrons proprement.</p>
                  </div>
                </>
              )}
              {type === 'serrure-bloquee' && (
                <>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Combien coûte le déblocage d'une serrure ?</h3>
                    <p className="text-gray-700">À partir de 100€, devis gratuit avant intervention.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Est-ce garanti ?</h3>
                    <p className="text-gray-700">Oui, 1 an minimum sur nos interventions.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Intervenez-vous la nuit ?</h3>
                    <p className="text-gray-700">Oui, sans majoration cachée, devis transparent.</p>
                  </div>
                </>
              )}
              {type === 'perte-cles' && (
                <>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Est-ce que je suis remboursé ?</h3>
                    <p className="text-gray-700">Souvent oui, par votre assurance habitation ou carte bleue (selon conditions).</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Est-ce que la serrure est remplacée ?</h3>
                    <p className="text-gray-700">Si vous le souhaitez, pour la sécurité, nous le faisons sur place.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Combien de temps pour l'intervention ?</h3>
                    <p className="text-gray-700">Moins de 30 min généralement.</p>
                  </div>
                </>
              )}
              {type === 'apres-cambriolage' && (
                <>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Est-ce pris en charge par l'assurance ?</h3>
                    <p className="text-gray-700">Oui dans la majorité des contrats.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Pouvez-vous installer un blindage temporaire ?</h3>
                    <p className="text-gray-700">Oui, sur place en moins d'une heure.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Intervenez-vous la nuit ?</h3>
                    <p className="text-gray-700">Oui, 24/7, sans surcoût caché.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Zones d'intervention</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">Var Est</h3>
                <p className="text-gray-700">Fréjus, Saint-Raphaël, Puget-sur-Argens, Roquebrune-sur-Argens</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">Var Ouest</h3>
                <p className="text-gray-700">Toulon, Hyères, La Seyne-sur-Mer, Six-Fours-les-Plages</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-900 mb-3">Haut-Var</h3>
                <p className="text-gray-700">Draguignan, Brignoles, Lorgues, Flayosc</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Témoignage client</h2>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
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
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-red-50 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>07 86 35 61 39</span>
            </a>
            <Link
              to="/"
              className="bg-red-700 text-white px-8 py-4 rounded-full font-bold hover:bg-red-800 transition-colors"
            >
              {type === 'ouverture-porte' ? 'J\'ai besoin d\'une ouverture immédiate' : 
               type === 'serrure-bloquee' ? 'J\'ai besoin d\'un dépannage immédiat' :
               type === 'perte-cles' ? 'Besoin d\'une ouverture immédiate' :
               'Sécuriser mon logement maintenant'}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default ServicePage;