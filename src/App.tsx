import { useScreen, useTheme } from "./hooks";

function App() {
  const { width, maxWidth, minWidth } = useScreen();
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>{width}</h1>
      <h1>DevInDev</h1>

      <h2>{theme}</h2>

      <button onClick={toggleTheme}>Toggle</button>

      {maxWidth(520, <h2> Mobile </h2>)}
      {minWidth(520, <h2> Web </h2>)}
    </div>
  );
}

export default App;
