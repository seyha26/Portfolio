import { ProjectCard } from "./ProjectCard";
import project1 from "../../assets/images/moonlamp.png";
import project2 from "../../assets/images/one_shop.png";
import project3 from "../../assets/images/spirited-away.png";

const ProjectList = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5 mt-7">
      <a href="https://moonlamp-e-commerce-chi.vercel.app/">
        <ProjectCard imgUrl={project1} title="Moonlamp" />
      </a>
      <a href="https://one-shop-website.vercel.app/">
        <ProjectCard imgUrl={project2} title="One Shop" />
      </a>
      <a href="/">
        <ProjectCard imgUrl={project3} title="One Shop" />
      </a>
    </div>
  );
};

export default ProjectList;
