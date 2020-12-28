import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{count}</h1>

      <button
        onClick={() =>
          setCount((oldState) => {
            return oldState + 1;
          })
        }
      >
        Increment
      </button>
    </div>
  );
}

export default App;
