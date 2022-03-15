let fs = require("fs");

//1. SYNCHRONOUS
// console.log("before");
// let hexa = fs.readFileSync("f1.txt");
// let content = hexa + "";
// console.log(content);
// console.log("after");

//output
// before
// i am f1
// after

//2.CALLBACK -> async (doesn't wait for anyone)
// console.log("before");
// fs.readFile("f1.txt", function (err, hexa) {
//   let content = hexa + "";
//   console.log(content);
// });
// console.log("after");

//output
// before
// after
// i am f1

//3. PROMISES and ASYNC-AWAIT

// 1. callback based fn alternative promise based -> code better way
// 2. these fn provide (env/Lib/Node) they give you token
// 3. if you want to get value oyt of tokjen them you have to use await
// 4. to use await you have to put it in async fn
// 5. agar isme kahin bhi humne await lagaya to aapka fn, fn stack se udd jayega
console.log("before");
async function fn() {
  console.log("in fn before fs promises");
  let token = fs.promises.readFile("f1.txt");
  console.log("in fn before await");
  let hexa = await token;
  console.log("in fn after await");
  let content = hexa + "";
  console.log(content);
}
fn();
console.log("after");

//output
// before
// in fn before fs promises
// in fn before await
// after
// in fn after await
// i am f1
