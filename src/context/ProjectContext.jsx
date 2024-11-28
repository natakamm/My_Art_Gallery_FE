import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { UserContext } from "./UserContext";
import { useAlert } from "./AlertContext";

export const ProjectContext = createContext();

export default function ProjectContextProvider({ children }) {
  const [projects, setProjects] = useState(); //all projects
  const [userProjects, setUserProjects] = useState([]); //all user projects
  const [foreignUserProjects, setForeignUserProjects] = useState([]); //all foreign users projects
  const [currentProject, setCurrentProject] = useState({});
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favError, setFavError] = useState(false);
  const [message, setMessage] = useState("");
  const { token } = useContext(AuthContext);
  const URL_BASE = "https://my-art-gallery-be.onrender.com/";

  const { showAlert } = useAlert();

  const fetchAllProjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${URL_BASE}project/all-projects`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to fetch projects.");
        setLoading(false);
        return;
      }

      setProjects(data);
    } catch (error) {
      setError(error.message || "An error occurred while fetching projects.");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserProjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${URL_BASE}project/your-projects`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        setLoading(false);
        return;
      }

      setUserProjects(data);
    } catch (error) {
      setError(
        error.message || "An error occurred while fetching user projects."
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchProjectDetails = async (projectId) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${URL_BASE}project/all-projects/${projectId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        setLoading(false);
        return;
      }

      setCurrentProject(data);
    } catch (error) {
      setError(
        error.message || "An error occurred while fetching user projects."
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchUserProjectDetails = async (projectId) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${URL_BASE}project/your-projects/${projectId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        setLoading(false);
        return;
      }

      setCurrentProject(data);
    } catch (error) {
      setError(
        error.message || "An error occurred while fetching user project."
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchProjectsOfOneUser = async (userId) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${URL_BASE}/all-projects/user/${userId}`, {
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        setLoading(false);
        return;
      }
      setForeignUserProjects(data);
    } catch (error) {
      setError(
        error.message || "An error occurred while fetching user projects."
      );
    } finally {
      setLoading(false);
    }
  };

  const createNewProject = async (title, description, images, mainImage) => {
    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    images.forEach((image) => formData.append("images", image));
    formData.append("mainImage", mainImage);
    try {
      const res = await fetch(`${URL_BASE}project/create`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        setLoading(false);
        return;
      }

      setUserProjects((prev) => [...prev, data.project]);
      setProjects((prev) => [...prev, data.project]);
      setMessage("New project successfully created.");
    } catch (error) {
      setError(
        error.message || "An error occurred while fetching user projects."
      );
    } finally {
      setLoading(false);
    }
  };

  //updateProjectTitleAndDescription

  //updateProjectMainImage

  //addImagesToProjectGallery

  //removeImagesFromProjectGallery

  //deleteProject

  //likeProject
  const likeProject = async (projectId) => {
    setFavError(null);
    try {
      const res = await fetch(`${URL_BASE}project/like/${projectId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        setLoading(false);
        showAlert(data.message || "Unable to like project.", "error");
        return;
      }

      setUser((prevUser) => ({
        ...prevUser,
        favorites: [...prevUser.favorites, { _id: projectId }],
      }));
      showAlert(
        data.message || "A project was added to your favorites.",
        "success"
      );
    } catch (error) {
      showAlert(
        error.message ||
          "There was an error while adding this project to your favorites.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  //unlikeProject
  const unlikeProject = async (projectId) => {
    setFavError(null);
    try {
      const res = await fetch(`${URL_BASE}project/unlike/${projectId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        showAlert(data.message || "Unable to unlike project.", "error");
        return;
      }

      setUser((prevUser) => ({
        ...prevUser,
        favorites: prevUser.favorites.filter(
          (favorite) => favorite._id !== projectId
        ),
      }));

      showAlert("Project was removed from your favorites.", "success");
    } catch (error) {
      showAlert(
        error.message || "There was an error while removing this project.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        fetchAllProjects,
        fetchUserProjects,
        fetchProjectDetails,
        fetchUserProjectDetails,
        fetchProjectsOfOneUser,
        foreignUserProjects,
        createNewProject,
        likeProject,
        unlikeProject,
        userProjects,
        projects,
        currentProject,
        message,
        error,
        favError,
        setFavError,
        loading,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
