import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesSection from "../components/ServicesSection";
import ZonesSection from "../components/ZonesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      <Helmet>
        <title>Serrurier Urgence Var (83) – Intervention 24h/24 en 30min</title>
        <meta 
          name="description" 
          content="Serrurier Minute : dépannage, ouverture de porte, changement serrure Var 83. Interventions 30 min, 24h/24, devis gratuit, agréé assurances." 
        />
        <meta name="keywords" content="serrurier var, urgence serrure, ouverture porte, dépannage serrure, serrurier 83" />
        <meta property="og:title" content="Serrurier Urgence Var – Serrure Minute 24/7" />
        <meta property="og:description" content="Intervention urgente serrurier dans le Var 83 - 24h/24 et 7j/7" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1529261233619-6afa28f5da3d" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://serrure-minute-var.com/" />
      </Helmet>

      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <ZonesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default HomePage;