import {
  createContext,
  useContext,
} from "react";

const MessageContext = createContext();

function App() {
  const message = "Welcome to React";

  return (
    <MessageContext.Provider value={message}>
      <h1>App Component</h1>

      <Middle />
    </MessageContext.Provider>
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
  const message = useContext(MessageContext);

  return (
    <div>
      <h3>Child Component</h3>

      <p>{message}</p>
    </div>
  );
}

export default App;
