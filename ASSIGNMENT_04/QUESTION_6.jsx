import {
  createContext,
  useContext,
} from "react";

const ThemeContext = createContext();

function App() {
  const theme = "dark";

  return (
    <ThemeContext.Provider value={theme}>
      <h1>App Component</h1>

      <Middle />
    </ThemeContext.Provider>
  );
}

function Middle() {
  return (
    <div>
      <h2>Middle Component</h2>

      <Child />
    </div>
  );
}

function Child() {
  return (
    <div>
      <h3>Child Component</h3>

      <DeepChild />
    </div>
  );
}

function DeepChild() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export default App;
