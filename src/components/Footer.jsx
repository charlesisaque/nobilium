import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="w-full bg-nobilium-dark pt-16 pb-8 border-t-[10px] border-nobilium-gold">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-700 pb-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Você sonha. Nós realizamos. Soluções completas em turismo, mobilidade e experiências exclusivas com padrão premium internacional.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Links Rápidos</h4>
            <ul className="flex flex-col gap-3">
              {['Início', 'Serviços', 'Sobre a Empresa', 'Diferenciais', 'Galeria', 'Contato'].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item === 'Início' ? 'home' : item === 'Sobre a Empresa' ? 'about' : item.toLowerCase()} 
                    smooth={true} 
                    duration={500} 
                    offset={-80}
                    className="text-gray-400 hover:text-nobilium-gold transition-colors cursor-pointer text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Nossos Serviços</h4>
            <ul className="flex flex-col gap-3">
              {[
                'Passagens Aéreas',
                'Transporte Marítimo e Fluvial',
                'Transporte Rodoviário',
                'Locação de Veículos',
                'Vistos Consulares',
                'Passeios Turísticos'
              ].map((item, index) => (
                <li key={index} className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contato Direto */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Fale Agora</h4>
            <p className="text-gray-400 text-sm mb-4">
              Precisa de ajuda para planejar sua próxima viagem? Fale com nossos consultores.
            </p>
            <a 
              href="https://wa.me/557191804800"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-nobilium-gold text-nobilium-dark px-6 py-3 rounded-full font-bold text-sm uppercase hover:bg-white transition-colors duration-300"
            >
              <FaWhatsapp size={20} />
              Chamar no WhatsApp
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} NOBILIUM — Turismo e Mobilidade. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
            <span className="hover:text-white cursor-pointer transition-colors">Política de Privacidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
