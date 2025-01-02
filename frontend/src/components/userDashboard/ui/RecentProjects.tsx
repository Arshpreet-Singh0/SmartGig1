import axios from "axios";
import { FileText } from "lucide-react";
import { useEffect, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const RecentProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchActiveProjects = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_URL}/api/v1/freelancer/assigned-project`,
          {
            withCredentials: true,
          }
        );
        setProjects(res?.data?.projects);
      } catch (error) {
        console.log(error);
      }
    };
    fetchActiveProjects();
  }, []);
  console.log(projects);

  return (
    <div className="p-6">
      <div className="bg-black-200 rounded-lg h-[20rem]">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Recent Projects</h2>
        </div>
        <div className="p-4">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div
                className="flex px-6 py-6 bg-[#2B2B2B] rounded-lg"
                key={index}
              >
                <div className="flex justify-between w-full">
                  <div className="flex">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#404040] rounded-lg">
                      <FileText className="text-blue-600" />
                    </div>
                    <div className="flex-1 px-3">
                      <h3 className="text-white text-md">{project?.title}</h3>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                        <div className="text-green-500 rounded-lg bg-[#2D463C] px-2 py-1">
                        {project?.status}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No recent projects</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
