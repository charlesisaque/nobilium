import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Differentials from '../components/Differentials';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Differentials />
      <Gallery />
      <Contact />
    </main>
  );
};

export default Home;
