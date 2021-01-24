import { useScreen } from "./hooks";

function App() {

  const { width } = useScreen();


  return (
    <div>
      <h1>{width}</h1>
      <h1>DevInDev</h1>
    </div>
  );
}

export default App;
