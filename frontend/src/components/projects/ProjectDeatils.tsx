import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ProjectDetails = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);

  const { projectId } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/project/project/${projectId}`);
        setProject(res?.data?.project);
      } catch (error) {
        console.error("Error fetching project details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [projectId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-600">Project not found!</p>
      </div>
    );
  }

  return (
    <div className="w-[90%] md:w-[80%] mx-auto mt-10">
      <div className="rounded-lg p-6 bg-gray-800 text-white shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border border-gray-700 p-6 rounded-lg mb-5">
          <div className="w-full md:w-[75%]">
            <div className="flex items-center">
              <img
                src={project?.avatar || "https://avatar.iran.liara.run/public"}
                alt="Project Owner"
                className="h-11 w-11 rounded-full"
              />
              <div className="ml-3">
                <h1 className="text-lg font-semibold">{project?.title}</h1>
                <p className="text-gray-400 text-sm">
                  Posted by {project?.User?.name || "Unknown"} 
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-300">{project?.description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project?.skillsRequired?.map((skill: string, index: number) => (
                <div
                  key={index}
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center mt-4 md:mt-0">
            <p className="text-xl font-bold text-green-400">&#8377; {project?.budget}</p>
            <p className="text-sm text-gray-400">Fixed Price</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
