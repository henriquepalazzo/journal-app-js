import "./Tab.css";

export default function Tab({ text, total, onTabClick, favorite }) {
  console.log(favorite);
  return (
    <>
      <div
        className={`tab ${
          text === (favorite ? "Favorites" : "All Entries") ? "active" : ""
        }`}
        onClick={() => onTabClick(text)}
      >
        {text} <span>{total}</span>
      </div>
    </>
  );
}
