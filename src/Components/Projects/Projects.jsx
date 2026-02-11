// import ProjectItem from "./ProjectItem";

// function Projects() {
//   return (
//     <div
//       className="flex flex-col justify-center mt-44 border bg-zinc-900"
//       id="projects"
//     >
//       <h1 className="bg-gradient-to-r f5 text-transparent bg-clip-text text-3xl sm:text-5lx lg:text-4xl text-center mt-10">
//         Projects
//       </h1>
//       <p className="text-center mt-5 text-xl f5 w-5/6 m-auto ">
//         Here are some of my personal projects done either for a client or
//         personal growth/exercise
//       </p>
//       <ProjectItem />
//     </div>
//   );
// }

// export default Projects;
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <section id="projects" className="mt-28">
      {/* top divider line to separate from previous section */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white">
            Projects
          </h2>

          <p className="text-center mt-4 text-lg text-zinc-300 max-w-2xl mx-auto">
            A few projects I’ve built for clients and for personal growth.
          </p>

          <div className="mt-12">
            <ProjectItem />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
