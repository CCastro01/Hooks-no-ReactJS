import { useScreen } from "./hooks";

function App() {

  const { width, maxWidth, minWidth } = useScreen();


  return (
    <div>
      <h1>{width}</h1>
      <h1>DevInDev</h1>

      {maxWidth(520, <h2> Mobile </h2>)}
      {minWidth(520, <h2> Web </h2>)}
    </div>
  );
}

export default App;
