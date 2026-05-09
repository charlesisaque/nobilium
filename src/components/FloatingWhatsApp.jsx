import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/557191804800"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 cursor-pointer border-2 border-white/20"
      aria-label="Fale conosco no WhatsApp"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut" 
        }}
      >
        <FaWhatsapp size={36} />
      </motion.div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
