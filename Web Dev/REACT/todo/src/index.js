// basic imports with our css file
import ReactDOM from "react-dom";
import React from "react";
import "./index.css";

//app is a part of react component
class App extends React.Component {
  //render() is a lifecycle method which runs when our app is started
  render() {
    const name = "Shubham";

    //it returns HTML mixed with JS(called JSX)
    return <h1>Hello {name}</h1>;
  }
}

//this returned value is injected in <App/> -- which can be used as a tag anywhere to place our component --
//ReactDom takes this tag injects it in "root" and then renders it
ReactDOM.render(<App />, document.getElementById("root"));
