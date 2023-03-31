import React, { useContext } from "react";
import Movie from "../components/Movie";
import { WatchlistContext } from "../context/WatchlistContext";

function Watchlist() {
  const { watchlist } = useContext(WatchlistContext);

  return (
    <div className="watchlist py-28 w-full h-full">
      <h1 className="text-3xl text-red-600 font-bold text-center py-4 ">
        My Watchlist
      </h1>

      <div className="watchlist__content relative flex justify-center items-center flex-wrap">
        {watchlist.map((movie) => (
          <Movie movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Watchlist;
