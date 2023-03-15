import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import requests from "../Request";

function Search({ query }) {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios.get(requests.requestSearch + query).then((response) => {
  //     setResults(response.data.results);
  //   });
  // }, [query]);

    useEffect(() => { 
      const timer = setTimeout(()=>{
        axios.get(requesst.requestSearch + query).then((response) => {
          setResults(response.data.results);
      },10000);
      return ()=>clearTimeout(timer);
    
    });
   }, [query]);



//   return <div>{query && navigate("/results", { state: { results } })}</div>;

//test

   return <div>{query && navigate("/results", { state: { results: results, query: query } })} </div>

}

export default Search;
