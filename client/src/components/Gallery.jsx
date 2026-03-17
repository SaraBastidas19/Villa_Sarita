const imageBase = `${import.meta.env.BASE_URL}images/gallery`;

const images = [
  `${imageBase}/galeria-1.jpeg`,
  `${imageBase}/galeria-2.jpeg`,
  `${imageBase}/galeria-3.jpeg`,
  `${imageBase}/galeria-4.jpeg`
];

function Gallery() {
  return (
    <section className="container-base pb-4 pt-14">
      <h2 className="section-title">Galería</h2>
      <p className="section-subtitle">Descubre los espacios, la naturaleza y los momentos que puedes vivir en Finca Villa Sarita.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Galería finca ${index + 1}`}
            loading="lazy"
            className="relative h-64 w-full rounded-2xl object-cover shadow-soft transition-transform duration-300 hover:z-10 hover:scale-[1.03]"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
