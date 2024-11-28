import { UserContext } from "../../../../context/UserContext";
import { AuthContext } from "../../../../context/AuthContext";
import { ProjectContext } from "../../../../context/ProjectContext";
import { useContext, useEffect } from "react";

const Name = () => {
  const { user, loading } = useContext(UserContext);
  const { token } = useContext(AuthContext);
  const { userProjects, fetchUserProjects } = useContext(ProjectContext);
  return (
    <>
      <h1 className="text-2xl font-bold text-white self-center">
        {user.username}
      </h1>
      <span className="text-gray-300 text-sm self-center">
        {user.pronouns ? user.pronouns : null}
      </span>
      <span className="text-gray-300 text-sm self-center mt-2">
        {user.description
          ? user.description
          : `Hi! My name is ${user.username}. Welcome to my SPACY Art profile!`}
      </span>
    </>
  );
};

export default Name;
