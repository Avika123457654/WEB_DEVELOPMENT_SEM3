const fs = require("fs");

// Create folder
fs.mkdirSync("myProject", {
  recursive: true,
});

// Create file inside folder
fs.writeFileSync(
  "myProject/info.txt",
  "This is inside a folder"
);

// Read folder contents
const files = fs.readdirSync("myProject");

console.log("Files inside myProject:");

console.log(files);
