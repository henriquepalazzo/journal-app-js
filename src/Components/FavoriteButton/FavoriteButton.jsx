import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

export default function FavoriteButton() {
  return (
    <button className="favorite-button">
      <StarFilled />
    </button>
  );
}
