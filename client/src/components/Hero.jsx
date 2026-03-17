import { Link } from 'react-router-dom';

function HeroSection({ onReservar }) {
  const heroImage = `${import.meta.env.BASE_URL}images/hero/inicio.jpeg`;

  return (
    <section
      className="relative h-[78vh] min-h-[520px] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,.45), rgba(0,0,0,.2)), url('${heroImage}')`
      }}
    >
      <div className="container-base flex h-full items-center">
        <div className="max-w-2xl text-white">
          <p className="mb-3 text-sm uppercase tracking-[0.18em] text-emerald-200">Casa Finca · Piscina · Recreación Rural</p>
          <h1 className="mb-5 text-4xl font-bold leading-tight md:text-6xl">Bienvenido a Finca Villa Sarita</h1>
          <p className="mb-7 text-base text-stone-100 md:text-lg">
            Un lugar para descansar, compartir y disfrutar de la naturaleza en Payandé, Tolima.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/espacios"
              className="rounded-full border border-white/80 bg-white/10 px-7 py-3 font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
            >
              Ver espacios
            </Link>
            <button
              type="button"
              onClick={onReservar}
              className="rounded-full bg-hoja px-7 py-3 font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
            >
              Reservar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
