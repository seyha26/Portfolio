interface ProjectCarProps {
  imgUrl: string;
  title: string;
}

export const ProjectCard = ({ imgUrl, title }: ProjectCarProps) => {
  return (
    <div className="rounded-md shadow-md border-[#000] border-[5px] flex cursor-pointer justify-center items-center flex-col overflow-hidden">
      <img
        className="hover:scale-105 transition duration-300"
        src={imgUrl}
        alt={title}
      />
    </div>
  );
};
