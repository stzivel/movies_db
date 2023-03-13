import axios from "axios";
import React, { useState, useEffect } from "react";
import requests from "../Request";

function Header() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  

  return (
    <div className="header w-full h-[550px] text-white">

        <div className="header__background w-full h-[550px]">
        
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
      
      <img
        className="w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt="/"
      />
        </div>

        

        <div className="header__content  w-full h-full absolute flex flex-col justify-center items-start -top-[10%] p-4 md:p-8   ">

        <h1 className="text-5xl font-bold">{movie?.title}</h1>
         <p className=" mt-4 text-sm w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]  ">{movie?.overview}</p>


        </div>

       
        



      
    </div>
  );
}

export default Header;
