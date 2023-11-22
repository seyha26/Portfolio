import Contianer from "../Container";
import ProjectList from "./ProjectList";
const Projects = () => {
  return (
    <section id="projects" className="bg-white/60">
      <Contianer>
        <div>
          <h1 className="text-4xl font-bold uppercase text-[#2b7a78]">
            Projects
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
