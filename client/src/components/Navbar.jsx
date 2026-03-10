import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/finca', label: 'La Finca' },
  { to: '/espacios', label: 'Espacios y Actividades' },
  { to: '/tarifas', label: 'Tarifas' },
  { to: '/ubicacion', label: 'Ubicación' },
];

function Navbar({ onReservar }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-[1200] w-full bg-black/85">
      <div className="container-base flex h-20 items-center justify-between gap-4">
        <NavLink to="/" className="transition hover:opacity-90" aria-label="Ir al inicio">
          <img src="/images/logo/logo.png" alt="Logo Villa Sarita" className="h-12 w-auto md:h-14" loading="eager" />
        </NavLink>

        <nav className="hidden flex-1 items-center justify-evenly px-6 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-base font-medium transition hover:text-hoja xl:text-lg ${isActive ? 'font-semibold text-hoja' : 'text-stone-200'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={onReservar}
          className="rounded-full bg-hoja px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110"
        >
          Reservar
        </button>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-stone-600 text-white transition hover:bg-white/10 lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-stone-700 bg-black/95 lg:hidden">
          <nav className="container-base flex flex-col py-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-2 py-2 text-sm transition hover:bg-white/10 ${isActive ? 'font-semibold text-hoja' : 'text-stone-200'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
