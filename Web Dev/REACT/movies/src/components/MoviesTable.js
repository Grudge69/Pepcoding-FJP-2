import React, { useEffect } from "react";

function MoviesTable() {
  const [isLoaded, setLoaded] = React.useState(true);
  const [content, setContent] = React.useState([]);
  //So, i will run only 1 time after first execution of return statement
  useEffect(() => {
    async function fetchData() {
      //fetch is inbuilt feature of browser that makes the request to get data -> promise based
      let response = await fetch(
        "https://react-backend101.herokuapp.com/movies"
      );
      response = await response.json();
      setLoaded(false);
      setContent(response);
    }
    fetchData();
  }, []);
  //data
  return (
    <div>
      {isLoaded === true ? (
        <div className="font-bold">Loading...</div>
      ) : (
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-2">#</th>
              <th className="px-2">Title</th>
              <th className="px-2">Genre</th>
              <th className="px-2">Stock</th>
              <th className="px-2">Rate</th>
            </tr>
          </thead>
          <tbody>
            {content.movies.map(function (movie, idx) {
              return (
                <tr>
                  <td className="px-2 text-center">{idx + 1}</td>
                  <td className="px-2 text-center">{movie.title}</td>
                  <td className="px-2 text-center">{movie.genre.name}</td>
                  <td className="px-2 text-center">{movie.numberInStock}</td>
                  <td className="px-2 text-center">{movie.dailyRentalRate}</td>
                  <td>
                    <button className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 mx-2 font-bold rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MoviesTable;
