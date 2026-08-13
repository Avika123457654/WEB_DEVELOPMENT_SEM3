import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Food Menu</h1>
      <p>Welcome to our food menu.</p>
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <h1>Pizza</h1>
      <p>Delicious pizza with fresh toppings and cheese.</p>
    </div>
  );
}

function Burger() {
  return (
    <div>
      <h1>Burger</h1>
      <p>Juicy burgers served with fresh vegetables and sauce.</p>
    </div>
  );
}

function Drinks() {
  return (
    <div>
      <h1>Drinks</h1>
      <p>Refreshing cold drinks to enjoy with your meal.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/pizza">Pizza</Link> |{" "}
        <Link to="/burger">Burger</Link> |{" "}
        <Link to="/drinks">Drinks</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/drinks" element={<Drinks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
