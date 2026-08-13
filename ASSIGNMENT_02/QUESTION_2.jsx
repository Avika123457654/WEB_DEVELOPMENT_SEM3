import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error(error));
  }, []);

  const firstTenTodos = todos.slice(0, 10);

  return (
    <div>
      <h1>First 10 Todos</h1>

      {firstTenTodos.map((todo) => (
        <div key={todo.id}>
          <p>
            <strong>ID:</strong> {todo.id}
          </p>

          <p>
            <strong>Title:</strong> {todo.title}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
