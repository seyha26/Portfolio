import Contianer from "../Contianer";
import ProjectList from "./ProjectList";
const Projects = () => {
  return (
    <section id="projects" className="bg-white">
      <Contianer>
        <div>
          <h1 className="text-4xl font-bold  uppercase">Projects</h1>
        </div>
        <div>
          <ProjectList />
        </div>
      </Contianer>
    </section>
  );
};

export default Projects;
