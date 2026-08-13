import { memo, useCallback, useState } from "react";

const Child = memo(function Child({ handleClick }) {
  console.log("Child rendered");

  return (
    <div>
      <h2>Child Component</h2>

      <button onClick={handleClick}>
        Click Child Button
      </button>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  console.log("Parent rendered");

  return (
    <div>
      <h1>Parent Component</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>

      <Child handleClick={handleClick} />
    </div>
  );
}

export default App;
