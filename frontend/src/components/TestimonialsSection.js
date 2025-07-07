import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sophie M.",
      city: "Fréjus",
      rating: 5,
      text: "Intervention très rapide après que ma porte se soit claquée. L'artisan est arrivé en 20 minutes et a ouvert ma porte sans aucun dégât. Service professionnel et prix correct.",
      image: "https://images.pexels.com/photos/8147704/pexels-photo-8147704.jpeg",
      service: "Ouverture porte claquée"
    },
    {
      name: "Mathieu L.",
      city: "Toulon",
      rating: 5,
      text: "Suite à un cambriolage, j'ai appelé Serrure Minute. Ils sont venus immédiatement sécuriser ma porte et changer la serrure. Travail impeccable et prise en charge assurance.",
      image: "https://images.pexels.com/photos/8147704/pexels-photo-8147704.jpeg",
      service: "Après cambriolage"
    },
    {
      name: "Isabelle R.",
      city: "Draguignan",
      rating: 5,
      text: "J'ai perdu mes clés un dimanche soir. Malgré l'heure tardive, un serrurier est venu m'ouvrir ma porte. Service de qualité, je recommande vivement !",
      image: "https://images.pexels.com/photos/8147704/pexels-photo-8147704.jpeg",
      service: "Perte de clés"
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
            Avis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              clients
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits dans tout le Var
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-600">• 287 avis</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 group-hover:border-blue-200 h-full">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-blue-500 opacity-50" />
                </div>

                {/* Service Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-4">
                  {testimonial.service}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.city}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Votre satisfaction est notre priorité
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-green-100">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1200+</div>
              <div className="text-green-100">Interventions/an</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15min</div>
              <div className="text-green-100">Délai moyen</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-green-100">Agréé assurances</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;