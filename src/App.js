import "./App.css";
import { AsideFilter } from "./components/Aside";
import { ItemContainer } from "./components/ItemContainer/ItemContainer";

function App() {
  return (
    <div className="app">
      <main className="main">
        <AsideFilter />
        <ItemContainer />
      </main>
    </div>
  );
}

export default App;
