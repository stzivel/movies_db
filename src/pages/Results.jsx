import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Movie from "../components/Movie";
import requests from "../Request";

function Results() {

  const [results, setResults] = useState([]);
  const location = useLocation();
 
  let searchInput = location.state.searchInput;

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
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [searchInput]);

  

  return (
    <div className="results w-full h-full py-28 ">
      <div className="results__container  w-full h-full">
        <h1 className="text-3xl font-bold text-red-600 flex justify-center items-center my-4">
          Results for: {searchInput}
        </h1>

        <div className="results__content relative flex  flex-wrap items-center  justify-center">
          {results.map((result, id) => (
            <Movie movie={result} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Results;
