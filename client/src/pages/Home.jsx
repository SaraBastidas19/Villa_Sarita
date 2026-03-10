import HeroSection from '../components/HeroSection';
import Gallery from '../components/Gallery';
import CTAReserva from '../components/CTAReserva';

function Home({ onReservar }) {
  return (
    <>
      <HeroSection onReservar={onReservar} />

      <section className="bg-white py-16">
        <div className="container-base grid items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="section-title max-w-md">Tu escape perfecto en el campo</h2>
            <p className="mt-8 max-w-md text-stone-600">
              En Finca Villa Sarita encontrarás el lugar ideal para desconectarte de la rutina y disfrutar del campo. Nuestra
              casa finca ofrece piscina, zonas de recreación y espacios diseñados para compartir momentos especiales con familia y
              amigos en un ambiente tranquilo y natural.
            </p>
          </div>

          <img
            src="/images/home/escape.jpeg"
            alt="Zona de descanso de la finca"
            className="h-72 w-full rounded-2xl object-cover shadow-soft md:h-80"
            loading="lazy"
          />
        </div>
      </section>

      <Gallery />

      <section className="container-base pb-14 pt-2">
        <h2 className="section-title mb-12 text-center">Disfruta cada momento</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Piscina y descanso',
              description: 'Relájate en la piscina y disfruta del clima cálido rodeado de naturaleza.'
            },
            {
              title: 'Zona de juegos',
              description: 'Comparte con amigos y familia jugando billar, bolirana o sapo.'
            },
            {
              title: 'Espacios para compartir',
              description: 'Áreas amplias ideales para reuniones, descanso y momentos especiales.'
            }
          ].map((item) => (
            <article key={item.title} className="rounded-2xl bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-bosque">{item.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CTAReserva onReservar={onReservar} />
    </>
  );
}

export default Home;
