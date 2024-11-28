const LoginBtn = ({ loading }) => {
  return (
    <button
      className={`bg-white py-2 px-3 rounded-xl text-slate-800 font-medium w-full lg:w-72 lg:self-center ${
        loading ? "opacity-50 cursor-default" : "hover:bg-slate-100"
      }`}
      type="submit"
      disabled={loading}
    >
      Login
    </button>
  );
};

export default LoginBtn;
