import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { DoorOpen, Lock, Key, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: DoorOpen,
      title: "Ouverture de porte claquée",
      description: "Votre porte s'est claquée ? Nous intervenons rapidement pour l'ouvrir sans dégât ni casse.",
      features: ["Sans dégât", "Intervention rapide", "Devis gratuit"],
      link: "/urgences/ouverture-porte-claquee",
      image: "https://images.pexels.com/photos/830899/pexels-photo-830899.jpeg",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Lock,
      title: "Serrure bloquée / clé cassée",
      description: "Serrure qui refuse de s'ouvrir ou clé cassée dans la serrure ? Nos experts résolvent le problème.",
      features: ["Diagnostic gratuit", "Réparation ou remplacement", "Garantie 1 an"],
      link: "/urgences/serrure-bloquee-clef-cassee",
      image: "https://images.pexels.com/photos/8985454/pexels-photo-8985454.jpeg",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Key,
      title: "Perte de clés",
      description: "Vous avez perdu vos clés ? Nous vous ouvrons votre porte et sécurisons votre domicile.",
      features: ["Ouverture immédiate", "Changement de serrure", "Remise de nouvelles clés"],
      link: "/urgences/perte-cles",
      image: "https://images.pexels.com/photos/115642/pexels-photo-115642.jpeg",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Sécurisation après cambriolage",
      description: "Après une effraction, nous sécurisons immédiatement votre domicile pour votre tranquillité.",
      features: ["Intervention d'urgence", "Sécurisation immédiate", "Prise en charge assurance"],
      link: "/urgences/apres-cambriolage",
      image: "https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos services{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              urgents
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de services d'urgence disponibles 24h/24 dans tout le Var
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <Link to={service.link} className="block">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-blue-200">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Icon */}
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                        En savoir plus →
                      </span>
                      <div className="text-sm text-gray-500">
                        Intervention 30min
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Emergency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Urgence ? Appelez-nous immédiatement !
            </h3>
            <p className="text-red-100 mb-6">
              Nos équipes sont prêtes à intervenir dans tout le Var (83) en moins de 30 minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33786356139"
                className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-red-50 transition-colors"
              >
                📞 07 86 35 61 39
              </a>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-700 text-white px-8 py-3 rounded-full font-bold hover:bg-red-800 transition-colors"
              >
                Devis gratuit
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;