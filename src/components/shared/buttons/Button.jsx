import { Link } from "react-router-dom";

const Button = ({ link, text }) => {
  return (
    <Link
      to={link}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white text-white"
    >
      <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {text}
      </span>
    </Link>
  );
};

export default Button;
