import "./Entry.css";

export default function Entry({ entry: { date, motto, notes } }) {
  return (
    <section className="entry">
      <div className="date">{date}</div>
      <h2>{motto}</h2>
      <p>{notes}</p>
    </section>
  );
}
