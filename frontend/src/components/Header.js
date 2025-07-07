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
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 max-h-96 overflow-y-auto">
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-3 font-medium">40 villes du Var (83) • Intervention 30min</p>
                  <div className="grid grid-cols-2 gap-1">
                    {/* Villes principales */}
                    <Link to="/zones/serrurier-toulon" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Toulon
                    </Link>
                    <Link to="/zones/serrurier-la-seyne-sur-mer" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 La Seyne-sur-Mer
                    </Link>
                    <Link to="/zones/serrurier-hyeres" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Hyères
                    </Link>
                    <Link to="/zones/serrurier-frejus" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Fréjus
                    </Link>
                    <Link to="/zones/serrurier-draguignan" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Draguignan
                    </Link>
                    <Link to="/zones/serrurier-saint-raphael" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Saint-Raphaël
                    </Link>
                    <Link to="/zones/serrurier-brignoles" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Brignoles
                    </Link>
                    <Link to="/zones/serrurier-six-fours-les-plages" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Six-Fours-les-Plages
                    </Link>
                    <Link to="/zones/serrurier-la-garde" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 La Garde
                    </Link>
                    <Link to="/zones/serrurier-la-valette-du-var" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 La Valette-du-Var
                    </Link>
                    <Link to="/zones/serrurier-saint-maximin-la-sainte-baume" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Saint-Maximin
                    </Link>
                    <Link to="/zones/serrurier-sanary-sur-mer" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Sanary-sur-Mer
                    </Link>
                    <Link to="/zones/serrurier-sainte-maxime" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Sainte-Maxime
                    </Link>
                    <Link to="/zones/serrurier-roquebrune-sur-argens" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Roquebrune-sur-Argens
                    </Link>
                    <Link to="/zones/serrurier-ollioules" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Ollioules
                    </Link>
                    <Link to="/zones/serrurier-cogolin" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Cogolin
                    </Link>
                    <Link to="/zones/serrurier-saint-cyr-sur-mer" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Saint-Cyr-sur-Mer
                    </Link>
                    <Link to="/zones/serrurier-le-pradet" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Le Pradet
                    </Link>
                    <Link to="/zones/serrurier-la-crau" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 La Crau
                    </Link>
                    <Link to="/zones/serrurier-cuers" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Cuers
                    </Link>
                    <Link to="/zones/serrurier-vidauban" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Vidauban
                    </Link>
                    <Link to="/zones/serrurier-sollies-pont" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Solliès-Pont
                    </Link>
                    <Link to="/zones/serrurier-bormes-les-mimosas" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Bormes-les-Mimosas
                    </Link>
                    <Link to="/zones/serrurier-bandol" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Bandol
                    </Link>
                    <Link to="/zones/serrurier-le-beausset" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Le Beausset
                    </Link>
                    <Link to="/zones/serrurier-carqueiranne" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Carqueiranne
                    </Link>
                    <Link to="/zones/serrurier-fayence" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Fayence
                    </Link>
                    <Link to="/zones/serrurier-la-londe-les-maures" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 La Londe-les-Maures
                    </Link>
                    <Link to="/zones/serrurier-le-muy" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Le Muy
                    </Link>
                    <Link to="/zones/serrurier-saint-tropez" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Saint-Tropez
                    </Link>
                    <Link to="/zones/serrurier-lorgues" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Lorgues
                    </Link>
                    <Link to="/zones/serrurier-pierrefeu-du-var" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Pierrefeu-du-Var
                    </Link>
                    <Link to="/zones/serrurier-le-luc" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Le Luc
                    </Link>
                    <Link to="/zones/serrurier-gareoult" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Garéoult
                    </Link>
                    <Link to="/zones/serrurier-grimaud" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Grimaud
                    </Link>
                    <Link to="/zones/serrurier-la-motte" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 La Motte
                    </Link>
                    <Link to="/zones/serrurier-puget-sur-argens" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Puget-sur-Argens
                    </Link>
                    <Link to="/zones/serrurier-carnoules" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Carnoules
                    </Link>
                    <Link to="/zones/serrurier-gonfaron" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Gonfaron
                    </Link>
                    <Link to="/zones/serrurier-cavalaire-sur-mer" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors">
                      📍 Cavalaire-sur-Mer
                    </Link>
                  </div>
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