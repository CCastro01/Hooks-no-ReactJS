import { useState, useRef, useCallback } from "react";
import Teste from "./components/Teste";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = "Chris";
    }
  }, []);

  return (
    <div className="App">
      <h1>{count}</h1>

      <input ref={inputRef} />

      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;
