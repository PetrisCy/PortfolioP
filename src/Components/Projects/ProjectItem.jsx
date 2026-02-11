// import React from "react";
// import { ProjectsImport } from "../cards";
// function ProjectItem() {
//   return (
//     <>
//       {ProjectsImport.map((project, index) => (
//         <div
//           key={index}
//           className=" grid grid-cols-1 lg:grid-cols-2 md:w-5/6  lg:w-4/6 w-11/12 m-auto  mt-40 gap-5 mb-10  "
//         >
//           <div>
//             <img src={project.img} alt="image" className="p-1 border" />
//           </div>
//           <div>
//             <h1 className="text-2xl text-center lg:text-left f5">
//               {project.title}
//             </h1>
//             <p className="mt-5 text-neutral-400 text-center lg:text-left lg:w-5/6 f5 ">
//               {project.description}.
//             </p>
//             <p className="mt-5 text-center lg:text-left f5">Created with:</p>
//             <div className="flex gap-5 justify-center lg:justify-start">
//               {project.tools.map((tool, index) => (
//                 <h1
//                   className="mt-5 border p-2 text-center text-sm text-white bg-neutral-700 rounded-lg"
//                   key={index}
//                 >
//                   {tool}
//                 </h1>
//               ))}
//             </div>
//             <div className="flex justify-center lg:justify-start text-center lg:text-left">
//               <a
//                 href={project.link}
//                 target="_blank"
//                 className="bg-gradient-to-r from-red-100 to-red-300 py-3 px-4 mx-3 rounded-md hover:text-black mt-10"
//               >
//                 View website
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default ProjectItem;
import React from "react";
import { ProjectsImport } from "../cards";

function ProjectItem() {
  return (
    <div className="space-y-10">
      {ProjectsImport.map((project, index) => (
        <article
          key={index}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-xl border border-zinc-800 bg-zinc-900/40 p-6"
        >
          <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">
              {project.title}
            </h3>

            <p className="mt-4 text-zinc-300 leading-relaxed">
              {project.description}
            </p>

            <p className="mt-6 text-sm font-semibold text-zinc-200">
              Created with
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full border border-zinc-700 text-zinc-200 bg-zinc-900/50"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.link !== "_" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-md text-sm font-semibold bg-white text-zinc-900 hover:bg-zinc-200 transition-colors"
                >
                  View website
                </a>
              ) : (
                <span className="inline-flex items-center justify-center px-5 py-3 rounded-md text-sm font-semibold border border-zinc-700 text-zinc-300">
                  Coming soon
                </span>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProjectItem;
