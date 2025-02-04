import React from "react";
import profilePic from "../img/prof2.jpg";
import Button from "./Buttons";
import resume from "../img/Resume.pdf";
function Header() {
  const scrollToContact = () => {
    event.preventDefault();
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col mt-20 w-5/6 lg:w-1/2 m-auto  items-center justify-center">
      <img src={profilePic} alt="profpic" className="w-28 h-28 rounded-full" />
      <h1 className="mt-8 lg:text-5xl md:text-4xl text-4xl text-center f2">
        Front-End Developer
      </h1>
      <h2 className="mt-7 lg:text-2xl text-xl text-center f1 lg:w-2/3 w-full md:w-4/6">
        Experienced in building fully responsive front end websites and web apps
      </h2>
      <div className="mt-10 flex flex-row item">
        <button>
          <a
            href=""
            onClick={scrollToContact}
            className="py-3 px-4 mx-3 rounded-full border hover:text-slate-950 bg-red-100 text-neutral-700 "
          >
            Get in Touch
          </a>
        </button>

        <button>
          <a
            href={resume}
            download="resume"
            className="py-3 px-4 mx-3 rounded-full border hover:text-slate-950 bg-red-100 text-neutral-700"
          >
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
}

export default Header;
