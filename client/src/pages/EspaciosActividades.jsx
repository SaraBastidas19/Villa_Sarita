import { Link } from 'react-router-dom';

const imageBase = `${import.meta.env.BASE_URL}images/activities`;

const espacios = [
  {
    icon: '🏊',
    title: 'Piscina',
    description:
      'Piscina de 11 × 8 metros con profundidad máxima de 1.70 m. Cuenta con sillas, mesas, flotadores y dos baños adicionales en el área. Perfecta para refrescarse y relajarse en familia o con amigos.',
    image: `${imageBase}/piscina.jpeg`,
  },
  {
    icon: '🎱',
    title: 'Zona de juegos',
    description:
      'Espacio recreativo techado con mesa de billar, bolirana y tejo. Ideal para pasar buenos ratos y compartir momentos divertidos con todo el grupo sin importar la hora del día.',
    image: `${imageBase}/juegos.jpeg`,
  },
  {
    icon: '🍖',
    title: 'Cocina y zona BBQ',
    description:
      'Cocina completamente equipada con estufa de gas, horno tradicional de leña y todos los utensilios necesarios. La zona BBQ exterior es perfecta para preparar asados y disfrutar al aire libre.',
    image: `${imageBase}/cocina.jpeg`,
  },
  {
    icon: '🛏️',
    title: 'Habitaciones con baño privado',
    description:
      'Las habitaciones de la finca cuentan con baño privado y ducha caliente. Espacios cómodos y acogedores pensados para el descanso, con capacidad para diferentes tamaños de grupo.',
    image: `${imageBase}/habitaciones.jpeg`,
  },
  {
    icon: '⛺',
    title: 'Espacio para camping bajo techo',
    description:
      'En el segundo piso de la finca hay un espacio techado especialmente habilitado para hacer camping. Una experiencia diferente que combina la aventura de acampar con la comodidad de estar bajo techo.',
    image: null,
  },
];

const actividades = [
  {
    icon: '🥾',
    title: 'Caminatas a quebradas cercanas',
    description:
      'Desde la finca puedes llegar a pie a quebradas naturales en tan solo 10 a 15 minutos. El recorrido atraviesa caminos rodeados de vegetación y paisajes propios de la región tolimense.',
    image: `${imageBase}/cascadas.jpeg`,
  },
  {
    icon: '🌊',
    title: 'Cascadas de Payandé',
    description:
      'A unos 20 minutos caminando desde la finca se encuentran las conocidas cascadas de Payandé. Un destino imperdible para quienes buscan conectarse con la naturaleza y disfrutar de agua cristalina.',
    image: `${imageBase}/cascadas.jpeg`,
  },
];

function ItemCard({ item }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-soft flex flex-col">
      <div className="h-48 w-full overflow-hidden bg-stone-100">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-stone-400">
            <span className="text-4xl">{item.icon}</span>
            <p className="text-sm font-medium">Imagen próximamente</p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 p-6">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{item.icon}</span>
          <h2 className="text-xl font-semibold text-bosque">{item.title}</h2>
        </div>
        <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
      </div>
    </article>
  );
}

function EspaciosActividades() {
  return (
    <div className="container-base py-14 space-y-12">
      <div>
        <h1 className="section-title">Espacios y Actividades</h1>
        <p className="section-subtitle">
          Descubre todo lo que Finca Villa Sarita tiene para ofrecer: espacios diseñados para la comodidad y actividades
          para disfrutar la naturaleza al máximo.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-bosque">Espacios</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {espacios.map((item) => (
            <ItemCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-bosque">Actividades</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {actividades.map((item) => (
            <ItemCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <div className="rounded-2xl bg-crema px-6 py-8 shadow-soft text-center">
        <h3 className="text-xl font-bold text-bosque">¿Listo para tu próxima estadía?</h3>
        <p className="mt-2 text-stone-600">
          Revisa las tarifas y reserva la finca completa para tu grupo.
        </p>
        <Link
          to="/tarifas"
          className="mt-4 inline-block rounded-full bg-hoja px-6 py-3 font-semibold text-white transition hover:brightness-110"
        >
          Ver tarifas
        </Link>
      </div>
    </div>
  );
}

export default EspaciosActividades;
