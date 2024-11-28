import Project_Card from "./Project_Card";
import { useContext, useEffect } from "react";
import { ProjectContext } from "../../../../context/ProjectContext";
import SkeletonGrid from "../../../shared/SkeletonGrid";

const Artworks_Gallery = () => {
  const { fetchAllProjects, projects, loading } = useContext(ProjectContext);

  // Fetch all projects on mount and reset any errors
  useEffect(() => {
    fetchAllProjects();
  }, []);

  return (
    <div className="flex justify-center items-center">
      {loading ? (
        <SkeletonGrid count={8} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10">
          {projects?.map((project) => (
            <div key={project._id} className="flex justify-center items-center">
              <Project_Card project={project} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Artworks_Gallery;
