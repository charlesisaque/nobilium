import { motion } from 'framer-motion';
import aboutImg from '../assets/about_img.png';

const About = () => {
  return (
    <section id="about" className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-nobilium-gold transform translate-x-4 translate-y-4 rounded-xl opacity-20"></div>
            <img 
              src={aboutImg} 
              alt="Sobre a Nobilium" 
              className="relative z-10 w-full h-auto rounded-xl shadow-2xl object-cover object-center"
            />
            <div className="absolute -bottom-8 -right-8 bg-nobilium-dark text-white p-8 rounded-xl shadow-xl z-20 hidden md:block">
              <p className="text-4xl font-bold text-nobilium-gold mb-1">10+</p>
              <p className="text-sm uppercase tracking-wider">Anos de<br/>Excelência</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-nobilium-gold uppercase tracking-widest font-semibold mb-2">Conheça a Nobilium</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-nobilium-dark mb-6">
              Excelência e Exclusividade em Cada Jornada
            </h2>
            <div className="w-20 h-1 bg-nobilium-gold mb-8"></div>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              A <span className="font-bold text-nobilium-dark">NOBILIUM</span> nasceu com o propósito de transformar viagens em experiências únicas. Mais do que levá-lo ao seu destino, nós curamos cada momento da sua jornada.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Oferecemos soluções completas em turismo, mobilidade e atendimento personalizado com excelência. Seja a negócios ou a lazer, garantimos que sua viagem seja marcada por conforto, segurança e sofisticação inigualável.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'Atendimento Personalizado',
                'Frota Premium',
                'Suporte 24/7',
                'Roteiros Exclusivos'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-nobilium-dark font-medium">
                  <span className="w-2 h-2 rounded-full bg-nobilium-gold"></span>
                  {item}
                </li>
              ))}
            </ul>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
