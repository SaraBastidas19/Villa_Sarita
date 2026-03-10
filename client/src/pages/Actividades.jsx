import ActivityCard from '../components/ActivityCard';

const activities = [
  {
    title: 'Senderismo',
    description: 'Recorridos guiados por senderos ecológicos con paisajes panorámicos.',
    image: '/images/activities/senderismo.jpg'
  },
  {
    title: 'Fogatas',
    description: 'Noches cálidas con historias, música y snacks al aire libre.',
    image: '/images/activities/fogatas.jpg'
  },
  {
    title: 'Observación de estrellas',
    description: 'Cielos limpios y perfectos para noches astronómicas inolvidables.',
    image: '/images/activities/estrellas.jpg'
  },
  {
    title: 'Avistamiento de aves',
    description: 'Encuentra especies locales en su hábitat natural con guía local.',
    image: '/images/activities/aves.jpg'
  },
  {
    title: 'Caminatas ecológicas',
    description: 'Rutas de bajo impacto para disfrutar y aprender del entorno.',
    image: '/images/activities/caminatas.jpg'
  }
];

function Actividades() {
  return (
    <section className="container-base py-14">
      <h1 className="section-title">Actividades</h1>
      <p className="section-subtitle">Conecta con la naturaleza a través de experiencias pensadas para todos.</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <ActivityCard key={activity.title} activity={activity} />
        ))}
      </div>
    </section>
  );
}

export default Actividades;
