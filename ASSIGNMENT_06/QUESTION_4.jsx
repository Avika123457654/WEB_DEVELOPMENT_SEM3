import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increase = useCallback(() => {
    setCount((currentCount) => currentCount + step);
  }, [step]);

  return (
    <div>
      <h1>Counter with Step</h1>

      <h2>Count: {count}</h2>

      <h2>Step: {step}</h2>

      <button onClick={increase}>
        Increase
      </button>

      <button onClick={() => setStep(step + 1)}>
        Increase Step
      </button>

      <button onClick={() => setStep(Math.max(1, step - 1))}>
        Decrease Step
      </button>
    </div>
  );
}

export default App;
