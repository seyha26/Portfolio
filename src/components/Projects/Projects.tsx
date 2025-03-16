import Contianer from "../Container";
import ProjectList from "./ProjectList";
const Projects = () => {
  return (
    <section id="projects" className="bg-white/60">
      <Contianer>
        <div className="flex">
          <h1 className="self-start relative text-4xl font-bold uppercase text-[#2b7a78] mb-18">
            Projects
            <span className="absolute w-full h-[4px] rounded-sm bg-slate-800 bottom-[-5px] left-0"></span>
          </h1>
        </div>
        <div>
          <ProjectList />
        </div>
      </Contianer>
    </section>
  );
};

export default Projects;
