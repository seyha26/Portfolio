import { Link } from "react-router-dom";

interface ListProps {
  link: string;
  title: string;
  className: string;
}

const List = ({ link, title, className }: ListProps) => {
  return (
    <>
      <li className="border-b border-gray-300 w-full text-center">
        <Link className={className} to={`/${link}`}>
          {title}
        </Link>
      </li>
    </>
  );
};

export default List;
