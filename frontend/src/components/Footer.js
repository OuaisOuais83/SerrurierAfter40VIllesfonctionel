import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Lock, Star, Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Ouverture porte claquée", link: "/urgences/ouverture-porte-claquee" },
    { name: "Serrure bloquée", link: "/urgences/serrure-bloquee-clef-cassee" },
    { name: "Perte de clés", link: "/urgences/perte-cles" },
    { name: "Après cambriolage", link: "/urgences/apres-cambriolage" }
  ];

  const zones = [
    { name: "Serrurier Toulon", link: "/zones/serrurier-toulon" },
    { name: "Serrurier Fréjus", link: "/zones/serrurier-frejus" },
    { name: "Serrurier Draguignan", link: "/zones/serrurier-draguignan" },
    { name: "Serrurier Hyères", link: "/zones/serrurier-hyeres" },
    { name: "Serrurier La Seyne", link: "/zones/serrurier-la-seyne" }
  ];

  const cities = [
    "Toulon", "Fréjus", "Draguignan", "Hyères", "La Seyne-sur-Mer",
    "Saint-Tropez", "Sainte-Maxime", "Brignoles", "Cogolin", "Grimaud",
    "Le Luc", "Vidauban", "Lorgues", "Flayosc", "Salernes"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Pre-footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Urgence serrurerie ? Appelez maintenant !</h3>
          <p className="text-blue-100 mb-6">
            Intervention 24h/24 - 7j/7 dans tout le Var en moins de 30 minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33786356139"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>07 86 35 61 39</span>
            </a>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-800 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-900 transition-colors"
            >
              Devis gratuit
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Serrure Minute</h3>
                  <p className="text-gray-400 text-sm">Serrurier Var (83)</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm">135 avenue Victor Hugo</p>
                    <p className="text-sm">83600 Fréjus</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href="tel:+33786356139" className="text-sm hover:text-blue-400 transition-colors">
                    +33 7 86 35 61 39
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <p className="text-sm">24h/24 - 7j/7 - Jours fériés inclus</p>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm">4.9/5</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Agréé assurances</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services d'urgence</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.link}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Zones */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Zones d'intervention</h4>
              <ul className="space-y-2">
                {zones.map((zone, index) => (
                  <li key={index}>
                    <Link
                      to={zone.link}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {zone.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cities */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Villes desservies</h4>
              <div className="flex flex-wrap gap-2">
                {cities.map((city, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Q</span>
                </div>
                <span className="text-sm text-gray-400">Qualibat</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-green-400" />
                <span className="text-sm text-gray-400">Agréé Assurances</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-400">Certifié qualité</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © {currentYear} Serrure Minute. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link to="/mentions-legales" className="text-sm text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-sm text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;