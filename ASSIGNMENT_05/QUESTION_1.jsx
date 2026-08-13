import { useReducer } from "react";

const initialState = 1;

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;

    case "DECREASE":
      if (state === 1) {
        return state;
      }
      return state - 1;

    default:
      return state;
  }
}

function App() {
  const [quantity, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Quantity Selector</h1>

      <h2>Quantity: {quantity}</h2>

      <button onClick={() => dispatch({ type: "DECREASE" })}>
        -
      </button>

      <button onClick={() => dispatch({ type: "INCREASE" })}>
        +
      </button>

      {quantity === 1 && (
        <p>Quantity cannot go below 1.</p>
      )}
    </div>
  );
}

export default App;
