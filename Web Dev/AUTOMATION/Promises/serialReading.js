const fs = require("fs");

console.log("before");

//Synchronous
// let data = fs.readFileSync("f1.txt");
// console.log("File data -> " + data);

//Asynchronous
//order of f1 and f2 file reading is fixed as reading of f2 depends on callback of f1
fs.readFile("f1.txt", cb);

function cb(err, data) {
  if (err) {
    console.log(err.data);
  } else {
    console.log("File data -> " + data);
  }

  fs.readFile("f2.txt", cb2);
}

function cb2(err, data) {
  if (err) {
    console.log(err.data);
  } else {
    console.log("File data -> " + data);
  }
}

console.log("after");
