import { useState } from "react";

function Badge({ count }) {
  return <h2>Total: {count}</h2>;
}

function App() {
  const [tasks, setTasks] = useState(["Task1", "Task2"]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>

      <Badge count={tasks.length} />

      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
