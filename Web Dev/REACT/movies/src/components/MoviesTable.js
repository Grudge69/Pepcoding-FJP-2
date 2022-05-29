import React from "react";

function MoviesTable(props) {
  let { content, setContent, isLoaded, cPage} = props;
  //for delete you need to make changes in the state
  const deleteMovie = (idToBeDeleted) => {
    let restOfTheMovies = content.movies.filter(
      (movie) => movie._id !== idToBeDeleted
    );
    let newContent = { movies: restOfTheMovies };
    setContent(newContent);
  };

  //cannot change state content, which is why we make a separate copy to filter it and then display it from that
  let filteredContent = [];
  //if content is fetched from api
  if (content.movies) {
    filteredContent = content.movies;
    /////////////////////////////// SEARCHING
    //if there is a request to searchText
    if (props.searchText) {
      //convert title to lowercase and filter the values which match lowercase search text
      filteredContent = content.movies.filter((movie) => {
        let lowerCaseTitle = movie.title.toLowerCase();
        let lowerCaseSearchText = props.searchText.toLowerCase();
        return lowerCaseTitle.includes(lowerCaseSearchText);
      });
    }
    //no request for searching => display entire data from api
    else {
      filteredContent = content.movies;
    }

    ////////////////////////////// GROUPING
    //filter according to genre
    if (props.cGenre) {
      filteredContent = filteredContent.filter(function (movie) {
        return movie.genre.name.trim() === props.cGenre.trim();
      });
      console.log("movies table: ", filteredContent);
    }

    //data according to curr page
    let startIdx = (cPage - 1) * props.moviesCount;
    let endIdx = startIdx + props.moviesCount;

    //FILTER according to movie count mentioned (PAGINATION)
    filteredContent = filteredContent.slice(startIdx, endIdx);
  }

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
            {filteredContent.map(function (movie, idx) {
              return (
                <tr key={movie._id}>
                  <td className="px-2 text-center">{idx + 1}</td>
                  <td className="px-2 text-center">{movie.title}</td>
                  <td className="px-2 text-center">{movie.genre.name}</td>
                  <td className="px-2 text-center">{movie.numberInStock}</td>
                  <td className="px-2 text-center">{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 mx-2 font-bold rounded"
                      onClick={() => {
                        deleteMovie(movie._id);
                      }}
                    >
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
