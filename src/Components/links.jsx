import React from "react";

function Links() {
  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const link =
    "text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors";

  return (
    <nav className="hidden md:flex items-center gap-2">
      <a
        href="#about"
        onClick={scrollToSection("about")}
        className={`px-3 py-2 rounded-md ${link} hover:bg-gray-100`}
      >
        About
      </a>

      <a
        href="#skills"
        onClick={scrollToSection("skills")}
        className={`px-3 py-2 rounded-md ${link} hover:bg-gray-100`}
      >
        Skills
      </a>

      <a
        href="#projects"
        onClick={scrollToSection("projects")}
        className={`px-3 py-2 rounded-md ${link} hover:bg-gray-100`}
      >
        Projects
      </a>

      <a
        href="#contact"
        onClick={scrollToSection("contact")}
        className="ml-2 px-4 py-2 rounded-md text-sm font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-colors"
      >
        Get in Touch
      </a>
    </nav>
  );
}

export default Links;
