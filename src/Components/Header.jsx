// export default Header;
import React from "react";
import profilePic from "../img/prof2.jpg";
import resume from "../img/Resume.pdf";

function Header() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <img
          src={profilePic}
          alt="Profile"
          className="w-28 h-28 rounded-full border border-gray-200 shadow-sm"
        />

        <h1 className="mt-8 text-4xl md:text-5xl font-bold text-gray-900">
          Front-End Developer
        </h1>

        <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-2xl">
          Experienced in building fully responsive front-end websites and web
          apps.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="px-5 py-3 rounded-md text-sm font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </a>

          <a
            href={resume}
            download="resume"
            className="px-5 py-3 rounded-md text-sm font-semibold border border-gray-300 text-gray-800 hover:bg-gray-100 transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
