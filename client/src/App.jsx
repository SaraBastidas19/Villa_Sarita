import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ReservaModal from './components/ReservaModal';
import Home from './pages/Home';
import InformacionGeneral from './pages/InformacionGeneral';
import Actividades from './pages/Actividades';
import Espacios from './pages/Espacios';
import Informacion from './pages/Informacion';
import Mapa from './pages/Mapa';

function App() {
  const [isReservaOpen, setIsReservaOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-crema text-stone-800">
      <Navbar onReservar={() => setIsReservaOpen(true)} />

      <main className={isHome ? 'pt-0' : 'pt-20'}>
        <Routes>
          <Route path="/" element={<Home onReservar={() => setIsReservaOpen(true)} />} />
          <Route path="/informacion-general" element={<InformacionGeneral />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/espacios" element={<Espacios onReservar={() => setIsReservaOpen(true)} />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/mapa" element={<Mapa />} />
        </Routes>
      </main>

      <a
        href="https://wa.me/573000000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-105"
      >
        WhatsApp
      </a>

      <Footer />
      <ReservaModal isOpen={isReservaOpen} onClose={() => setIsReservaOpen(false)} />
    </div>
  );
}

export default App;
