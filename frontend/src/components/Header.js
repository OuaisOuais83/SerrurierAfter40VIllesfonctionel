import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, Lock } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneNumber = "+33786356139";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-2xl border-b border-gray-200"
          : "bg-white/95 backdrop-blur-lg shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 py-2">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2.5 rounded-xl shadow-lg">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Serrure Minute</h1>
              <p className="text-xs text-blue-600 font-medium">Var (83) • 24h/24</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
              Accueil
            </Link>
            <div className="group relative">
              <span className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                Services Urgence
              </span>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 space-y-1">
                  <Link to="/urgences/ouverture-porte-claquee" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                    🚪 Ouverture porte claquée
                  </Link>
                  <Link to="/urgences/serrure-bloquee-clef-cassee" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                    🔒 Serrure bloquée / Clé cassée
                  </Link>
                  <Link to="/urgences/perte-cles" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                    🔑 Perte de clés
                  </Link>
                  <Link to="/urgences/apres-cambriolage" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                    🛡️ Sécurisation après cambriolage
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative">
              <span className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                Zones Var
              </span>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 space-y-1">
                  <Link to="/zones/serrurier-toulon" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                    📍 Serrurier Toulon
                  </Link>
                  <Link to="/zones/serrurier-frejus" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                    📍 Serrurier Fréjus
                  </Link>
                  <Link to="/zones/serrurier-draguignan" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                    📍 Serrurier Draguignan
                  </Link>
                  <Link to="/zones/serrurier-hyeres" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                    📍 Serrurier Hyères
                  </Link>
                  <Link to="/zones/serrurier-la-seyne" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                    📍 Serrurier La Seyne
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Urgence Notice + MEGA Call Button */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block text-right">
              <p className="text-sm text-red-600 font-bold">🚨 URGENCE 24h/24</p>
              <p className="text-xs text-gray-700 font-medium">Intervention 30min</p>
            </div>
            
            {/* MEGA Call Button - Beaucoup plus gros et visible */}
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-4 md:px-8 md:py-4 rounded-2xl font-bold text-base md:text-lg flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-red-400"
            >
              <Phone className="w-6 h-6 md:w-7 md:h-7" />
              <div className="text-left">
                <div className="text-xs md:text-sm opacity-90">Appelez</div>
                <div className="font-black">07 86 35 61 39</div>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors ml-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-4 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
          >
            <div className="space-y-6">
              <Link to="/" className="block py-3 text-gray-800 hover:text-blue-600 transition-colors font-medium text-lg">
                🏠 Accueil
              </Link>
              
              <div className="space-y-3">
                <p className="font-bold text-gray-900 text-lg">Services Urgence</p>
                <div className="pl-4 space-y-2">
                  <Link to="/urgences/ouverture-porte-claquee" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                    🚪 Ouverture porte claquée
                  </Link>
                  <Link to="/urgences/serrure-bloquee-clef-cassee" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                    🔒 Serrure bloquée / Clé cassée
                  </Link>
                  <Link to="/urgences/perte-cles" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                    🔑 Perte de clés
                  </Link>
                  <Link to="/urgences/apres-cambriolage" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                    🛡️ Après cambriolage
                  </Link>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="font-bold text-gray-900 text-lg">Zones Var (83)</p>
                <div className="pl-4 space-y-2">
                  <Link to="/zones/serrurier-toulon" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                    📍 Toulon
                  </Link>
                  <Link to="/zones/serrurier-frejus" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                    📍 Fréjus
                  </Link>
                  <Link to="/zones/serrurier-draguignan" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                    📍 Draguignan
                  </Link>
                  <Link to="/zones/serrurier-hyeres" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                    📍 Hyères
                  </Link>
                  <Link to="/zones/serrurier-la-seyne" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                    📍 La Seyne
                  </Link>
                </div>
              </div>

              {/* Mobile Emergency Call */}
              <div className="pt-4 border-t border-gray-200">
                <a 
                  href={`tel:${phoneNumber}`}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 transition-all duration-300 shadow-2xl"
                >
                  <Phone className="w-7 h-7" />
                  <div className="text-center">
                    <div className="text-sm opacity-90">URGENCE</div>
                    <div className="font-black text-xl">07 86 35 61 39</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;