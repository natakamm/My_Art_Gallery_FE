import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SignUpBtn from "../signup/SignUpBtn";
import Input from "../../shared/Input";
import Spinner from "../../shared/Spinner";
import { UserContext } from "../../../context/UserContext";
import styles from "../../../styles/LoginModal.module.scss";
import { PiEyeClosed, PiEye, PiButterfly } from "react-icons/pi";

const SignUpModal = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const { signUpUser, loading, error, setError } = useContext(UserContext);

  useEffect(() => {
    setError(null);
  }, [setError]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    signUpUser(username, email, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);

    setError(null);
  };

  return (
    <div
      className={`bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-4 pt-8 pb-14 w-full md:w-[400px] 2xl:w-[450px] relative rounded-2xl ${styles.loginModal}`}
    >
      <div className="flex flex-col justify-center items-center">
        <PiButterfly
          key="top-butterfly"
          color="white"
          size={40}
          className={`${styles.butterfly_modal} relative`}
        />
        <h1 className="text-white text-3xl font-medium mt-4">Welcome!</h1>
        <div className={styles.line}></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 mt-14 items-center"
      >
        <Input
          key="username-input"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Username"
          label="Username"
        />
        <Input
          key="email-input"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          label="Email"
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

        <Input
          key="confirm-password-input"
          type={isConfirmVisible ? "text" : "password"}
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          label="Confirm Password"
        >
          {isConfirmVisible ? (
            <PiEyeClosed
              size={20}
              color="white"
              onClick={() => setIsConfirmVisible(!isConfirmVisible)}
            />
          ) : (
            <PiEye
              size={20}
              color="white"
              onClick={() => setIsConfirmVisible(!isConfirmVisible)}
            />
          )}
        </Input>

        <div className="pt-6">
          <SignUpBtn loading={loading} />
        </div>
        <div className="-mt-6">
          <span className="text-sm text-white">Already have an account?</span>{" "}
          <span className="text-sm text-white underline underline-offset-2">
            <Link to="/login">Log In here</Link>
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

export default SignUpModal;
