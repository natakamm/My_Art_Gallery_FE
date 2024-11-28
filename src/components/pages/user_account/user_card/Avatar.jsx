import { useContext, useState } from "react";
import { UserContext } from "../../../../context/UserContext";

const Avatar = () => {
  const { user, loading } = useContext(UserContext);
  const [isHovered, setIsHovered] = useState(false);

  const avatar = user ? user.avatar : null;

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="flex justify-center">
      {loading ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
        <div
          className={isHovered && `tooltip tooltip-open tooltip-right`}
          data-tip={user.status ? user.status : "Hello!"}
        >
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="w-36 rounded-full"
              alt={`${user.name}'s avatar`}
              src={avatar}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Avatar;
