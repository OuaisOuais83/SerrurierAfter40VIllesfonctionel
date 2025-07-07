import React from "react";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCallButton = () => {
  const phoneNumber = "+33786356139";

  return (
    <>
      {/* Floating Call Button - MEGA Visible */}
      <motion.a
        href={`tel:${phoneNumber}`}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-5 rounded-full shadow-2xl z-50 transition-all duration-300 transform hover:scale-110 border-4 border-white"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        style={{ 
          boxShadow: "0 10px 25px rgba(239, 68, 68, 0.4), 0 0 0 1px rgba(239, 68, 68, 0.1)" 
        }}
      >
        <Phone className="w-8 h-8" />
        
        {/* Pulsing Ring Effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-red-400"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.a>

      {/* Mobile Bottom Bar Call Button - Additional visibility */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-500 to-red-600 text-white p-4 z-40 md:hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
      >
        <a 
          href={`tel:${phoneNumber}`}
          className="w-full bg-red-700 hover:bg-red-800 text-white px-6 py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 transition-all duration-300"
        >
          <Phone className="w-6 h-6" />
          <div className="text-center">
            <div className="text-sm opacity-90">URGENCE 24h/24</div>
            <div className="font-black text-xl">07 86 35 61 39</div>
          </div>
        </a>
      </motion.div>

      {/* Add padding to body on mobile to account for bottom bar */}
      <style jsx>{`
        @media (max-width: 768px) {
          body {
            padding-bottom: 100px;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingCallButton;