import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Поиск..."
        value={searchText}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
