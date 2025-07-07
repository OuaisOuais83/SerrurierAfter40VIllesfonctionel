import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Qui paie le serrurier ?",
      answer: "Dans la plupart des cas, votre assurance habitation ou votre carte bancaire peut prendre en charge l'intervention. Nous sommes agréés par les principales compagnies d'assurance. Nous vous aidons dans toutes les démarches administratives."
    },
    {
      question: "Intervenez-vous de nuit ?",
      answer: "Oui, nous intervenons 24h/24 et 7j/7, y compris la nuit, les week-ends et les jours fériés. Notre équipe d'astreinte est toujours disponible pour les urgences dans tout le Var."
    },
    {
      question: "Puis-je être remboursé ?",
      answer: "Oui, nos interventions sont souvent remboursées par votre assurance habitation ou votre carte bancaire (selon les conditions de votre contrat). Nous vous fournissons tous les documents nécessaires pour votre remboursement."
    },
    {
      question: "En combien de temps arrivez-vous ?",
      answer: "Nous nous engageons à intervenir dans un délai maximum de 30 minutes dans tout le département du Var. En général, nos équipes arrivent en 15 à 20 minutes selon votre localisation."
    },
    {
      question: "Vos tarifs sont-ils fixes ?",
      answer: "Nous pratiquons des tarifs transparents et sans surprise. Un devis gratuit vous est remis avant toute intervention. Nos prix sont conformes aux tarifs officiels de la profession."
    },
    {
      question: "Travaillez-vous sans dégât ?",
      answer: "Oui, nos artisans utilisent des techniques professionnelles pour ouvrir vos portes sans dégât dans 95% des cas. Nous privilégions toujours les méthodes non destructives."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
            FAQ{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              express
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Toutes les réponses à vos questions sur nos services de serrurerie d'urgence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pl-14">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Emergency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Vous avez une autre question ?
            </h3>
            <p className="text-blue-100 mb-6">
              Nos conseillers sont à votre disposition 24h/24 pour répondre à toutes vos questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33786356139"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Appelez-nous</span>
              </a>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-700 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors"
              >
                Demander un devis
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;