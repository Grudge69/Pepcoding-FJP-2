import React, { useEffect } from "react";
import InputBox from "./InputBox";
import MoviesTable from "./MoviesTable";
import Pagination from "./Pagination";

function Movies(props) {
  let [searchText, setSearchText] = React.useState("");
  let [moviesCount, setMoviesCount] = React.useState(4);

  const [content, setContent] = React.useState([]);
  const [isLoaded, setLoaded] = React.useState(true);
  const [cPage, setCPage] = React.useState(2);

  //MOVIES TABLE GET as 2 components are using content, so better is to pass it to the parent i.e. Movies Component
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
  //**************************************************

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
        setContent={setContent}
        isLoaded={isLoaded}
        content={content}
        cPage={cPage}
      ></MoviesTable>
      <Pagination
        moviesCount={moviesCount}
        content={content}
      ></Pagination>
    </div>
  );
}

export default Movies;
