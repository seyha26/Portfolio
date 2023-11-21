import { ProjectCard } from "./ProjectCard";
import project1 from "../../assets/images/moonlamp.png";
import project2 from "../../assets/images/one_shop.png";

const ProjectList = () => {
  return (
    <div className="flex gap-5">
      <ProjectCard imgUrl={project1} title="Moonlamp" />
      <ProjectCard imgUrl={project2} title="One Shop" />
    </div>
  );
};

export default ProjectList;
