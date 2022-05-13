import React from "react";
import InputBox from "./InputBox";
import MoviesTable from "./MoviesTable";
import Pagination from "./Pagination";

function Movies() {
  return (
    <>
      <InputBox></InputBox>
      <MoviesTable></MoviesTable>
      <Pagination></Pagination>
    </>
  );
}

export default Movies;
