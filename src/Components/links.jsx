import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Links() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToAboutMe = () => {
    event.preventDefault();
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSkills = () => {
    event.preventDefault();
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    event.preventDefault();
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    event.preventDefault();
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className=" md:block flex justify-end hidden">
        <div className="w-full flex justify-between gap-5 font-normal">
          <a href="" className="p-3" onClick={scrollToAboutMe}>
            About
          </a>
          <a href="" className="p-3" onClick={scrollToSkills}>
            Skills
          </a>
          <a href="" className="p-3 " onClick={scrollToProjects}>
            Projects
          </a>
          <a
            href=""
            className="rounded-full bg-white p-3 font-light text-center"
            onClick={scrollToContact}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </>
  );
}

export default Links;
