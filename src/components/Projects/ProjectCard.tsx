interface ProjectCarProps {
  imgUrl: string;
  title: string;
}

export const ProjectCard = ({ imgUrl, title }: ProjectCarProps) => {
  return (
    <div className="shadow-md flex cursor-pointer justify-center items-center flex-col overflow-hidden">
      <img
        className="hover:scale-[1.02] transition-all ease-in duration-300"
        src={imgUrl}
        alt={title}
      />
    </div>
  );
};
