import "./App.css";
import { uid } from "uid";
import Entries from "./Components/Entries/Entries";
import EntryForm from "./Components/EntryForm/EntryForm";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import TabBar from "./Components/TabBar/TabBar";
import { initialEntries } from "./data/initialEntries";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: initialEntries,
  });
  const [favorite, setFavorite] = useState(false);

  const filteredEntries = favorite
    ? entries.filter((entry) => entry.isFavorite)
    : entries;

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([
      { ...newEntry, id: uid(), date: date, isFavorite: false },
      ...entries,
    ]);
  }

  function handleToggleFavorite(id) {
    setEntries(
      entries.map((entry) => {
        if (entry.id === id) entry.isFavorite = !entry.isFavorite;
        return entry;
      })
    );
  }

  function handleTabClick(type) {
    setFavorite(type === "Favorites" ? true : false);
  }

  return (
    <>
      <Header>
        <h1>Journal</h1>
      </Header>
      <main>
        <EntryForm onAddEntry={handleAddEntry} />
        <TabBar onTabClick={handleTabClick} favorite={favorite} />
        <Entries
          entries={filteredEntries}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
