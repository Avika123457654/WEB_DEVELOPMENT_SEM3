import { useReducer } from "react";

const initialState = {
  likes: 0,
  dislikes: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "LIKE":
      return {
        ...state,
        likes: state.likes + 1,
      };

    case "DISLIKE":
      return {
        ...state,
        dislikes: state.dislikes + 1,
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
      <h1>My Post</h1>

      <button onClick={() => dispatch({ type: "LIKE" })}>
        Like 👍
      </button>

      <button
        onClick={() => dispatch({ type: "DISLIKE" })}
      >
        Dislike 👎
      </button>

      <h2>Likes: {state.likes}</h2>

      <h2>Dislikes: {state.dislikes}</h2>
    </div>
  );
}

export default App;
