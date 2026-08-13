import { useState } from "react";

function LikeCount({ likes }) {
  return <h2>Likes: {likes}</h2>;
}

function LikeButton({ handleLike }) {
  return (
    <button onClick={handleLike}>
      Like 👍
    </button>
  );
}

function App() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes((likes) => likes + 1);
  };

  return (
    <div>
      <h1>Like Button</h1>

      <LikeCount likes={likes} />

      <LikeButton handleLike={handleLike} />
    </div>
  );
}

export default App;
