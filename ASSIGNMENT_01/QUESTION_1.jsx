import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter</h1>

      <h2>{count}</h2>

      <button onClick={decrease} disabled={count === 0}>
        Decrease
      </button>

      <button onClick={increase} disabled={count === 10}>
        Increase
      </button>

      {count === 0 && <p>Minimum limit reached!</p>}
      {count === 10 && <p>Maximum limit reached!</p>}
    </div>
  );
}

export default Counter;
