import { motion } from 'framer-motion';
import { 
  FaPlaneDeparture, 
  FaShip, 
  FaWater, 
  FaBusAlt, 
  FaCarSide, 
  FaPassport, 
  FaUmbrellaBeach 
} from 'react-icons/fa';

const servicesList = [
  { id: 1, title: 'Passagens Aéreas', icon: <FaPlaneDeparture size={40} />, desc: 'Voe para os melhores destinos com conforto e segurança, nacionais e internacionais.' },
  { id: 2, title: 'Transporte Marítimo', icon: <FaShip size={40} />, desc: 'Cruzeiros de luxo e viagens inesquecíveis pelos oceanos.' },
  { id: 3, title: 'Transporte Fluvial', icon: <FaWater size={40} />, desc: 'Navegue por rios encantadores e descubra belezas naturais únicas.' },
  { id: 4, title: 'Transporte Rodoviário', icon: <FaBusAlt size={40} />, desc: 'Viagens terrestres seguras e confortáveis para grupos e fretamentos.' },
  { id: 5, title: 'Locação de Veículos', icon: <FaCarSide size={40} />, desc: 'Carros executivos e utilitários para sua total mobilidade.' },
  { id: 6, title: 'Vistos Consulares', icon: <FaPassport size={40} />, desc: 'Assessoria completa e ágil para emissão de vistos e passaportes.' },
  { id: 7, title: 'Passeios Turísticos', icon: <FaUmbrellaBeach size={40} />, desc: 'Roteiros exclusivos e experiências incríveis no seu destino.' },
];

const Services = () => {
  return (
    <section id="services" className="w-full py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-nobilium-dark mb-4"
          >
            Nossos Serviços
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-nobilium-gold mx-auto"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-gray-600 max-w-2xl mx-auto"
          >
            Oferecemos uma gama completa de soluções para garantir que sua viagem seja perfeita em todos os detalhes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-nobilium-gold/30 flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-nobilium-blue mb-6 group-hover:bg-nobilium-dark group-hover:text-nobilium-gold transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-nobilium-dark mb-4 group-hover:text-nobilium-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
