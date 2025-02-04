import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div
      className="flex flex-col justify-center mt-44 border bg-zinc-900"
      id="projects"
    >
      <h1 className="bg-gradient-to-r f5 text-transparent bg-clip-text text-3xl sm:text-5lx lg:text-4xl text-center mt-10">
        Projects
      </h1>
      <p className="text-center mt-5 text-xl f5 w-5/6 m-auto ">
        Here are some of my personal projects done either for a client or
        personal growth/exercise
      </p>
      <ProjectItem />
    </div>
  );
}

export default Projects;
