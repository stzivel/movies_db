import React from 'react'

function Movie({movie}) {
  return (
    <div className='movie'>

<div className=" row__content-movie w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
            <img
              className="w-full h-auto block"
              src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
              alt=""
            />

            <div className="row__content-movie-title absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
              <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                {movie?.title}
              </p>
            </div>
          </div>

    </div>
  )
}

export default Movie