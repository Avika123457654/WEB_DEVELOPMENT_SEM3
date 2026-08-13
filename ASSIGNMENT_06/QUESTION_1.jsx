import { memo, useState } from "react";

const ProfileCard = memo(function ProfileCard({ title, city }) {
  console.log("ProfileCard rendered");

  return (
    <div>
      <h2>{title}</h2>
      <p>City: {city}</p>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Profile Card</h1>

      <ProfileCard
        title="Software Developer"
        city="Delhi"
      />

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Counter
      </button>
    </div>
  );
}

export default App;
