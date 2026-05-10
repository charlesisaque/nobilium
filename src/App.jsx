import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Partner from './pages/Partner';

function App() {
  return (
    <Router>
      <div className="font-sans antialiased bg-nobilium-white text-nobilium-dark min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parceiro" element={<Partner />} />
        </Routes>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
