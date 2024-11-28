import { useContext, useEffect } from "react";
import { UserContext } from "../../../../context/UserContext";
import { AuthContext } from "../../../../context/AuthContext";
import { ProjectContext } from "../../../../context/ProjectContext";
import { LuMail } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { LuArchive } from "react-icons/lu";
import { GoGlobe } from "react-icons/go";
import { Link } from "react-router-dom";
import { RiUserFollowLine } from "react-icons/ri";
import Name from "./Name";
import FollowsLikes from "./FollowsLikes";

import glowStyle from "../../../../styles/Button.module.scss";

const Avatar = () => {
  const { user, loading } = useContext(UserContext);
  const { token } = useContext(AuthContext);
  const { userProjects, fetchUserProjects } = useContext(ProjectContext);

  useEffect(() => {
    if (token && user) fetchUserProjects();
  }, []);

  const projectNumber = userProjects.length;

  return (
    <div className="flex justify-center mt-6">
      {loading ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
        <div className="flex flex-col">
          <Name />
          <div className="flex gap-2 items-center mt-10">
            <LuMail size={20} color="white" />
            <p className="text-white">{user.email}</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <LuMapPin size={20} color="white" />
            <p className="text-white">
              {user.location ? user.location : "Location"}
            </p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <GoGlobe size={20} color="white" />
            <p className="text-cyan-400">
              {user.website ? user.website : "Website"}
            </p>
          </div>
          <div className="flex gap-2 items-center mt-6">
            <LuArchive size={20} color="white" />
            <p className="text-white">Total Projects:</p>
            <span className="text-white">{projectNumber}</span>
          </div>

          <FollowsLikes />

          <Link
            className={`flex gap-2 items-center mt-6 self-end py-1.5 px-4 rounded-md ${glowStyle.glow}`}
          >
            <RiUserFollowLine size={20} color="white" />
            <span className="text-white">Follow</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Avatar;
