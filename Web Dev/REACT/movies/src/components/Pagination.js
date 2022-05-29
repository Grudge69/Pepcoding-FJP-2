import React from "react";

function Pagination(props) {
  let { content, moviesCount } = props;

  let pagesArr = [];
  if (content.movies) {
    //total no. of movies //no. of movies in a single page
    let noOfPages = Math.ceil(content.movies.length / moviesCount);
    for (let i = 1; i <= noOfPages; i++) {
      pagesArr.push(i);
    }
  }

  return (
    // <div>
    //   <button className="hover:bg-blue-500 border-2 px-3 py-2 rounded">
    //     1
    //   </button>
    //   <button className="hover:bg-blue-500 border-2 px-3 py-2 rounded">
    //     2
    //   </button>
    //   <button className="hover:bg-blue-500 border-2 px-3 py-2 rounded">
    //     3
    //   </button>
    // </div>
    <>
      {pagesArr.map(function (pageNumber) {
        return (
          <button
            key={pageNumber}
            className="hover:bg-blue-500 border-2 px-3 py-2 rounded"
          >
            {pageNumber}
          </button>
        );
      })}
    </>
  );
}

export default Pagination;
