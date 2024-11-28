import { GoPerson } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../../context/UserContext";
import { AuthContext } from "../../../../context/AuthContext";
import { ProjectContext } from "../../../../context/ProjectContext";

const FollowsLikes = () => {
  const { user, loading } = useContext(UserContext);
  const { token } = useContext(AuthContext);
  const { userProjects, fetchUserProjects } = useContext(ProjectContext);

  return (
    <div className="bg-transparent shadow-md p-4 mt-6">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-base">Followers</p>
          <h2 className="font-extrabold text-4xl text-cyan-300">25K</h2>
          <p className="text-xs text-gray-500">The total amount of followers</p>
        </div>
        <GoPerson size={38} color="cyan" />
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-gray-500 text-base">Total Likes</p>
          <h2 className="font-extrabold text-4xl text-pink-500">25K</h2>
          <p className="text-xs text-gray-500">
            The total amount of likes on all projects
          </p>
        </div>
        <GoHeart size={38} color="#db2777" />
      </div>
    </div>
  );
};

export default FollowsLikes;
