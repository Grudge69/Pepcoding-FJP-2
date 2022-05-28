import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";

function Home() {
  return <div>Home Page</div>;
}

function HomeSpecial() {
  return <div>Home Special</div>;
}

function Login() {
  return <div>Login</div>;
}

function PageNotFound() {
  return <div>404 Page Not Found!!!!!!!!!!!</div>;
}

function Routing() {
  return (
    <>
      <h2>Routing Example</h2>
      <div className="border-b-2 mb-4">
        <button className="bg-blue-500 mr-4">Login</button>
        <button className="bg-blue-500">Home</button>
      </div>
      <Switch>
        <Route path="/home/xyz">
          <HomeSpecial></HomeSpecial>
        </Route>
        <Route path="/home" exact>
          <Home></Home>
        </Route>
        <Redirect from="/" to="/home"></Redirect>
        <Route>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </>
  );
}

export default Routing;
