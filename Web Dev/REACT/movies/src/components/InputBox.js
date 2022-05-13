import React from "react";

function InputBox() {
  let [searchText, setSearchText] = React.useState("");
  let [numberOfItems, setNumberOfItems] = React.useState(0);

  const handleText = (e) => {
    setSearchText(e.target.value);
  };

  const handleCount = (e) => {
    setNumberOfItems(e.target.value);
  };

  return (
    <>
      {/* i will work on later */}
      <button className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 mx-2 rounded font-bold">
        New
      </button>
      <input
        className="border rounded py-1 px-1 mx-2 font-bold"
        type="text"
        value={searchText}
        onChange={handleText}
      ></input>
      <input
        className="border rounded py-1 px-1 mx-2 font-bold"
        type="number"
        value={numberOfItems}
        onChange={handleCount}
      ></input>
    </>
  );
}

export default InputBox;
