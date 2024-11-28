import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginBtn from "./LoginBtn";
import Input from "../../shared/Input";
import Spinner from "../../shared/Spinner";
import { UserContext } from "../../../context/UserContext";
import styles from "../../../styles/LoginModal.module.scss"; // Import SCSS module
import { PiEyeClosed } from "react-icons/pi";
import { PiEye } from "react-icons/pi";
import { PiButterfly } from "react-icons/pi";

const LoginModal = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { loginUser, loading, error, setError } = useContext(UserContext);

  useEffect(() => {
    setError(null);
  }, [setError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginUser(identifier, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "identifier") setIdentifier(value);
    if (name === "password") setPassword(value);
  };

  return (
    <div
      className={`bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-4 pt-8 pb-14 md:w-[400px] 2xl:w-[450px] relative rounded-2xl ${styles.loginModal}`}
    >
      <div className="flex flex-col justify-center items-center">
        <PiButterfly
          key="top-butterfly"
          color="white"
          size={40}
          className={`${styles.butterfly_modal} ${
            loading ? styles.logo_navbar : ""
          }`}
        />

        <h1 className="text-white text-3xl font-medium mt-4">Welcome Back!</h1>
        <div className={styles.line}></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 mt-14 items-center"
      >
        <Input
          key="identifier-input"
          type="text"
          name="identifier"
          value={identifier}
          onChange={handleChange}
          placeholder="Username or Email"
          label="Username or Email"
        />

        <Input
          key="password-input"
          type={isVisible ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          label="Password"
        >
          {isVisible ? (
            <PiEyeClosed
              size={20}
              color="white"
              onClick={() => setIsVisible(!isVisible)}
            />
          ) : (
            <PiEye
              size={20}
              color="white"
              onClick={() => setIsVisible(!isVisible)}
            />
          )}
        </Input>

        <div className="pt-6">
          <LoginBtn loading={loading} />
        </div>
        <div className="-mt-6">
          <span className="text-sm text-white">Don't have an account?</span>{" "}
          <span className="text-sm text-white underline underline-offset-2">
            <Link to="/signup">Sign up here</Link>
          </span>
        </div>
      </form>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        {loading && <Spinner />}
        {error && <span className="text-white text-xs">{error}</span>}
      </div>
    </div>
  );
};

export default LoginModal;
