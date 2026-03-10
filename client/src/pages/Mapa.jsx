import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const fincaPosition = [4.711, -74.0721];

function Mapa() {
  return (
    <section className="container-base py-14">
      <h1 className="section-title">Mapa</h1>
      <p className="section-subtitle">Encuentra la ubicación de la finca y llega fácilmente.</p>

      <div className="overflow-hidden rounded-2xl shadow-soft">
        <MapContainer center={fincaPosition} zoom={13} style={{ height: '450px', width: '100%' }}>
          <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={fincaPosition}>
            <Popup>Finca Villa Sarita</Popup>
          </Marker>
        </MapContainer>
      </div>

      <a
        href="https://www.google.com/maps/dir/?api=1&destination=4.711,-74.0721"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block rounded-full bg-bosque px-6 py-3 font-semibold text-white transition hover:bg-hoja"
      >
        Cómo llegar
      </a>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl bg-white p-5 shadow-soft">
          <h2 className="mb-2 text-lg font-semibold text-bosque">Dirección</h2>
          <p className="text-sm text-stone-700">Vereda La Montaña, km 7, zona rural.</p>
        </article>
        <article className="rounded-2xl bg-white p-5 shadow-soft">
          <h2 className="mb-2 text-lg font-semibold text-bosque">Cómo llegar</h2>
          <p className="text-sm text-stone-700">Acceso por carretera principal y 10 minutos de vía destapada en buen estado.</p>
        </article>
        <article className="rounded-2xl bg-white p-5 shadow-soft">
          <h2 className="mb-2 text-lg font-semibold text-bosque">Atracciones cercanas</h2>
          <p className="text-sm text-stone-700">Cascada El Encanto, sendero del bosque nativo y mirador del valle.</p>
        </article>
      </div>
    </section>
  );
}

export default Mapa;
