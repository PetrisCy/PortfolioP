import React from "react";
import { ProjectsImport } from "../cards";
function ProjectItem() {
  return (
    <>
      {ProjectsImport.map((project, index) => (
        <div
          key={index}
          className=" grid grid-cols-1 lg:grid-cols-2 md:w-5/6  lg:w-4/6 w-11/12 m-auto  mt-40 gap-5 mb-10  "
        >
          <div>
            <img src={project.img} alt="image" className="p-1 border" />
          </div>
          <div>
            <h1 className="text-2xl text-center lg:text-left f5">
              {project.title}
            </h1>
            <p className="mt-5 text-neutral-400 text-center lg:text-left lg:w-5/6 f5 ">
              {project.description}.
            </p>
            <p className="mt-5 text-center lg:text-left f5">Created with:</p>
            <div className="flex gap-5 justify-center lg:justify-start">
              {project.tools.map((tool, index) => (
                <h1
                  className="mt-5 border p-2 text-center text-sm text-white bg-neutral-700 rounded-lg"
                  key={index}
                >
                  {tool}
                </h1>
              ))}
            </div>
            <div className="flex justify-center lg:justify-start text-center lg:text-left">
              <a
                href={project.link}
                target="_blank"
                className="bg-gradient-to-r from-red-100 to-red-300 py-3 px-4 mx-3 rounded-md hover:text-black mt-10"
              >
                View website
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectItem;
