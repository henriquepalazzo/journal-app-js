import "./App.css";
import { uid } from "uid";
import { useState } from "react";
import Entries from "./Components/Entries/Entries";
import EntryForm from "./Components/EntryForm/EntryForm";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import TabBar from "./Components/TabBar/TabBar";
import { initialEntries } from "./data/initialEntries";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: initialEntries,
  });

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

  return (
    <>
      <Header>
        <h1>Journal</h1>
      </Header>
      <main>
        <EntryForm onAddEntry={handleAddEntry} />
        <TabBar />
        <Entries entries={entries} onToggleFavorite={handleToggleFavorite} />
      </main>
      <Footer />
    </>
  );
}

export default App;
