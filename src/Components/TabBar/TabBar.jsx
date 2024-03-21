import Tab from "../Tab/Tab";
import "./TabBar.css";

export default function TabBar({
  onTabClick,
  favorite,
  totalEntries,
  totalFavs,
}) {
  return (
    <div className="tab-bar">
      <Tab
        text={"All Entries"}
        total={totalEntries}
        onTabClick={onTabClick}
        favorite={favorite}
      />
      <Tab
        text={"Favorites"}
        total={totalFavs}
        onTabClick={onTabClick}
        favorite={favorite}
      />
    </div>
  );
}
