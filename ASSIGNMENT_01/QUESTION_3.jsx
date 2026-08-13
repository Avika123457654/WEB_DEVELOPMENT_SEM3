import { useState } from "react";

function Display({ count }) {
  return <h2>Count: {count}</h2>;
}

function Controls({ setCount }) {
  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <button onClick={decrease}>Decrease</button>

      <button onClick={increase}>Increase</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>

      <Display count={count} />

      <Controls setCount={setCount} />
    </div>
  );
}

export default App;
