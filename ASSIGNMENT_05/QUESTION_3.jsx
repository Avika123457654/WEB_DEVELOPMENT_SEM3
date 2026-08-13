import { useReducer } from "react";

const initialState = {
  item: "",
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_ITEM":
      return {
        ...state,
        item: action.payload,
      };

    case "ADD_TO_CART":
      if (state.item.trim() === "") {
        return state;
      }

      return {
        ...state,
        cart: [...state.cart, state.item],
        item: "",
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      <input
        type="text"
        placeholder="Enter item"
        value={state.item}
        onChange={(event) =>
          dispatch({
            type: "SET_ITEM",
            payload: event.target.value,
          })
        }
      />

      <button
        onClick={() => dispatch({ type: "ADD_TO_CART" })}
      >
        Add to Cart
      </button>

      <h2>Cart Items</h2>

      <ul>
        {state.cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
