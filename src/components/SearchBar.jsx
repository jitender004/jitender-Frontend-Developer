import React from "react";

const SearchBar = ({ setText }) => {
  return (
    <>
      <div className="mx-6 mt-3 ">
        <h2 className="mx-16 text-lg">Search Form</h2>
        <input
          type="text"
          className="border-rose-600"
          placeholder="Type here..."
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBar;
