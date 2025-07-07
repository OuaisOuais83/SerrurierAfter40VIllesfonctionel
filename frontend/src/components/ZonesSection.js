import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone } from "lucide-react";

const ZonesSection = () => {
  const zones = [
    {
      name: "Toulon",
      link: "/zones/serrurier-toulon",
      population: "170 000 hab.",
      time: "15-25 min",
      districts: ["Le Mourillon", "Pont du Las", "La Serinette", "Centre-ville"]
    },
    {
      name: "Fréjus",
      link: "/zones/serrurier-frejus",
      population: "55 000 hab.",
      time: "10-20 min",
      districts: ["Centre-ville", "Plage", "Caïs", "Villeneuve"]
    },
    {
      name: "Draguignan",
      link: "/zones/serrurier-draguignan",
      population: "40 000 hab.",
      time: "20-30 min",
      districts: ["Centre historique", "Malmont", "Sainte-Roseline"]
    },
    {
      name: "Hyères",
      link: "/zones/serrurier-hyeres",
      population: "57 000 hab.",
      time: "15-25 min",
      districts: ["Centre-ville", "Giens", "Porquerolles", "Ayguade"]
    },
    {
      name: "La Seyne-sur-Mer",
      link: "/zones/serrurier-la-seyne",
      population: "65 000 hab.",
      time: "15-25 min",
      districts: ["Centre-ville", "Janas", "Berthe", "Sablettes"]
    },
    {
      name: "Autres communes",
      link: "/",
      population: "Var (83)",
      time: "Max 30 min",
      districts: ["Saint-Tropez", "Cannes", "Antibes", "Brignoles"]
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
            Zones d'intervention{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Var 83
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous intervenons dans tout le département du Var avec des délais optimisés selon votre localisation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((zone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Link to={zone.link} className="block">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 group-hover:border-blue-200 h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {zone.name}
                        </h3>
                        <p className="text-sm text-gray-500">{zone.population}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-green-600 text-sm font-medium">
                        <Clock className="w-4 h-4 mr-1" />
                        {zone.time}
                      </div>
                    </div>
                  </div>

                  {/* Districts */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 mb-2">Quartiers desservis :</p>
                    <div className="flex flex-wrap gap-2">
                      {zone.districts.map((district, districtIndex) => (
                        <span
                          key={districtIndex}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                        >
                          {district}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                        Voir les services →
                      </span>
                      <div className="text-xs text-gray-500">
                        24h/24 • 7j/7
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-white rounded-3xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Couverture géographique complète
            </h3>
            <p className="text-gray-600">
              Notre réseau d'artisans serruriers couvre l'ensemble du département du Var
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">83</div>
                <div className="text-blue-100">Communes desservies</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">30min</div>
                <div className="text-blue-100">Délai maximum</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Disponibilité</div>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="tel:+33786356139"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Intervention immédiate</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ZonesSection;