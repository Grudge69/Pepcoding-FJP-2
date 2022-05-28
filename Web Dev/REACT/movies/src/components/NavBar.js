import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="p-4 bg-black mb-3">
      <h2
        className="font-medium leading-tight text-3xl text-white hover:text-yellow-200 inline-block
      mr-4 cursor-pointer"
      >
        <Link to="/home">IMDB</Link>
      </h2>
      <span className="font-medium text-blue-500 text-xl hover:text-blue-400 cursor-pointer">
        <Link to="/login">Login</Link>
      </span>
    </nav>
  );
}

export default NavBar;
