import React, { useState } from "react"; //useState is a hook which lets us use state like behaviour of class components in functional components
import ReactDOM from "react-dom";
import "./index.css";
// import PrintMyNames from "./PrintMyNames";
// import Todo from "./Todo";
// import CounterClass from "./CounterClass";

// cannot change -> static
// function Counter() {
//   return (
//     <div>
//       <button>+</button>
//       <p>0</p>
//       <button>-</button>
//     </div>
//   );
// }

function CounterFn() {
  // count -> state variable define -> initial val=0
  // updatecount() -> update
  let [count, updateCount] = useState(0); //0 is initial value
  const incrementCounter = () => {
    updateCount(count + 1);
  };

  const decrementCounter = () => {
    updateCount(count - 1);
  };

  return (
    <div>
      <button onClick={incrementCounter}>+</button>
      <p>{count}</p>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
}

// READ Botton to Top
// DOM Render -> content print -> put the html in div with id = root,
ReactDOM.render(<CounterFn></CounterFn>, document.getElementById("root"));
