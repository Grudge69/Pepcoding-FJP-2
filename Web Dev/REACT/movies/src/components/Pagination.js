import React from "react";

function Pagination(props) {
  //total no. of movies //no. of movies in a single page
  return (
    <div>
      <button className="hover:bg-blue-500 border-2 px-3 py-2 rounded">
        1
      </button>
      <button className="hover:bg-blue-500 border-2 px-3 py-2 rounded">
        2
      </button>
      <button className="hover:bg-blue-500 border-2 px-3 py-2 rounded">
        3
      </button>
    </div>
  );
}

export default Pagination;
