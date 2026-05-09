import { motion } from 'framer-motion';
import { FaCrown, FaStar, FaGlobe, FaShieldAlt, FaBolt, FaGem } from 'react-icons/fa';

const differentials = [
  { id: 1, title: 'Atendimento Personalizado', icon: <FaCrown size={32} />, desc: 'Soluções feitas sob medida para cada cliente.' },
  { id: 2, title: 'Experiência Premium', icon: <FaStar size={32} />, desc: 'Alto padrão de qualidade em todos os nossos serviços.' },
  { id: 3, title: 'Mobilidade Completa', icon: <FaGlobe size={32} />, desc: 'Conectamos você a qualquer destino no mundo.' },
  { id: 4, title: 'Segurança e Confiança', icon: <FaShieldAlt size={32} />, desc: 'Tranquilidade e proteção do início ao fim da viagem.' },
  { id: 5, title: 'Atendimento Ágil', icon: <FaBolt size={32} />, desc: 'Respostas rápidas e suporte eficiente quando você precisa.' },
  { id: 6, title: 'Soluções Exclusivas', icon: <FaGem size={32} />, desc: 'Acesso a experiências únicas e reservadas.' },
];

const Differentials = () => {
  return (
    <section id="differentials" className="w-full py-24 bg-nobilium-dark relative">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-nobilium-white to-transparent"></div>
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-nobilium-white mb-4"
          >
            Nossos Diferenciais
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-nobilium-gold mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-nobilium-gold/20 flex items-center justify-center text-nobilium-gold mb-6 group-hover:bg-nobilium-gold group-hover:text-nobilium-dark transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-nobilium-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
