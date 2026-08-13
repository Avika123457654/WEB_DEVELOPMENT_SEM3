import { useMemo, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const names = [
    "Rahul",
    "Priya",
    "Aman",
    "Sneha",
    "Rohan",
    "Anjali",
    "Arjun",
    "Neha",
  ];

  const filteredNames = useMemo(() => {
    console.log("Filtering names...");

    return names.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h1>Search Names</h1>

      <input
        type="text"
        placeholder="Search name"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>

      <h2>Filtered Names</h2>

      <ul>
        {filteredNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
