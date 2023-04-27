import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Row({ title, fetchURL, rowId }) {
  AOS.init();

  const [movies, setmovies] = useState([]);
  const [like, setlike] = useState(false);
  useEffect(() => {
    axios
      .get(fetchURL)
      .then((result) => {
        setmovies(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fetchURL]);

  return (
    <div>
      <h2 className="font-bold text-white md:text-xl p-4 ">{title}</h2>
      <div className="relative flex items-center group ">
        <MdChevronLeft
          onClick={() => {document.getElementById("slider" + rowId).scrollLeft += 500;}}
          className="bg-white left-1 absolute rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block  "
          size={30}
        />
        <div
          id={"slider" + rowId}
          className="relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          {movies?.map((e, i) => {
            return <Movie key={i} e={e} i={i} like={like} />;
          })}
        </div>
        <MdChevronRight
          onClick={() => {
            document.getElementById("slider" + rowId).scrollLeft -= 500;
          }}
          className="bg-white right-1 absolute rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block  "
          size={30}
        />
      </div>
    </div>
  );
}

export default Row;
