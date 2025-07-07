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
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Serrure Minute</h1>
              <p className="text-xs text-gray-600">Var (83)</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Accueil
            </Link>
            <div className="group relative">
              <span className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Services
              </span>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 space-y-2">
                  <Link to="/urgences/ouverture-porte-claquee" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">
                    Ouverture porte claquée
                  </Link>
                  <Link to="/urgences/serrure-bloquee-clef-cassee" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">
                    Serrure bloquée
                  </Link>
                  <Link to="/urgences/perte-cles" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">
                    Perte de clés
                  </Link>
                  <Link to="/urgences/apres-cambriolage" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">
                    Après cambriolage
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative">
              <span className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Zones
              </span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 space-y-2">
                  <Link to="/zones/serrurier-toulon" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">
                    Toulon
                  </Link>
                  <Link to="/zones/serrurier-frejus" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">
                    Fréjus
                  </Link>
                  <Link to="/zones/serrurier-draguignan" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">
                    Draguignan
                  </Link>
                  <Link to="/zones/serrurier-hyeres" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">
                    Hyères
                  </Link>
                  <Link to="/zones/serrurier-la-seyne" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">
                    La Seyne
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Urgence 24h/24 + Phone */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block text-right">
              <p className="text-sm text-red-600 font-semibold">Urgence 24h/24</p>
              <p className="text-xs text-gray-600">7j/7 - Jours fériés</p>
            </div>
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Appeler</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
          >
            <div className="space-y-4">
              <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">
                Accueil
              </Link>
              <div className="space-y-2">
                <p className="font-semibold text-gray-900">Services</p>
                <div className="pl-4 space-y-1">
                  <Link to="/urgences/ouverture-porte-claquee" className="block py-1 text-sm text-gray-700 hover:text-blue-600 transition-colors">
                    Ouverture porte claquée
                  </Link>
                  <Link to="/urgences/serrure-bloquee-clef-cassee" className="block py-1 text-sm text-gray-700 hover:text-blue-600 transition-colors">
                    Serrure bloquée
                  </Link>
                  <Link to="/urgences/perte-cles" className="block py-1 text-sm text-gray-700 hover:text-blue-600 transition-colors">
                    Perte de clés
                  </Link>
                  <Link to="/urgences/apres-cambriolage" className="block py-1 text-sm text-gray-700 hover:text-blue-600 transition-colors">
                    Après cambriolage
                  </Link>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-900">Zones</p>
                <div className="pl-4 space-y-1">
                  <Link to="/zones/serrurier-toulon" className="block py-1 text-sm text-gray-700 hover:text-blue-600 transition-colors">
                    Toulon
                  </Link>
                  <Link to="/zones/serrurier-frejus" className="block py-1 text-sm text-gray-700 hover:text-blue-600 transition-colors">
                    Fréjus
                  </Link>
                  <Link to="/zones/serrurier-draguignan" className="block py-1 text-sm text-gray-700 hover:text-blue-600 transition-colors">
                    Draguignan
                  </Link>
                  <Link to="/zones/serrurier-hyeres" className="block py-1 text-sm text-gray-700 hover:text-blue-600 transition-colors">
                    Hyères
                  </Link>
                  <Link to="/zones/serrurier-la-seyne" className="block py-1 text-sm text-gray-700 hover:text-blue-600 transition-colors">
                    La Seyne
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;