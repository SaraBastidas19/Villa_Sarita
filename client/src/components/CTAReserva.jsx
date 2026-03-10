function CTAReserva({ onReservar }) {
  return (
    <section className="container-base py-8">
      <div className="rounded-3xl bg-gradient-to-r from-bosque to-hoja p-8 text-white shadow-soft md:p-10">
        <h3 className="mb-3 text-2xl font-bold">¿Listo para disfrutar de una experiencia diferente?</h3>
        <p className="mb-5 text-sm text-emerald-100 md:text-base">
          Ven a vivir la experiencia de Finca Villa Sarita, un lugar perfecto para descansar, divertirte y compartir en medio de la naturaleza.
        </p>
        <button
          type="button"
          onClick={onReservar}
          className="rounded-full bg-white px-6 py-2 font-semibold text-bosque transition hover:bg-crema"
        >
          Reservar ahora
        </button>
      </div>
    </section>
  );
}

export default CTAReserva;
