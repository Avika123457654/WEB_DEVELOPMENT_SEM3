function App() {
  const message = "Welcome to React";

  return (
    <div>
      <h1>App Component</h1>

      <Middle message={message} />
    </div>
  );
}

function Middle({ message }) {
  return (
    <div>
      <h2>Middle Component</h2>

      <Child message={message} />
    </div>
  );
}

function Child({ message }) {
  return (
    <div>
      <h3>Child Component</h3>

      <p>{message}</p>
    </div>
  );
}

export default App;
