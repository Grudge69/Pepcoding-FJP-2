import React, { useEffect } from "react";

function MoviesTable() {
  const [isLoaded, setLoaded] = React.useState(true);
  const [content, setContent] = React.useState(true);
  //So, i will run only 1 time after first execution of return statement
  useEffect(() => {
    async function fetchData() {
      //fetch is inbuilt feature of browser that makes the request to get data -> promise based
      let response = await fetch(
        "https://react-backend101.herokuapp.com/movies"
      );
      response = await response.json();
      setLoaded(false);
      setContent(JSON.stringify(response));
    }
    fetchData();
  }, []);
  //data
  return (
    <div>
      {isLoaded == true ? (
        <div className="font-bold">Loading...</div>
      ) : (
        <div>{content}</div>
      )}
    </div>
  );
}

export default MoviesTable;
