import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const onChange = (e) => {
    e.preventDefault();

    setSearchInput(e.target.value);
    navigate("/results", {
      state: { searchInput: searchInput },
    });
  };

  return (
    <div>
      <input
        onChange={onChange}
        value={searchInput}
        className="p-2 w-[180px] sm:w-[240px] md:w-[300px] lg:w-[360px]  my-2 bg-gray-700 rouded text-white text-sm md:text-lg"
        type="search"
        placeholder="Search"
        autoComplete="search"
      />
    </div>
  );
}

export default Search;
