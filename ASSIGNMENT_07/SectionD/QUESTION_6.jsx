const fs = require("fs");

console.log("1. Start");

fs.readFile(
  "welcome.txt",
  "utf-8",
  (error, data) => {
    if (error) {
      console.log(error);
      return;
    }

    console.log(data);
  }
);

console.log("3. End");
