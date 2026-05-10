import { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/nobiliumlogo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, name: 'Início', target: '/#home' },
    { id: 2, name: 'Serviços', target: '/#services' },
    { id: 3, name: 'Sobre', target: '/#about' },
    { id: 4, name: 'Diferenciais', target: '/#differentials' },
    { id: 5, name: 'Contato', target: '/#contact' },
    { id: 6, name: 'Seja Parceiro', target: '/parceiro' },
  ];

  return (
    <nav
      className={`fixed w-full h-[100px] flex justify-between items-center px-4 md:px-12 z-50 transition-all duration-300 ${
        scrolled ? 'bg-nobilium-dark shadow-xl py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="flex items-center">
        <Link to="/#home" smooth={true} className="cursor-pointer">
          <img
            src={logo}
            alt="Nobilium Logo"
            className={`transition-all duration-300 ${
              scrolled ? 'h-16' : 'h-20'
            }`}
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map(({ id, name, target }) => (
          <li key={id} className="nav-item">
            <Link
              to={target}
              smooth={true}
              className="text-nobilium-white uppercase tracking-wider text-sm font-semibold hover:text-nobilium-gold transition-colors duration-300 cursor-pointer"
            >
              {name}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="https://wa.me/557191804800"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-nobilium-gold text-nobilium-dark px-6 py-2 rounded-full font-bold uppercase text-sm hover:bg-white transition-colors duration-300 shadow-lg"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 text-nobilium-white cursor-pointer">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-nobilium-dark flex flex-col justify-center items-center'
        }
      >
        {links.map(({ id, name, target }) => (
          <li key={id} className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to={target}
              smooth={true}
              className="text-nobilium-white hover:text-nobilium-gold transition-colors duration-300"
            >
              {name}
            </Link>
          </li>
        ))}
        <li className="mt-8">
          <a
            href="https://wa.me/557191804800"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-nobilium-gold text-nobilium-dark px-8 py-4 rounded-full font-bold uppercase text-xl hover:bg-white transition-colors duration-300"
          >
            <FaWhatsapp size={24} />
            Fale Conosco
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
