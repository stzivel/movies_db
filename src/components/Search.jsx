import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import requests from "../Request";

function Search({ query }) {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(requests.requestSearch + query).then((response) => {
      setResults(response.data.results);
    });
  }, [query]);

//   return <div>{query && navigate("/results", { state: { results } })}</div>;

   return <div>{query && navigate("/results", { state: { results: results, query: query } })} </div>

}

export default Search;
