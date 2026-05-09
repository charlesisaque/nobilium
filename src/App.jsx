import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Differentials from './components/Differentials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="font-sans antialiased bg-nobilium-white text-nobilium-dark min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Differentials />
        <Gallery />
        <Contact />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

export default App;
