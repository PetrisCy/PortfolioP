import React from "react";
import nextjs from "../img/nextjs.svg";
import Js from "../img/javascript.png";
import react from "../img/react.webp";
import htmlcss from "../img/htmlcss.jpg";
import git from "../img/git.png";
import wp from "../img/wordpress.png";

function Scrolling() {
  const images = [nextjs, Js, react, htmlcss, git, wp];

  return (
    <div className="flex justify-center mt-40 max-w-screen-md m-auto ">
      <div className=" relavtive w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] ">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {images.map((item, index) => (
            <li key={index}>
              <img src={item} alt={item} className="w-14 h-14 object-contain" />
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {images.map((item, index) => (
            <li key={index}>
              <img src={item} alt={item} className="w-14 h-14 object-contain" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Scrolling;
