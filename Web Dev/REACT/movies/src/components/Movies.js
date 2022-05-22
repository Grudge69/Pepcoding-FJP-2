import React from "react";
import InputBox from "./InputBox";
import MoviesTable from "./MoviesTable";
import Pagination from "./Pagination";

function Movies() {
  let [searchText, setSearchText] = React.useState("");
  const setGlobalSearchText = (searchText) => {
    console.log("movies " + searchText);
    setSearchText(searchText);
  };

  let [moviesCount, setMoviesCount] = React.useState(9);
  const setGlobalMoviesCount = (numMovies) => {
    console.log("movies " + numMovies);
    setMoviesCount(numMovies);
  };
  return (
    <div>
      <InputBox
        setGlobalSearchText={setGlobalSearchText}
        setGlobalMoviesCount={setGlobalMoviesCount}
      ></InputBox>
      <MoviesTable
        searchText={searchText}
        moviesCount={moviesCount}
      ></MoviesTable>
      <Pagination></Pagination>
    </div>
  );
}

export default Movies;
