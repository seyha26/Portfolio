import { ProjectCard } from "./ProjectCard";
import project1 from "../../assets/images/moonlamp.png";
import project2 from "../../assets/images/one_shop.png";
import project3 from "../../assets/images/spirited-away.png";
import project4 from "../../assets/images/flower.png";
import project5 from "../../assets/images/nature.png";
import project6 from "../../assets/images/portfolio.png";
import project7 from "../../assets/images/zoemiler.png";

const ProjectList = () => {

  // const projects = [project1, project2, project3, project4, project5, project6, project7];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-7">
      <a href="https://moonlamp-e-commerce-chi.vercel.app/" target="_blank">
        <ProjectCard imgUrl={project1} title="Moonlamp" />
      </a>
      <a href="https://one-shop-website.vercel.app/" target="_blank">
        <ProjectCard imgUrl={project2} title="One Shop" />
      </a>
      <a href="/">
        <ProjectCard imgUrl={project3} title="" />
      </a>
      <a href="https://seyha26.github.io/flowershop/" target="_blank">
        <ProjectCard imgUrl={project4} title="Flower Shop" />
      </a>
      <a href="https://seyha26.github.io/nature/" target="_blank">
        <ProjectCard imgUrl={project5} title="Nature Website" />
      </a>
      <a href="https://seyha26.github.io/_portfolio/" target="_blank">
        <ProjectCard imgUrl={project6} title="Portfolio" />
      </a>
      <a href="https://seyha26.github.io/zoe_miller_portfolio/" target="_blank">
        <ProjectCard imgUrl={project7} title="Portfolio" />
      </a>
    </div>
  );
};

export default ProjectList;
