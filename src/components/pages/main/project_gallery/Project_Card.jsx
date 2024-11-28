import { GoHeart, GoHeartFill } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../context/UserContext";
import { ProjectContext } from "../../../../context/ProjectContext";
import Modal from "../../../shared/Modal";

const Project_Card = ({ project }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { user } = useContext(UserContext);
  const { likeProject, unlikeProject } = useContext(ProjectContext);

  const links = [
    { url: "/login", name: "Login" },
    { url: "/signup", name: "Sign Up" },
  ];

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleLikes = () => {
    if (!user) {
      setIsModalOpen(true);
    } else if (!isFavorite) {
      likeProject(project._id);
    } else {
      unlikeProject(project._id);
    }
  };

  useEffect(() => {
    if (user && user.favorites) {
      const isInFavorites = user.favorites.some(
        (favorite) => favorite._id === project._id
      );
      setIsFavorite(isInFavorites);
    }
  }, [user, project._id]);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="bg-cover bg-center h-60 w-96 shadow-xl group"
      style={{ backgroundImage: `url(${project.mainImage})` }}
    >
      <div className="w-full h-full p-4 opacity-0 group-hover:opacity-100 duration-300 hover:bg-gradient-to-t hover:from-black hover:to-black/15 flex flex-col justify-end relative">
        <div
          className="absolute top-3 right-3 text-white cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleLikes}
        >
          {isHovered || isFavorite ? (
            <GoHeartFill size={30} />
          ) : (
            <GoHeart size={30} />
          )}
        </div>
        <h2 className="text-white font-semibold capitalize text-xl">
          {project.title}
        </h2>
        <div className="flex gap-2 items-center">
          <div className="avatar">
            <div className="w-4 rounded-full">
              <img
                src={project.user.avatar}
                alt={`${project.user.username}-profile-picture`}
              />
            </div>
          </div>
          <p className="text-white font-normal text-xs">
            {project.user.username}
          </p>
        </div>
        <p className="text-white font-normal text-sm mt-2">
          {project.description}
        </p>
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          message="Please login or create an account to like this artwork."
          header="Oops! Not Authorized"
          links={links}
        />
      )}
    </div>
  );
};

export default Project_Card;
