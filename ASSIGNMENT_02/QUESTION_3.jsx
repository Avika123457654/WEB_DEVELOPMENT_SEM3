import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error(error));
  }, []);

  const filteredTodos =
    selectedUser === null
      ? todos
      : todos.filter((todo) => todo.userId === selectedUser);

  return (
    <div>
      <h1>Todos by User</h1>

      <button onClick={() => setSelectedUser(1)}>
        User 1
      </button>

      <button onClick={() => setSelectedUser(2)}>
        User 2
      </button>

      <button onClick={() => setSelectedUser(3)}>
        User 3
      </button>

      <button onClick={() => setSelectedUser(null)}>
        Show All
      </button>

      {filteredTodos.map((todo) => (
        <div key={todo.id}>
          <p>
            <strong>ID:</strong> {todo.id}
          </p>

          <p>
            <strong>Title:</strong> {todo.title}
          </p>

          <p>
            <strong>User ID:</strong> {todo.userId}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
