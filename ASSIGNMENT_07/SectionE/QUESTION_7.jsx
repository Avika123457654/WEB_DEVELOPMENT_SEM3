const fs = require("fs");

// 1. Create data folder
fs.mkdirSync("data", {
  recursive: true,
});

// 2. Create notes.txt
fs.writeFileSync(
  "data/notes.txt",
  "Note 1: Backend is fun"
);

// 3. Add more notes
fs.appendFileSync(
  "data/notes.txt",
  "\nNote 2: fs module learned"
);

fs.appendFileSync(
  "data/notes.txt",
  "\nNote 3: CRUD done"
);

// 4. Read all notes
const notes = fs.readFileSync(
  "data/notes.txt",
  "utf-8"
);

console.log("All Notes:");
console.log(notes);

// 5. Delete the complete data folder
fs.rmSync("data", {
  recursive: true,
});

console.log("Data folder deleted successfully");
