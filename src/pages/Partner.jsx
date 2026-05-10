import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHandshake, FaNetworkWired, FaUserTie, FaStar, FaGlobeAmericas, FaChartLine, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFileAlt, FaTimes } from 'react-icons/fa';

const benefits = [
  { icon: <FaChartLine />, title: 'Expansão de negócios', desc: 'Aumente seu alcance com nossa rede.' },
  { icon: <FaNetworkWired />, title: 'Networking estratégico', desc: 'Conecte-se com líderes do setor.' },
  { icon: <FaUserTie />, title: 'Clientes qualificados', desc: 'Acesso a um público premium.' },
  { icon: <FaStar />, title: 'Parcerias exclusivas', desc: 'Condições e benefícios únicos.' },
  { icon: <FaGlobeAmericas />, title: 'Visibilidade no setor', desc: 'Destaque-se no turismo de luxo.' },
  { icon: <FaHandshake />, title: 'Crescimento conjunto', desc: 'Construímos o futuro juntos.' }
];

const Partner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/contato@nobilium.com.br', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        alert("Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      alert("Ocorreu um erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-[100px]">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-nobilium-dark/70 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-nobilium-white mb-6 uppercase tracking-wider"
          >
            Seja Parceiro da <span className="text-nobilium-gold">NOBILIUM</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
          >
            Conectamos empresas e profissionais ao turismo e mobilidade premium.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={scrollToForm}
              className="inline-block cursor-pointer bg-nobilium-gold text-nobilium-dark px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-[0_4px_14px_0_rgba(212,160,23,0.39)] hover:shadow-[0_6px_20px_rgba(212,160,23,0.23)] hover:-translate-y-1"
            >
              Quero ser Parceiro
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. BENEFÍCIOS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nobilium-dark uppercase tracking-wider mb-4">Por que ser <span className="text-nobilium-gold">nosso parceiro?</span></h2>
            <div className="w-24 h-1 bg-nobilium-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-nobilium-gold text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-nobilium-dark mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FORMULÁRIO */}
      <section id="form-section" className="py-20 bg-nobilium-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-nobilium-gold/5 blur-[120px]"></div>
          <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full bg-nobilium-ocean/10 blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-4">Envie sua <span className="text-nobilium-gold">Proposta</span></h2>
            <p className="text-gray-300">Preencha o formulário abaixo e nossa equipe entrará em contato.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaHandshake className="text-white text-4xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Proposta Enviada com Sucesso!</h3>
                <p className="text-gray-300">Agradecemos o interesse. Nossa equipe analisará as informações e entrará em contato em breve.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
                <input type="hidden" name="_subject" value="Nova Proposta de Parceria - NOBILIUM" />
                <input type="hidden" name="_captcha" value="false" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-200">Nome Completo *</label>
                    <input required type="text" name="Nome" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-nobilium-gold transition-colors" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-200">Empresa *</label>
                    <input required type="text" name="Empresa" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-nobilium-gold transition-colors" placeholder="Nome da empresa" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-200">E-mail *</label>
                    <input required type="email" name="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-nobilium-gold transition-colors" placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-200">WhatsApp *</label>
                    <input required type="tel" name="WhatsApp" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-nobilium-gold transition-colors" placeholder="(00) 00000-0000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-200">Cidade/Estado *</label>
                    <input required type="text" name="Cidade_Estado" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-nobilium-gold transition-colors" placeholder="Ex: Salvador/BA" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-200">Tipo de Parceria *</label>
                    <select required name="Tipo_Parceria" className="w-full bg-[#112a46] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-nobilium-gold transition-colors appearance-none">
                      <option value="">Selecione...</option>
                      <option value="Agência de Turismo">Agência de Turismo</option>
                      <option value="Guia Turístico">Guia Turístico</option>
                      <option value="Transporte Executivo">Transporte Executivo</option>
                      <option value="Transporte Marítimo">Transporte Marítimo</option>
                      <option value="Transporte Fluvial">Transporte Fluvial</option>
                      <option value="Locadora de Veículos">Locadora de Veículos</option>
                      <option value="Hotel/Pousada">Hotel/Pousada</option>
                      <option value="Passeios Turísticos">Passeios Turísticos</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-200">Instagram (Opcional)</label>
                    <input type="text" name="Instagram" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-nobilium-gold transition-colors" placeholder="@suaempresa" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-200">Site (Opcional)</label>
                    <input type="url" name="Site" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-nobilium-gold transition-colors" placeholder="https://www.site.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-200">Fale um pouco sobre sua proposta de parceria *</label>
                  <textarea required name="Proposta" rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-nobilium-gold transition-colors resize-none" placeholder="Descreva como podemos trabalhar juntos..."></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-200 flex items-center gap-2">
                    <FaFileAlt className="text-nobilium-gold"/> Upload de Material (PDF, Portfólio, Catálogo)
                  </label>
                  <input type="file" name="Anexo" accept=".pdf,.doc,.docx,.ppt,.pptx" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-nobilium-gold file:text-nobilium-dark hover:file:bg-white transition-all cursor-pointer" />
                </div>

                <div className="flex items-start gap-3 mt-4">
                  <input required type="checkbox" id="terms" className="mt-1 w-5 h-5 accent-nobilium-gold cursor-pointer" />
                  <label htmlFor="terms" className="text-sm text-gray-300">
                    Li e concordo com os <button type="button" onClick={() => setIsModalOpen(true)} className="text-nobilium-gold hover:underline font-semibold">Termos de Parceria e Política de Privacidade.</button>
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-nobilium-gold text-nobilium-dark font-bold uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-white'}`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-nobilium-dark border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "Quero ser Parceiro"
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. CONTATO RÁPIDO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-nobilium-dark text-nobilium-gold rounded-full flex items-center justify-center text-2xl mb-4 shadow-md">
                <FaWhatsapp />
              </div>
              <h4 className="font-bold text-nobilium-dark text-lg mb-2">WhatsApp</h4>
              <p className="text-gray-600 mb-4">+55 71 9180-4800</p>
              <a href="https://wa.me/557191804800" target="_blank" rel="noopener noreferrer" className="text-nobilium-ocean font-semibold hover:text-nobilium-gold transition-colors">Falar Agora</a>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-nobilium-dark text-nobilium-gold rounded-full flex items-center justify-center text-2xl mb-4 shadow-md">
                <FaEnvelope />
              </div>
              <h4 className="font-bold text-nobilium-dark text-lg mb-2">E-mail</h4>
              <p className="text-gray-600 mb-4">contato@nobilium.com.br</p>
              <a href="mailto:contato@nobilium.com.br" className="text-nobilium-ocean font-semibold hover:text-nobilium-gold transition-colors">Enviar E-mail</a>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-nobilium-dark text-nobilium-gold rounded-full flex items-center justify-center text-2xl mb-4 shadow-md">
                <FaMapMarkerAlt />
              </div>
              <h4 className="font-bold text-nobilium-dark text-lg mb-2">Endereço</h4>
              <p className="text-gray-600">Pelourinho — Salvador/BA</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal de Termos */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-nobilium-dark/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-nobilium-dark">TERMOS DE PARCERIA — NOBILIUM</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-nobilium-gold transition-colors">
                  <FaTimes size={24} />
                </button>
              </div>
              <div className="text-gray-600 space-y-4 text-sm md:text-base">
                <p>Ao enviar este formulário, o interessado declara que:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>As informações fornecidas são verdadeiras;</li>
                  <li>Possui interesse em estabelecer parceria comercial com a NOBILIUM;</li>
                  <li>Autoriza o contato da equipe através de e-mail ou WhatsApp informados;</li>
                  <li>Entende que o envio do formulário não garante aprovação imediata da parceria;</li>
                  <li>Concorda com a análise interna das informações enviadas.</li>
                </ul>
                <p className="font-semibold text-nobilium-dark pt-4 border-t border-gray-200">
                  A NOBILIUM compromete-se a manter confidencialidade e segurança dos dados fornecidos.
                </p>
                <p className="italic">
                  Seus dados serão utilizados exclusivamente para contato comercial e análise de parceria.
                </p>
              </div>
              <div className="mt-8 text-right">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="bg-nobilium-dark text-nobilium-gold px-6 py-2 rounded-lg font-bold hover:bg-nobilium-ocean hover:text-white transition-colors"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Partner;
