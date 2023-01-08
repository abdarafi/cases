import React, { useState } from 'react';

function App() {
  const [source, setSource] = useState('');
  const [result, setResult] = useState('');

  function handleClick() {
    // TODO convert cases
    setResult('Some result based on the source text');
  }

  return (
    <div>
      <textarea value={source} onChange={e => setSource(e.target.value)} />
      <textarea value={result} onChange={e => setResult(e.target.value)} />
      <button onClick={handleClick}>Convert</button>
    </div>
  );
}

export default App;
