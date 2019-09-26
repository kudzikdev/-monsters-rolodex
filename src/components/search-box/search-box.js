import React from "react";
import "./search-box.css";

const SearchBox = ({ placeholder, handleInputSearch }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder={placeholder}
      onChange={handleInputSearch}
    />
  );
};

export default SearchBox;
