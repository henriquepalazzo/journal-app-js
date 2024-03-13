import "./App.css";
import { uid } from "uid";
import { useState } from "react";
import Entries from "./Components/Entries/Entries";
import EntryForm from "./Components/EntryForm/EntryForm";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import TabBar from "./Components/TabBar/TabBar";

function App() {
  const initialEntries = [
    {
      id: 1000,
      date: "Feb 5, 2025",
      motto: "We are in a state of chaos",
      notes:
        "Today I learned about React State. It was fun! I can't wait to learn more.",
    },
    {
      id: 999,
      date: "Feb 4, 2025",
      motto: "Props, Props, Props",
      notes:
        "Today I learned about React Props. Mad props to everyone who understands this!",
    },
    {
      id: 998,
      date: "Feb 3, 2025",
      motto: "How to nest components online fast",
      notes:
        "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    },
    {
      id: 997,
      date: "Feb 2, 2025",
      motto: "I'm a React Developer",
      notes: "My React-ion when I learned about React: 😍",
    },
  ];
  const [entries, setEntries] = useState(initialEntries);

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([
      { ...newEntry, id: uid(), date: date, isFavorite: false },
      ...entries,
    ]);
  }

  return (
    <>
      <Header>
        <h1>Journal</h1>
      </Header>
      <main>
        <EntryForm onAddEntry={handleAddEntry} />
        <TabBar />
        <Entries entries={entries} />
      </main>
      <Footer />
    </>
  );
}

export default App;
