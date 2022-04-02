//import
import React from "react";

//object -> props(recieves values passed to this fn)
function PrintMyName(props) {
  let { name, age } = props;
  return (
    <h1>
      I am {name} is {age} years old
    </h1>
  );
}

// print my name for 4 people, shubham, rajneesh, akash, jasbir
function PrintMyNames() {
  return (
    <>
      <PrintMyName name="shubham" age={10}></PrintMyName>
      <PrintMyName name="rajneesh" age={20}></PrintMyName>
      <PrintMyName name="sumeet" age={30}></PrintMyName>
      <PrintMyName name="jasbir" age={40}></PrintMyName>
    </>
  );
}

//export
export default PrintMyNames;
