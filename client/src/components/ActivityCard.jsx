function ActivityCard({ activity }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-soft transition hover:-translate-y-1">
      <img src={activity.image} alt={activity.title} className="h-48 w-full object-cover" loading="lazy" />
      <div className="p-5">
        <h3 className="mb-2 text-xl font-semibold text-bosque">{activity.title}</h3>
        <p className="text-sm text-stone-600">{activity.description}</p>
      </div>
    </article>
  );
}

export default ActivityCard;
