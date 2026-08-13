import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Company Home</h1>
      <p>Welcome to our company website.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>We provide quality products and services to our customers.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>

      <p>Name: Your Name</p>
      <p>Email: yourname@example.com</p>
      <p>Phone: 9876543210</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About Us</Link> |{" "}
        <Link to="/contact">Contact Us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
