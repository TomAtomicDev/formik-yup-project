import { useState } from "react";
import BasicForm from "./components/BasicForm";
import AdvancedForm from "./components/AdvancedForm";
import "./App.css";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="App">
      <nav>
        <img src="https://cdn-atulado.bisa.com/media/illustration/bisa-white-background.svg" alt="Disfruta de nuestros servicios digitales #aTuLado." width="198,43px" height="100px" />
        <div className="titles">
          <h3
            onClick={() => setView("basic")}
            style={{ color: view === "basic" ? "#003e7e" : "" }}
          >
            Basic
          </h3>
          <h3
            onClick={() => setView("advanced")}
            style={{ color: view === "advanced" ? "#003e7e" : "" }}
          >
            Advanced
          </h3>
        </div>
        
      </nav>
      {view === "basic" ? <BasicForm /> : <AdvancedForm />}
    </div>
  );
}

export default App;