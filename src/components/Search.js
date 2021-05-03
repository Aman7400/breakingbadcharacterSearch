import React, { useState } from "react";
import "./Search.css";

const Search = ({ getQuery }) => {
  const [search, setSearch] = useState("");

  function handleChange(params) {
    setSearch(params.target.value);
    getQuery(params.target.value);
  }

  return (
    <div className="center">
      <input
        onChange={handleChange}
        autoFocus
        placeholder="Search any character"
        id="searchBar"
        type="text"
        value={search}
      />
    </div>
  );
};

export default Search;
