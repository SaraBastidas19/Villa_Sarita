function SpaceCard({ space, onReservar }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-soft">
      <img src={space.image} alt={space.name} className="h-52 w-full object-cover" loading="lazy" />
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-bold text-bosque">{space.name}</h3>
        <p className="text-sm text-stone-600">{space.description}</p>
        <p className="text-sm text-hoja">Capacidad: {space.capacity}</p>
        <ul className="list-inside list-disc text-sm text-stone-700">
          {space.services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <button
          type="button"
          onClick={onReservar}
          className="rounded-full bg-bosque px-5 py-2 text-sm font-semibold text-white transition hover:bg-hoja"
        >
          Reservar este espacio
        </button>
      </div>
    </article>
  );
}

export default SpaceCard;
