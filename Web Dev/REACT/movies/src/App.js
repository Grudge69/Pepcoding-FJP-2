//"rfce" to get boiler plate code
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import New from "./components/New";
import Routing from "./Routing";
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/new">
          <New></New>
        </Route>
        <Redirect from="/" to="/home"></Redirect>
        <Route>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </>
    // <Routing></Routing>
  );
}

export default App;
