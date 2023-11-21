interface ProjectCarProps {
  imgUrl: string;
  title: string;
}

export const ProjectCard = ({ imgUrl, title }: ProjectCarProps) => {
  return (
    <div className="p-5  flex justify-center items-center flex-col">
      <div className="shadow-xl rounded md">
        <img className="rounded-md" src={imgUrl} alt={title} />
      </div>
      {/* <span className="mt-10">{title}</span> */}
    </div>
  );
};
