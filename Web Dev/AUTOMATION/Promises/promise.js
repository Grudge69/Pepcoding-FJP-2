const fs = require("fs");

console.log("before");

// fs.readFile("f1.txt", function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

let promise = fs.promises.readFile("f1.txt");

//promise -> Pending
console.log(promise);

//promise -> Fulfill(then keyword, expects a callback function which takes the data recieved after completing promise)
promise.then(function (data) {
  console.log("file 1 data -> " + data);
});

//promise -> Rejected or Unfulfilled(catch keyword, expects a callback function which takes the error encountered)
promise.catch(function (err) {
  console.log("Error -> " + err);
});

console.log("after");
