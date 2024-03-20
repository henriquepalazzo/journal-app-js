import "./Tab.css";

export default function Tab({
  text,
  total,
  active = false,
  onTabClick,
  favorite,
}) {
  console.log(favorite);
  return (
    <>
      <div
        className={`tab ${
          (text === "Favorites" && favorite) ||
          (text === "All Entries" && !favorite)
            ? "active"
            : ""
        }`}
        onClick={() => onTabClick(text)}
      >
        {text} <span>{total}</span>
      </div>
    </>
  );
}
