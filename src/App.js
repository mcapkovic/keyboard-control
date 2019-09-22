import React, { useState } from "react";
import "./App.css";
import ExampleA from "./exampleA/ExampleA";

function App() {
  const [tab, setTab] = useState("tabA");
  return (
    <div className="App">
      <div class="tab">
        <button class="tablinks" onClick={() => setTab("tabA")}>
          Example A
        </button>
        <button class="tablinks" onClick={() => setTab("tabB")}>
          Example B
        </button>
      </div>
      <hr />
      {tab === "tabA" && <ExampleA />}
    </div>
  );
}

export default App;
