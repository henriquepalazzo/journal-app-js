import "./Tab.css";

export default function Tab({ text, total, active = false }) {
  return (
    <>
      <div className={`tab ${active ? "active" : ""}`}>
        {text} <span>{total}</span>
      </div>
    </>
  );
}
