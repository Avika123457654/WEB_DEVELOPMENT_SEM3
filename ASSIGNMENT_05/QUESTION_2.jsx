import { useReducer } from "react";

const initialState = "Red";

function reducer(state, action) {
  switch (action.type) {
    case "NEXT":
      if (state === "Red") {
        return "Yellow";
      }

      if (state === "Yellow") {
        return "Green";
      }

      if (state === "Green") {
        return "Red";
      }

      return state;

    default:
      return state;
  }
}

function App() {
  const [color, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <h1>Traffic Light</h1>

      <h2>Current Color: {color}</h2>

      <button onClick={() => dispatch({ type: "NEXT" })}>
        Next
      </button>
    </div>
  );
}

export default App;
