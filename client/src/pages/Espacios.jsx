import SpaceCard from '../components/SpaceCard';

const spaces = [
  {
    name: 'Domos',
    description: 'Alojamiento premium con vista a las montañas y cama queen.',
    capacity: '2-3 personas',
    services: ['Baño privado', 'Desayuno', 'Manta térmica'],
    image: '/images/spaces/domos.jpg'
  },
  {
    name: 'Zona de camping',
    description: 'Área verde para carpas con zonas de fuego y baños compartidos.',
    capacity: '2-6 personas',
    services: ['Punto de energía', 'Zona BBQ', 'Duchas'],
    image: '/images/spaces/camping.jpg'
  },
  {
    name: 'Cabañas',
    description: 'Espacio familiar acogedor con diseño rústico y terraza.',
    capacity: '4-6 personas',
    services: ['Cocina básica', 'Baño privado', 'WiFi'],
    image: '/images/spaces/cabanas.jpg'
  },
  {
    name: 'Mirador',
    description: 'Zona exclusiva para atardeceres, picnic y fotografía.',
    capacity: 'Hasta 20 personas',
    services: ['Zona de descanso', 'Hamacas', 'Servicio de café'],
    image: '/images/spaces/mirador.jpg'
  }
];

function Espacios({ onReservar }) {
  return (
    <section className="container-base py-14">
      <h1 className="section-title">Espacios</h1>
      <p className="section-subtitle">Escoge el tipo de estancia que mejor se adapta a tu plan.</p>
      <div className="grid gap-6 md:grid-cols-2">
        {spaces.map((space) => (
          <SpaceCard key={space.name} space={space} onReservar={onReservar} />
        ))}
      </div>
    </section>
  );
}

export default Espacios;
