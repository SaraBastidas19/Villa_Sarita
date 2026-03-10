function InformacionGeneral() {
  const amenities = [
    {
      icon: '📶',
      name: 'WiFi',
      desc: 'Conexión disponible en la casa para mantenerte comunicado si lo necesitas.',
    },
    {
      icon: '🅿️',
      name: 'Parqueadero',
      desc: 'Espacio dentro de la finca para estacionar vehículos con comodidad.',
    },
    {
      icon: '🏊',
      name: 'Piscina',
      desc: 'Piscina de 11 × 8 metros, con profundidad máxima de 1.70 m, equipada con sillas, mesas y flotadores.',
    },
    {
      icon: '🎱',
      name: 'Zona de juegos',
      desc: 'Espacio recreativo con billar, bolirana y tejo para disfrutar con amigos y familia.',
    },
    {
      icon: '🍖',
      name: 'Cocina y BBQ',
      desc: 'Cocina equipada con estufa de gas, horno de leña tradicional y zona para asados.',
    },
    {
      icon: '🌿',
      name: 'Naturaleza cercana',
      desc: 'Caminatas hacia quebradas cercanas a 10 y 15 minutos, y acceso a las cascadas de Payandé a unos 20 minutos.',
    },
  ];

  const incluye = [
    'Habitaciones con baño privado y ducha',
    'Piscina amplia con zona de descanso',
    'Zona de juegos con billar, bolirana y tejo',
    'Cocina equipada con estufa de gas, horno tradicional de leña y utensilios',
    'Zona BBQ para asados',
    'Espacio para camping bajo techo en el segundo piso',
    'Mesas, sillas y áreas para compartir',
  ];

  return (
    <div className="container-base py-14 space-y-14">

      {/* Encabezado + imagen */}
      <div>
        <h1 className="section-title mb-10">Información general de la finca</h1>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <img
            src="/images/general/finca-general.jpeg"
            alt="Finca Villa Sarita"
            className="h-96 w-full rounded-2xl object-cover shadow-soft"
          />
          <div className="space-y-6 text-stone-700">
            {/* Historia */}
            <div>
              <h2 className="mb-1 text-xl font-semibold text-bosque">Un espacio pensado para compartir y descansar</h2>
              <p className="leading-relaxed">
                Finca Villa Sarita es una casa finca familiar ubicada en Payandé, Tolima, creada para ofrecer un lugar
                tranquilo donde amigos y familias puedan reunirse, descansar y disfrutar de la naturaleza. Aquí
                encontrarás un ambiente acogedor, rodeado de paisajes naturales y espacios diseñados para la recreación
                y el descanso.
              </p>
            </div>

            {/* Ubicación */}
            <div>
              <h2 className="mb-1 text-xl font-semibold text-bosque">Naturaleza y tranquilidad cerca del pueblo</h2>
              <p className="leading-relaxed">
                La finca se encuentra en Payandé, Tolima, rodeada de naturaleza, montañas y aire puro. Desde aquí
                puedes disfrutar caminatas hacia quebradas cercanas y visitar las conocidas cascadas de Payandé,
                ubicadas aproximadamente a 20 minutos caminando.
              </p>
            </div>

            {/* Experiencia y privacidad */}
            <div>
              <h2 className="mb-1 text-xl font-semibold text-bosque">Experiencia y privacidad</h2>
              <p className="leading-relaxed">
                Durante tu estadía, la finca será exclusivamente para tu grupo. La única persona externa será el
                encargado del cuidado de la finca, quien estará disponible en caso de que necesiten ayuda o apoyo
                durante la estancia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Qué incluye */}
      <div className="rounded-2xl bg-crema px-8 py-10 shadow-soft">
        <h2 className="mb-2 text-2xl font-bold text-bosque">Qué incluye</h2>
        <p className="mb-6 text-stone-600">
          Al reservar la finca tendrás acceso completo a todos los espacios del lugar.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 text-stone-700">
          {incluye.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 text-hoja font-bold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Amenidades */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-bosque">Amenidades</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item) => (
            <article key={item.name} className="rounded-xl bg-white p-5 shadow-soft flex flex-col gap-2">
              <span className="text-3xl">{item.icon}</span>
              <p className="font-semibold text-bosque">{item.name}</p>
              <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>

    </div>
  );
}

export default InformacionGeneral;
