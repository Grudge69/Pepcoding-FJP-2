import React from "react";

function InputBox() {
  let [searchText, setSearchText] = React.useState("");
  let [numberOfItems, setNumberOfItems] = React.useState(4);

  const handleText = (e) => {
    setSearchText(e.target.value);
  };

  const handleCount = (e) => {
    setNumberOfItems(e.target.value);
  };

  return (
    <>
      {/* i will work on later */}
      <button>New</button>
      <input type="text" value={searchText} onChange={handleText}></input>
      <input type="number" value={numberOfItems} onChange={handleCount}></input>
    </>
  );
}

export default InputBox;
