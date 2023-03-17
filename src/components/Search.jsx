import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import requests from "../Request";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const search = async () => {
      try {
        await axios
          .get(requests.requestSearch + searchInput)
          .then((response) => {
            setResults(response.data.results);
          });
      } catch (error) {
        console.log(error);
      }
    };

    if (searchInput) {
      const timer = setTimeout(() => {
        search();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [searchInput]);

  const searchMovies = (searchValue) => {
    setSearchInput(searchValue);
  };

  console.log(results);

  return (
    <div>
      <input
        onChange={(e) => searchMovies(e.target.value)}
        className="p-2 w-[180px] sm:w-[240px] md:w-[300px] lg:w-[360px]  my-2 bg-gray-700 rouded text-white text-sm md:text-lg"
        type="search"
        placeholder="Search"
        autoComplete="search"
      />

      {searchInput &&
        navigate("/results", {
          state: { results: results, searchInput: searchInput },
        })}
    </div>
  );
}

export default Search;
