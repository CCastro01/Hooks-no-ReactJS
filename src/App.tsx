import { useTheme } from "./hooks";
import CurrentTheme from './components/CurrentTheme';

function App() {
  const { toggleTheme } = useTheme();

  return (
    <div>
      <h1>DevInDev</h1>

      <CurrentTheme/>

      <button onClick={toggleTheme}>Toggle</button>

    </div>
  );
}

export default App;
