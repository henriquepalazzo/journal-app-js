import Tab from "../Tab/Tab";
import "./TabBar.css";

export default function TabBar({ onTabClick, favorite }) {
  return (
    <div className="tab-bar">
      <Tab
        text={"All Entries"}
        total={3}
        onTabClick={onTabClick}
        favorite={favorite}
      />
      <Tab
        text={"Favorites"}
        total={1}
        onTabClick={onTabClick}
        favorite={favorite}
      />
    </div>
  );
}
