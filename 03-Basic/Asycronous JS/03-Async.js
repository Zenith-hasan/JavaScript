const fs = require("fs");

fs.readFile("hello.txt", "utf-8", function (err, data) {
  console.log(data);
});


