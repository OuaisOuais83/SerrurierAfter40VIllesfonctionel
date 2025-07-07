import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, Star } from "lucide-react";

const CertificationLogos = () => {
  const certifications = [
    {
      name: "Qualibat",
      description: "Certification qualité BTP",
      icon: Award,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50"
    },
    {
      name: "Agréé Assurances",
      description: "Toutes compagnies",
      icon: Shield,
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50"
    },
    {
      name: "Artisan Certifié",
      description: "Qualité garantie",
      icon: CheckCircle,
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-50"
    },
    {
      name: "Service Premium",
      description: "4.9/5 - 287 avis",
      icon: Star,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Certifications & Agréments
          </h3>
          <p className="text-gray-600">
            Votre sécurité est notre priorité - Certifications officielles
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`${cert.bgColor} rounded-2xl p-6 text-center border-2 border-transparent group-hover:border-gray-200 transition-all duration-300 hover:shadow-lg`}>
                {/* Logo/Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Certification Name */}
                <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">
                  {cert.name}
                </h4>
                
                {/* Description */}
                <p className="text-xs md:text-sm text-gray-600">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center items-center gap-6 pt-6 border-t border-gray-200"
        >
          <div className="flex items-center space-x-2 text-gray-700">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">Q</span>
            </div>
            <span className="text-sm font-medium">Qualibat RGE</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-700">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-medium">Agréé Toutes Assurances</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-700">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-medium">Artisan Certifié</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-700">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium">4.9/5 • 287 avis Google</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationLogos;