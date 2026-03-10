function Informacion() {
  return (
    <section className="container-base py-14">
      <h1 className="section-title">Información</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="mb-2 text-xl font-semibold text-bosque">Reglas de la finca</h2>
          <ul className="list-inside list-disc space-y-1 text-sm text-stone-700">
            <li>Respeta los espacios naturales y la fauna.</li>
            <li>No se permite música alta después de las 10:00 p.m.</li>
            <li>Mantén limpias las zonas comunes.</li>
          </ul>
        </article>

        <article className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="mb-2 text-xl font-semibold text-bosque">Horarios</h2>
          <p className="text-sm text-stone-700">Check-in: 3:00 p.m. · Check-out: 11:00 a.m.</p>
        </article>

        <article className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="mb-2 text-xl font-semibold text-bosque">Recomendaciones</h2>
          <p className="text-sm text-stone-700">Trae ropa cómoda, protector solar, repelente y actitud aventurera.</p>
        </article>

        <article className="rounded-2xl bg-white p-6 shadow-soft">
          <h2 className="mb-2 text-xl font-semibold text-bosque">Qué llevar</h2>
          <p className="text-sm text-stone-700">Documentos, calzado para caminata, botella reutilizable y linterna.</p>
        </article>
      </div>
    </section>
  );
}

export default Informacion;
