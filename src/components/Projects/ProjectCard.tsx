interface ProjectCarProps {
  imgUrl: string;
  title: string;
}

export const ProjectCard = ({ imgUrl, title }: ProjectCarProps) => {
  return (
    <div className="shadow-md w-auto h-[230px] rounded-md cursor-pointer justify-center items-center flex-col overflow-hidden">
      <img
        className="hover:scale-[1.02] w-full h-full transition-all ease-in duration-300"
        src={imgUrl}
        alt={title}
      />
    </div>
  );
};
