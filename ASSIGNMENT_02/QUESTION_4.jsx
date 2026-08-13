import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

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

  return (
    <div>
      <h1>Todo List</h1>

      {todos.map((todo) => (
        <div key={todo.id}>
          <p>
            {todo.id}. {todo.title}
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
