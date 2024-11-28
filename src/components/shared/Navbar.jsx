import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { AuthContext } from "../../context/AuthContext";
import { PiButterfly } from "react-icons/pi";
import Button from "./buttons/Button";
import MenuItems from "./MenuItems";
import styles from "../../styles/Navbar.module.scss";

const Navbar = () => {
  const { user, logoutUser, loading: userLoading } = useContext(UserContext);
  const { token, loading: authLoading } = useContext(AuthContext);

  const avatar = user?.avatar;

  if (authLoading || userLoading) {
    return (
      <nav
        className="flex justify-between px-3 py-3"
        aria-label="Main Navigation"
      >
        <div className="flex gap-6 items-center">
          <Link to="/" className={styles.logo_navbar} aria-label="Home">
            <PiButterfly key="top-butterfly" color="white" size={40} />
          </Link>
          <MenuItems />
        </div>
        <div className="flex-none">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className="flex justify-between px-3 py-3"
      aria-label="Main Navigation"
    >
      <div className="flex gap-6 items-center">
        <Link to="/" className={styles.logo_navbar} aria-label="Home">
          <PiButterfly key="top-butterfly" color="white" size={40} />
        </Link>
        <MenuItems />
      </div>
      <div className="flex-none gap-2">
        {token && user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded="false"
              aria-controls="user-menu"
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <button>
                <img
                  className="w-10 rounded-full"
                  alt={`${user.name}'s avatar`}
                  src={avatar}
                />
              </button>
            </div>
            <ul
              tabIndex={0}
              role="user-menu"
              id="user-menu"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/account" className="justify-between" role="menuitem">
                  Profile
                </Link>
              </li>
              <li>
                <a role="menuitem">Settings</a>
              </li>
              <li>
                <Link onClick={logoutUser} to="/" role="menuitem">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Button key="login" link="/login" text="Log In" />
            <Button key="signup" link="/signup" text="Sign Up" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
