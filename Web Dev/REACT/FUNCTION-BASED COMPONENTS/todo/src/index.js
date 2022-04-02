import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import PrintMyNames from "./PrintMyNames";
// import Todo from "./Todo";

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

class Counter extends React.Component {
  //state mein woh chij daalo jo change karni hai
  state = {
    count: 0,
  };
  //jis interaction se jo change krna hai woh change krdo state mein

  incrementCounter = () => {
    // this.state.count++; //not possible
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCounter = () => {
    // this.state.count--; //not possible
    this.setState({
      count: this.state.count - 1,
    });
  };

  //if you change the state then render function will run again with the new state variable
  render() {
    return (
      <div>
        <button onClick={this.incrementCounter}>+</button>
        <p>{this.state.count}</p>
        <button onClick={this.decrementCounter}>-</button>
      </div>
    );
  }
}

// READ Botton to Top
// DOM Render -> content print -> put the html in div with id = root,
ReactDOM.render(<Counter></Counter>, document.getElementById("root"));
