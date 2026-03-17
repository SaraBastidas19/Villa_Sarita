import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LaFinca from './pages/LaFinca';
import EspaciosActividades from './pages/EspaciosActividades';
import Tarifas from './pages/Tarifas';
import Ubicacion from './pages/Ubicacion';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const whatsappUrl = 'https://wa.me/573132841729';

  const handleReservar = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-crema text-stone-800">
      <Navbar onReservar={handleReservar} />

      <main className={isHome ? 'pt-0' : 'pt-20'}>
        <Routes>
          <Route path="/" element={<Home onReservar={handleReservar} />} />
          <Route path="/finca" element={<LaFinca />} />
          <Route path="/espacios" element={<EspaciosActividades />} />
          <Route path="/tarifas" element={<Tarifas />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
        </Routes>
      </main>

      <a
        href="https://wa.me/573132841729"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-105"
      >
        WhatsApp
      </a>

      <Footer />
    </div>
  );
}

export default App;
