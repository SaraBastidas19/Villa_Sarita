function Tarifas() {
  const info = [
    'Cada habitación tiene baño privado con ducha caliente.',
    'En la piscina hay dos baños adicionales disponibles.',
    'La finca se alquila exclusivamente para el grupo que reserva.',
    'Solo estará presente el encargado del cuidado de la finca, disponible si se necesita apoyo durante la estadía.',
  ];

  return (
    <div className="container-base py-14 space-y-12">
      <div>
        <h1 className="section-title">Tarifas e Información</h1>
        <p className="section-subtitle">
          Conoce los precios y todo lo que necesitas saber antes de planear tu visita a Finca Villa Sarita.
        </p>
      </div>

      {/* Tarifas */}
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-8 shadow-soft flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-bosque">Tarifa por noche</h2>
          <p className="text-4xl font-extrabold text-hoja">Consultar</p>
          <p className="text-sm text-stone-500">Precio variable según el número de personas y la temporada.</p>
          <p className="text-stone-600 leading-relaxed">
            El valor del alquiler incluye el acceso completo a todos los espacios de la finca: habitaciones, piscina,
            zona de juegos, cocina, zona BBQ y espacio de camping bajo techo.
          </p>
          <a
            href="https://wa.me/573132841729"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block rounded-full bg-hoja px-6 py-3 text-center font-semibold text-white transition hover:brightness-110"
          >
            Consultar precio por WhatsApp
          </a>
        </article>

        <article className="rounded-2xl bg-crema p-8 shadow-soft flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-bosque">¿Qué incluye el alquiler?</h2>
          <ul className="space-y-2 text-stone-700">
            {[
              'Acceso completo a todos los espacios de la finca',
              'Piscina con sillas, mesas y flotadores',
              'Zona de juegos: billar, bolirana y tejo',
              'Cocina equipada con estufa de gas y horno de leña',
              'Zona BBQ para asados',
              'Espacio de camping bajo techo (segundo piso)',
              'Parqueadero dentro de la finca',
              'WiFi',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 font-bold text-hoja">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      {/* Información importante */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-bosque">Información importante</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {info.map((item) => (
            <article key={item} className="rounded-xl bg-white p-5 shadow-soft flex items-start gap-3">
              <span className="mt-0.5 text-2xl text-hoja">ℹ️</span>
              <p className="text-stone-700 leading-relaxed">{item}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Reglas */}
      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="mb-2 text-lg font-semibold text-bosque">Horarios</h2>
          <p className="text-sm text-stone-700">Check-in: 3:00 p.m. · Check-out: 11:00 a.m.</p>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="mb-2 text-lg font-semibold text-bosque">Recomendaciones</h2>
          <p className="text-sm text-stone-700">
            Trae ropa cómoda, calzado para caminata, protector solar y repelente.
          </p>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="mb-2 text-lg font-semibold text-bosque">Qué llevar</h2>
          <p className="text-sm text-stone-700">
            Documentos, botella reutilizable, linterna y ganas de disfrutar.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Tarifas;
