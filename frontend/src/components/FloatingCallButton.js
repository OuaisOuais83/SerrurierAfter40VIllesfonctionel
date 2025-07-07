import React from "react";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCallButton = () => {
  const phoneNumber = "+33786356139";

  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 transform hover:scale-110"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Phone className="w-6 h-6" />
    </motion.a>
  );
};

export default FloatingCallButton;