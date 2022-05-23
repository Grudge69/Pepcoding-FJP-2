import React, { useState, useEffect } from "react";

function Genre(props) {
  const [isLoaded, setLoaded] = useState(true);
  const [content, setContent] = useState([]);
  const sendGenre = (e) => {
    console.log("genre : " + e.target.textContent);
    props.setGlobalGenre(e.target.textContent);
  };
  //So, i will run only 1 time after first execution of return statement
  useEffect(() => {
    async function fetchData() {
      //fetch is inbuilt feature of browser that makes the request to get data -> promise based
      let response = await fetch(
        "https://react-backend101.herokuapp.com/genres"
      );
      response = await response.json();
      setLoaded(false);
      setContent(response);
    }
    fetchData();
  }, []);
  return (
    <div className="mr-6">
      <div
        className="mr-6 border-2 w-40 text-center h-10 font-bold hover:bg-red-500"
        onClick={sendGenre}
      >
        All Genre
      </div>
      {isLoaded === true ? (
        <div className="font-bold">Loading...</div>
      ) : (
        content.genres.map(function (genre) {
          return (
            <div
              key={genre._id}
              className="mr-6 border-2 w-40 text-center h-10 font-bold hover:bg-blue-500"
              onClick={sendGenre}
            >
              {genre.name}
            </div>
          );
        })
      )}
    </div>
  );
}

export default Genre;
