import React from "react";
import InputBox from "./InputBox";
import MoviesTable from "./MoviesTable";
import Pagination from "./Pagination";

function Movies(props) {
  let [searchText, setSearchText] = React.useState("");
  let [moviesCount, setMoviesCount] = React.useState(9);

  const setGlobalSearchText = (searchText) => {
    console.log("movies " + searchText);
    setSearchText(searchText);
  };

  const setGlobalMoviesCount = (moviesCount) => {
    console.log("movies " + moviesCount);
    setMoviesCount(moviesCount);
  };
  console.log("movies: " + props.cGenre);
  return (
    <div>
      <InputBox
        setGlobalSearchText={setGlobalSearchText}
        setGlobalMoviesCount={setGlobalMoviesCount}
      ></InputBox>
      <MoviesTable
        searchText={searchText}
        moviesCount={moviesCount}
        cGenre={props.cGenre}
      ></MoviesTable>
      <Pagination></Pagination>
    </div>
  );
}

export default Movies;
