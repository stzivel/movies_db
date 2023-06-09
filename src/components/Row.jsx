import axios from "axios";
import React, { useState, useEffect } from "react";
import Movie from "./Movie";

function Row({ title, fetchURL, movieNumber }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      await axios.get(fetchURL).then((response) => {
        setMovies(response.data.results);
      });
    };

    getMovies();
  }, [fetchURL]);

  console.log(movies);

  const getRandomMovies = (array, num) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomMovies = getRandomMovies(movies, movieNumber);

  return (
    <div className="row p-8">
      <h1 className="text-3xl font-bold text-red-600 flex justify-center items-center my-4">
        {title}
      </h1>

      <div className="row__content relative flex  flex-wrap items-center  justify-center">
        {randomMovies.map((movie) => (
          <Movie movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Row;
