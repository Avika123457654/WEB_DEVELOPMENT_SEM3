 import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState(() => {
    return localStorage.getItem("savedText") || "";
  });

  useEffect(() => {
    localStorage.setItem("savedText", text);
  }, [text]);

  return (
    <div>
      <h1>Remember My Input</h1>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <p>Saved Text: {text}</p>
    </div>
  );
}

export default App;
