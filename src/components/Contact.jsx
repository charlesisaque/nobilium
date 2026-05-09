import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, service, message } = formData;
    
    if (!name || !service || !message) {
      alert('Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    const text = `Olá! Meu nome é *${name}*.\n\n*Serviço Desejado:* ${service}\n\n*Mensagem:* ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/557191804800?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="w-full py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-nobilium-dark mb-4"
          >
            Fale Conosco
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
            Estamos prontos para planejar a sua próxima grande experiência.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 flex flex-col gap-6"
          >
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-nobilium-blue/10 flex items-center justify-center text-nobilium-blue shrink-0">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h4 className="font-bold text-nobilium-dark mb-1">Telefone / WhatsApp</h4>
                <p className="text-gray-600">+55 71 9180-4800</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-nobilium-gold/10 flex items-center justify-center text-nobilium-gold shrink-0">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h4 className="font-bold text-nobilium-dark mb-1">E-mail</h4>
                <p className="text-gray-600">contato@nobilium.com.br</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-nobilium-dark/10 flex items-center justify-center text-nobilium-dark shrink-0">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h4 className="font-bold text-nobilium-dark mb-1">Endereço</h4>
                <p className="text-gray-600">Pelourinho — Salvador/BA</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 bg-white rounded-xl shadow-xl p-8 border border-gray-100"
          >
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu Nome" 
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-nobilium-gold focus:ring-1 focus:ring-nobilium-gold transition-colors"
                />
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-nobilium-gold focus:ring-1 focus:ring-nobilium-gold transition-colors text-gray-600"
                >
                  <option value="" disabled>Selecione um Serviço</option>
                  <option value="Passagens Aéreas">Passagens Aéreas</option>
                  <option value="Transporte Marítimo">Transporte Marítimo</option>
                  <option value="Transporte Fluvial">Transporte Fluvial</option>
                  <option value="Transporte Rodoviário">Transporte Rodoviário</option>
                  <option value="Locação de Veículos">Locação de Veículos</option>
                  <option value="Locação de Van e Ônibus">Locação de Van e Ônibus</option>
                  <option value="Vistos Consulares">Vistos Consulares</option>
                  <option value="Passeios Turísticos">Passeios Turísticos</option>
                  <option value="Outro">Outro (especificar na mensagem)</option>
                </select>
              </div>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5" 
                required
                placeholder="Sua Mensagem" 
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-nobilium-gold focus:ring-1 focus:ring-nobilium-gold transition-colors resize-none"
              ></textarea>
              <button 
                type="submit" 
                className="w-full md:w-auto self-start bg-nobilium-dark text-white px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-nobilium-gold transition-colors duration-300 flex items-center gap-2 justify-center"
              >
                <FaWhatsapp size={20} />
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
