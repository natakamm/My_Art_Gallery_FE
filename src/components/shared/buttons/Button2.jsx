import { Link } from "react-router-dom";

const Button2 = ({ link, text }) => {
  return (
    <Link
      to={link}
      role="button"
      aria-label={text}
      className="px-8 py-3 w-full md:w-auto bg-white text-gray-800 text-lg rounded-xl shadow-md hover:shadow-lg hover:shadow-white/70 transition-shadow duration-300 ease-in-out transform"
    >
      <span>{text}</span>
    </Link>
  );
};

export default Button2;
