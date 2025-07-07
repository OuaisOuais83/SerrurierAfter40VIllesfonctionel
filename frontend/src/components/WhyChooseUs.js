import React from "react";
import { motion } from "framer-motion";
import { Clock, Shield, Award, DollarSign } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: "Intervention sous 30 minutes",
      subtitle: "Même jours fériés",
      description: "Notre équipe de serruriers professionnels intervient en urgence dans tout le Var en moins de 30 minutes, 24h/24 et 7j/7, même les jours fériés.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Garantie 1 an",
      subtitle: "Remboursé assurance habitation/CB",
      description: "Tous nos travaux sont garantis 1 an. Nos interventions sont souvent prises en charge par votre assurance habitation ou votre carte bancaire.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      title: "Artisan certifié Qualibat",
      subtitle: "Agréé Assurances",
      description: "Serrure Minute est certifié Qualibat et agréé par les principales compagnies d'assurance. Votre sécurité est notre priorité.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi choisir{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Serrure Minute
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise reconnue au service de votre sécurité dans tout le département du Var
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full border border-gray-100 group-hover:border-blue-200">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 mb-3">
                      {feature.subtitle}
                    </p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl -z-10 group-hover:from-blue-100 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">30min</div>
              <div className="text-blue-100">Délai maximum</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Service continu</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">287</div>
              <div className="text-blue-100">Avis clients</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Note moyenne</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;