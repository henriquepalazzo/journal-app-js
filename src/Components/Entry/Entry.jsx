import "./Entry.css";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Entry({
  entry: { date, motto, notes },
  onToggleFavorite,
  isFavorite,
  id,
}) {
  return (
    <section className="entry">
      <div className="date">{date}</div>
      <div className="entry__motto-container">
        <h2>{motto}</h2>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
          id={id}
        />
      </div>
      <p>{notes}</p>
    </section>
  );
}
