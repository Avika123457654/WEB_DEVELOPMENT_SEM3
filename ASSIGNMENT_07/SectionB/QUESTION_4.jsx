const fs = require("fs");

// Step 1: Write AAA
fs.writeFileSync("demo.txt", "AAA");

console.log(
  fs.readFileSync("demo.txt", "utf-8")
);

// Step 2: Write BBB
// This replaces AAA
fs.writeFileSync("demo.txt", "BBB");

console.log(
  fs.readFileSync("demo.txt", "utf-8")
);

// Step 3: Append CCC
// This keeps BBB and adds CCC
fs.appendFileSync("demo.txt", "CCC");

console.log(
  fs.readFileSync("demo.txt", "utf-8")
);
