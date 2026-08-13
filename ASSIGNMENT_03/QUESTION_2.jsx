import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my portfolio website.</p>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <p>Here are some of the projects I have created.</p>
    </div>
  );
}

function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>This page contains my educational and professional details.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/projects">Projects</Link> |{" "}
        <Link to="/resume">Resume</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
