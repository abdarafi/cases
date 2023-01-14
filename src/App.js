import React, { useState } from "react";

function App() {
  const [source, setSource] = useState("");
  const [result, setResult] = useState("");
  const [caseOption, setCaseOption] = useState("kebab");

  function handleClick() {
    let hyphenated = source.replace(/\s+/g, "-");

    if (caseOption === "kebab") {
      hyphenated = hyphenated.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    } else if (caseOption === "camel") {
      hyphenated = hyphenated.replace(/-([a-z])/g, (match) => match[1].toUpperCase());
    } else if (caseOption === "snake") {
      hyphenated = hyphenated.replace(/-/g, "_");
    }
    setResult(hyphenated);
  }

  return (
    <div>
      <textarea value={source} onChange={(e) => setSource(e.target.value)} />
      <textarea value={result} onChange={(e) => setResult(e.target.value)} />
      <select onChange={(e) => setCaseOption(e.target.value)}>
        <option value="kebab">Kebab Case</option>
        <option value="camel">Camel Case</option>
        <option value="snake">Snake Case</option>
      </select>
      <button onClick={handleClick}>Convert</button>
    </div>
  );
}

export default App;

