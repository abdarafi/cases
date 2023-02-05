import React, { useState } from "react";
import "./App.css";

function App() {
  const [source, setSource] = useState("");
  const [result, setResult] = useState("");
  const [caseOption, setCaseOption] = useState("kebab");

  function handleClick() {
    let hyphenated = source.replace(/\s+/g, "-");

    if (caseOption === "kebab") {
      hyphenated = hyphenated.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    } else if (caseOption === "camel") {
      hyphenated = hyphenated.replace(/-([a-z])/g, (match) =>
        match[1].toUpperCase()
      );
    } else if (caseOption === "snake") {
      hyphenated = hyphenated.replace(/-/g, "_");
    }
    setResult(hyphenated);
  }

  function handleResultClick() {
    navigator.clipboard.writeText(result);
    alert("Copied to clipboard!");
  }

  return (
    <div className="App">
      <textarea
        className="input-box"
        data-gramm="false"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <textarea
        className="input-box"
        data-gramm="false"
        value={result}
        onChange={(e) => setResult(e.target.value)}
        onClick={handleResultClick}
      />
      <select
        className="select-box"
        onChange={(e) => setCaseOption(e.target.value)}
      >
        <option value="kebab">Kebab Case</option>
        <option value="camel">Camel Case</option>
        <option value="snake">Snake Case</option>
      </select>
      <button className="convert-button" onClick={handleClick}>
        Convert
      </button>
    </div>
  );
}

export default App;
