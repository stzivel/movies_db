import React, { useState } from "react";

function Movie({ movie }) {
  const [infoBox, setInfoBox] = useState(false);

  const handleInfoBox = () => {
    setInfoBox(true);
    console.log("info box opened");
  };

  const handleClose = () => {
    setInfoBox(false);
    console.log("Info box closed");
  };

  return (
    <div className="movie">
      {movie?.backdrop_path && (
        <div className=" row__content-movie w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
          <img
            className="w-full h-auto block"
            src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
            alt=""
          />
          <div className="row__content-movie-title absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
            <p className="white-space-normal text-xs md:text-sm font-bold flex-col flex justify-center items-center h-full text-center">
              {movie?.title}
              <button
                className="bg-red-600 px-2 py-1 font-bold border-0 rounded my-2 text-xs md:text-sm text-black"
                onClick={handleInfoBox}
              >
                Movie Info
              </button>
            </p>
          </div>

          {infoBox ? (
            <>
              <div className="row__content-movie-info justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className=" row__content-movie-info_container relative w-auto my-6 mx-auto max-w-xs sm: md:max-w-xl">
                  {/*content*/}
                  <div className=" row__content-movie-info_container-content border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black/90 outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" row__content-movie-info_container-content_header flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t bg-red-600/90">
                      <h3 className="text-2xl font-semibold">{movie?.title}</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={handleClose}
                      >
                        <span className="bg-transparent text-black  h-6 w-6 text-3xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="row__content-movie-info_container-content_body relative  p-4 md:p-6 flex-auto">
                      <h4 className="text-red-600 text-xl font-bold">
                        Overview
                      </h4>
                      <p className="my-4 text-white text-sm md:text-lg ">
                        {movie?.overview}
                      </p>

                      <h4 className="text-red-600 text-sm md:text-base font-bold">
                        Release date:
                        <span className="text-white text-sm md:text-base">
                          {" "}
                          {movie?.release_date}
                        </span>{" "}
                      </h4>
                      <h4 className="text-red-600 text-sm md:text-base font-bold">
                        Vote average:
                        <span className="text-white text-xs md:text-sm font-['Poppins'] ">
                          {" "}
                          {movie?.vote_average}
                        </span>{" "}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Movie;
