import Tab from "../Tab/Tab";
import "./TabBar.css";

export default function TabBar() {
  return (
    <div className="tab-bar">
      <Tab text={"All Entries"} total={3} active />
      <Tab text={"Favorites"} total={1} />
    </div>
  );
}
