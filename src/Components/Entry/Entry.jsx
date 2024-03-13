import "./Entry.css";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Entry({ entry: { date, motto, notes } }) {
  return (
    <section className="entry">
      <FavoriteButton />
      <div className="date">{date}</div>
      <h2>{motto}</h2>
      <p>{notes}</p>
    </section>
  );
}
