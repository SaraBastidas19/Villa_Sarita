import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// Payandé, Tolima, Colombia
const fincaPosition = [3.848, -75.088];

function Ubicacion() {
  return (
    <div className="container-base py-14 space-y-10">
      <div>
        <h1 className="section-title">Ubicación</h1>
        <p className="section-subtitle">
          Finca Villa Sarita se encuentra en Payandé, Tolima, rodeada de naturaleza, montañas y aire puro a pocos
          minutos del casco urbano.
        </p>
      </div>

      {/* Mapa */}
      <div className="relative z-0 overflow-hidden rounded-2xl shadow-soft">
        <MapContainer className="z-0" center={fincaPosition} zoom={14} style={{ height: '450px', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={fincaPosition}>
            <Popup>Finca Villa Sarita · Payandé, Tolima</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Botón cómo llegar */}
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${fincaPosition[0]},${fincaPosition[1]}`}
        target="_blank"
        rel="noreferrer"
        className="inline-block rounded-full bg-bosque px-6 py-3 font-semibold text-white transition hover:bg-hoja"
      >
        Cómo llegar →
      </a>

      {/* Detalles de ubicación */}
      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl bg-white p-5 shadow-soft">
          <h2 className="mb-2 text-lg font-semibold text-bosque">📍 Ubicación</h2>
          <p className="text-sm text-stone-700">
            Payandé, Tolima, Colombia. A pocos minutos del casco urbano, en un entorno rodeado de naturaleza y
            montañas.
          </p>
        </article>

        <article className="rounded-2xl bg-white p-5 shadow-soft">
          <h2 className="mb-2 text-lg font-semibold text-bosque">🚗 Cómo llegar</h2>
          <p className="text-sm text-stone-700">
            Acceso por vía principal desde el pueblo. Apta para vehículos de todo tipo. Al reservar recibirás las
            indicaciones exactas para llegar.
          </p>
        </article>

        <article className="rounded-2xl bg-white p-5 shadow-soft">
          <h2 className="mb-2 text-lg font-semibold text-bosque">🌊 Atracciones cercanas</h2>
          <p className="text-sm text-stone-700">
            Quebradas naturales a 10–15 min caminando · Cascadas de Payandé a ~20 min · Paisajes del valle del río
            Magdalena.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Ubicacion;
