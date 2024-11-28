import { Link } from "react-router-dom";

const SignUpBtn = ({ loading }) => {
  return (
    <Link to="/signup">
      <button
        className={`bg-white py-2 px-3 rounded-xl text-slate-800 font-medium w-full lg:w-72 lg:self-center ${
          loading ? "opacity-50 cursor-default" : "hover:bg-slate-100"
        }`}
        type="button"
        disabled={loading}
      >
        Sign Up
      </button>
    </Link>
  );
};

export default SignUpBtn;
