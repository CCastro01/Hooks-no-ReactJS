import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=> {
    console.log('did mount')
  },[])

  useEffect(()=> {
    console.log('did update:', count)
  },[count])

  return (
    <div className="App">
      <h1>{count}</h1>

      {/* <button
        onClick={() =>
          setCount((oldState) => {
            return oldState + 1;
          })
        }
      >
        Increment
      </button> */}

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
