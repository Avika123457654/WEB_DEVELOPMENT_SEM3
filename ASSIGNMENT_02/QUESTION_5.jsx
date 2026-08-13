import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error(error));
  }, []);

  const deleteTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h1>Search and Delete Todos</h1>

      <input
        type="text"
        placeholder="Search todos..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />

      {filteredTodos.map((todo) => (
        <div key={todo.id}>
          <p>
            <strong>ID:</strong> {todo.id}
          </p>

          <p>
            <strong>Title:</strong> {todo.title}
          </p>

          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
