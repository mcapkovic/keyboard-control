import React, { useState } from "react";
import "./App.css";
import ExampleA from "./exampleA/ExampleA";
import ExampleB from "./exampleB/ExampleB";

function App() {
  const [tab, setTab] = useState("tabA");
  return (
    <div className="app">
      <div className="tab">
        <button className="tab--button" onClick={() => setTab("tabA")}>
          Example A
        </button>
        <button className="tab--button" onClick={() => setTab("tabB")}>
          Example B
        </button>
      </div>
      <hr />
      {tab === "tabA" && <ExampleA />}
      {tab === "tabB" && <ExampleB />}
    </div>
  );
}

export default App;
