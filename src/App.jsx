import "./App.css";
import Entries from "./Components/Entries/Entries";
import EntryForm from "./Components/EntryForm/EntryForm";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import TabBar from "./Components/TabBar/TabBar";

function App() {
  return (
    <>
      <Header>
        <h1>Journal</h1>
      </Header>
      <main>
        <EntryForm />
        <TabBar />
        <Entries />
      </main>
      <Footer />
    </>
  );
}

export default App;
