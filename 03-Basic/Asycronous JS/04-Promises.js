// A basic example of promises

const fs = require("fs");

function customReadfile() {
  return new Promise(function (resolve) {
    fs.readFile("hello.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

function onDone(data){
	console.log(data)
}

customReadfile().then(onDone)