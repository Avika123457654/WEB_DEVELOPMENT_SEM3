const fs = require("fs");

// Create the file
fs.writeFileSync(
  "tasks.txt",
  "Task 1: Learn Node"
);

// Append Task 2 on a new line
fs.appendFileSync(
  "tasks.txt",
  "\nTask 2: Learn fs module"
);

// Read the complete file
const content = fs.readFileSync(
  "tasks.txt",
  "utf-8"
);

console.log(content);
