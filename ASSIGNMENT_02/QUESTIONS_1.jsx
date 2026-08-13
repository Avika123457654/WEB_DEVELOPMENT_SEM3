import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error(error));
  }, []);

  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      <h1>Completed Todos</h1>

      {completedTodos.map((todo) => (
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
