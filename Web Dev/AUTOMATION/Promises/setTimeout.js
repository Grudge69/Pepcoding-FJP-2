console.log("before");

//waits for 3 sec and then executes the function
setTimeout(
  function greet(greeting, name) {
    console.log(`${greeting} my name is ${name}`);
  },
  3000,
  "Hello",
  "Shubham"
); // WORKS ASYNCHRONOUSLY i.e. after console.log("before") & console.log("after")

console.log("after");
