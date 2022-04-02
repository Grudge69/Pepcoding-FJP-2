import React from "react";

class CounterClass extends React.Component {
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

export default CounterClass;
