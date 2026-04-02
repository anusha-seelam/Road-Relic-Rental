import React from "react";

function App() {
  const items = ["ALPHA", "BETA", "GAMMA", "DELTA"];

  return (
    <div>
      <h1>Ordered List</h1>
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
