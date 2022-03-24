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

setTimeout(
  function greet(greeting, name) {
    console.log(`${greeting} my name is ${name}`);
  },
  5000,
  "Hi",
  "New Naam"
);

//TOTAL WAIT TIME IS 5sec as both set timeout aren't dependent on each other

console.log("after");
