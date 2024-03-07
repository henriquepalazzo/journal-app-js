import "./Tab.css";

export default function Tab({ text, total, active = false }) {
  console.log(active);
  return (
    <>
      <div className={`tab ${active ? "active" : ""}`}>
        {text} <span>{total}</span>
      </div>
    </>
  );
}
