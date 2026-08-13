function StudentCard({ name, rollNo, course }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Roll No: {rollNo}</p>
      <p>Course: {course}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Student Details</h1>

      <StudentCard
        name="Rahul"
        rollNo="101"
        course="MERN Full Stack"
      />

      <StudentCard
        name="Priya"
        rollNo="102"
        course="MERN Full Stack"
      />

      <StudentCard
        name="Aman"
        rollNo="103"
        course="MERN Full Stack"
      />
    </div>
  );
}

export default App;
