import { useState } from "react";
import { VirtualList } from "./components/VirtualList";
import { RegularList } from "./components/RegularList";
import "./App.css";

function App() {
  const [mode, setMode] = useState<"virtual" | "regular">("virtual");

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Lab 9.2: Virtualization vs Regular List</h1>
      
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <button 
          onClick={() => setMode("virtual")}
          style={{ backgroundColor: mode === "virtual" ? "#646cff" : "" }}
        >
          Virtualized List (Fast)
        </button>
        <button 
          onClick={() => setMode("regular")}
          style={{ backgroundColor: mode === "regular" ? "#ff4646" : "" }}
        >
          Regular List (Slow)
        </button>
      </div>

      <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
        {mode === "virtual" ? (
          <div>
            <h3>Using react-window</h3>
            <VirtualList />
          </div>
        ) : (
          <div>
            <h3>Standard Array.map (10,000 items)</h3>
            <p style={{ color: "red" }}>Warning: May cause lag!</p>
            <RegularList />
          </div>
        )}
      </div>

      <footer style={{ marginTop: "20px" }}>
        <p>Student: Valeria | Lab 09</p>
      </footer>
    </div>
  );
}

export default App;