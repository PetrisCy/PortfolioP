import React from "react";
import { skillz } from "./cards";
import { div } from "framer-motion/client";

function Skills() {
  return (
    <div
      className=" p-3 flex flex-col justify-between items-center lg:w-full md:w-full m-auto w-full "
      id="skills"
    >
      <h1 className="text-4xl f3">Skills</h1>
      <div className="flex flex-row gap-5 p-5 flex-wrap justify-center">
        {skillz.map((item, index) => (
          <div
            key={index}
            className="border p-4 lg:w-1/6 w-1/3 flex flex-col justify-center items-center mt-10 bg-slate-100"
          >
            <p className="f3">{item.skill}</p>
            <p className="f1">{item.lvl}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
