import React from "react";
import { useLocation } from "react-router";
import Movie from "../components/Movie";

function Results() {
  // const {state} = useLocation();
  // const {results} = state || {};

  const location = useLocation();
  let results = location.state.results;
  let query = location.state.query;

  console.log(results);

  return (
    <div className="results w-full h-full py-28 ">
      <div className="results__container  w-full h-full">
        <h1 className="text-3xl font-bold text-red-600 flex justify-center items-center my-4">
          Results for: {query}
        </h1>

        {/* <div className='results__container-main flex w-full h-[550px] relative  '>

        <img className = "w-full h-full object-cover "src={`https://image.tmdb.org/t/p/original/${results[0].backdrop_path}`} alt="" />

        <div className=''>

        </div>


      </div> */}

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
