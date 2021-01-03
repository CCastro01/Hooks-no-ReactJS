import { useState, useMemo } from "react";
import Teste from './components/Teste'

function App() {
  const [count, setCount] = useState(0);

  const testComponent = useMemo(() => <Teste/>, []);

  return (
    <div className="App">

      {testComponent}
      <h1>{count}</h1>


      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increment
      </button>
    </div>
  );
}

export default App;