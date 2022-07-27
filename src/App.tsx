import "./App.css";
import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Key from "./components/Key/Key";

function App() {
  return (
    <div className="container">
      <Info />
      <main className="phone">
        <div className="keyboard-container">
          <ol className="keyboard">
            <Key />
          </ol>
        </div>
        <Actions />
      </main>
    </div>
  );
}

export default App;
