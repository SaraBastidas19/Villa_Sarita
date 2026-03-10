function InformacionGeneral() {
  const amenities = [
    { name: 'WiFi', icon: '📶' },
    { name: 'Parking', icon: '🅿️' },
    { name: 'Nature trails', icon: '🥾' },
    { name: 'Restaurant / kitchen', icon: '🍽️' }
  ];

  return (
    <section className="container-base py-14">
      <h1 className="section-title">Información General</h1>
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <img
          src="/images/general/finca-general.jpg"
          alt="Finca en entorno natural"
          className="h-96 w-full rounded-2xl object-cover shadow-soft"
        />
        <div className="space-y-4 text-stone-700">
          <p>
            <strong>Historia:</strong> Nacimos como una finca familiar con tradición campesina y evolucionamos hacia una
            experiencia de glamping sostenible.
          </p>
          <p>
            <strong>Ubicación:</strong> Rodeada de montañas, bosques y aire puro, a pocos minutos del casco urbano.
          </p>
          <p>
            <strong>Qué incluye:</strong> Alojamiento, zonas comunes, caminatas guiadas y experiencias nocturnas.
          </p>
          <p>
            <strong>Beneficios:</strong> Desconexión digital, bienestar mental, contacto con la naturaleza y turismo responsable.
          </p>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-bosque">Amenidades</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {amenities.map((item) => (
                <article key={item.name} className="rounded-xl bg-white p-4 shadow-soft">
                  <p className="text-lg">{item.icon}</p>
                  <p className="text-sm font-medium text-stone-700">{item.name}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformacionGeneral;
