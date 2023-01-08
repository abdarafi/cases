import React, { useState } from "react";

function App() {
  const [source, setSource] = useState("");
  const [result, setResult] = useState("");

  function handleClick() {
    // Replace spaces with hyphens
    const hyphenated = source.replace(/\s+/g, "-");
    // Convert the hyphenated string to kebab case
    const kebab = hyphenated.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    // Set the result to the kebab case string
    setResult(kebab);
  }

  return (
    <div>
      <textarea value={source} onChange={(e) => setSource(e.target.value)} />
      <textarea value={result} onChange={(e) => setResult(e.target.value)} />
      <button onClick={handleClick}>Convert</button>
    </div>
  );
}

export default App;
