import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function Main() {

  AOS.init();

  const [movies, setmovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];


  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((result) => {
        setmovies(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const truncatestring = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else return str;
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      className="w-full h-[550px] text-white "
    >
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black "></div>
        <img 
          className=" w-full h-full object-cover "
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        />
        <div className="absolute w-full top-[40%] p-4 md:p-8  ">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-3xl md:text-5xl font-bold   "
          >
            {movie?.title}
          </h1>
          <div data-aos="fade-left" className="my-4">
            <button className="border bg-white  text-black border-gray-300 py-2 px-5  ">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4 ">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm ">
            Released: {movie?.release_date}
          </p>
          <p
            data-aos="fade-right"
            className="w-full md:max-w-[70%] lg:max-w-[50&] xl:max-w-[35%] text-gray-200 "
          >
            {truncatestring(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
