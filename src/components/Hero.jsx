import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import heroBg from '../assets/hero_bg.png';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-nobilium-dark/80 via-nobilium-dark/60 to-nobilium-dark/90"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-8 max-w-[1200px] mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-nobilium-white mb-6 tracking-wide drop-shadow-lg font-serif"
        >
          Você <span className="text-nobilium-gold italic">sonha.</span> Nós realizamos.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-2xl text-gray-200 mb-10 max-w-[800px] font-light leading-relaxed"
        >
          Soluções completas em turismo, mobilidade e experiências exclusivas.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer bg-nobilium-gold text-nobilium-dark px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-nobilium-gold/20"
          >
            Solicitar Orçamento
          </Link>
          <a 
            href="https://wa.me/557191804800"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-transparent border-2 border-nobilium-white text-nobilium-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-nobilium-white hover:text-nobilium-dark hover:scale-105 transition-all duration-300"
          >
            <FaWhatsapp size={24} />
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span className="text-nobilium-white text-xs uppercase tracking-widest mb-2 opacity-70">Role para explorar</span>
        <div className="w-[1px] h-[50px] bg-gradient-to-b from-nobilium-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
