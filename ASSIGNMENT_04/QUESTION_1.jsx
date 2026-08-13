import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";

const students = [
  { id: 1, name: "Rahul", marks: 85 },
  { id: 2, name: "Priya", marks: 92 },
  { id: 3, name: "Aman", marks: 78 },
  { id: 4, name: "Sneha", marks: 88 },
];

function StudentList() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Student List</h1>

      {students.map((student) => (
        <div key={student.id}>
          <button onClick={() => navigate(`/student/${student.id}`)}>
            {student.name}
          </button>
        </div>
      ))}
    </div>
  );
}

function StudentDetails() {
  const { id } = useParams();

  const student = students.find(
    (student) => student.id === Number(id)
  );

  if (!student) {
    return <h2>Student not found</h2>;
  }

  return (
    <div>
      <h1>Student Details</h1>
      <p>Name: {student.name}</p>
      <p>Marks: {student.marks}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/student/:id" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
