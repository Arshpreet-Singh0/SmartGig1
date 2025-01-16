import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../ui/Button";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface Project {
  id: number;
  title: string;
  description: string;
  budget: number;
  duration: string; // e.g., "22 days"
  skillsRequired: string[];
  status: string;
  experienceLevel: string;
  deadline: string | null;
  assignedAt: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  freelancerId: number;
  User: {
    name: string;
    email: string;
  };
}

const ProjectDetails = () => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);

  const { projectId } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${BACKEND_URL}/api/v1/project/project/${projectId}`
        );
        setProject(res?.data?.project);
      } catch (error) {
        console.error("Error fetching project details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [projectId]);
  console.log(project);

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
        <p className="text-lg font-semibold text-gray-600">
          Project not found!
        </p>
      </div>
    );
  }

  return (
    <div className="w-[90%] md:w-[80%] mx-auto mt-10">
      <div className="text-center text-white">
        <h1 className="text-4xl font-semibold">{project.title}</h1>
        <p className="mt-2 text-gray-400 text-lg">
          Posted {daysAgo(project.createdAt)} days ago
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-10">
        <div className="p-4 rounded-lg bg-black-200 h-36 text-center">
          <h2 className="text-white text-2xl font-semibold">Budget</h2>
          <h2 className="text-[#5FA5F9] text-3xl font-semibold mt-2">
            &#8377; {project.budget}
          </h2>
          <p className="text-lg text-gray-500">Fixed Price</p>
        </div>
        <div className="p-4 rounded-lg bg-black-200 h-36 text-center">
          <h2 className="text-white text-2xl font-semibold">Timeline</h2>
          <h2 className="text-[#5FA5F9] text-3xl font-semibold mt-2">
            {project.duration}
          </h2>
          <p className="text-lg text-gray-500">Expected Duration</p>
        </div>
        <div className="p-4 rounded-lg bg-black-200 h-36 text-center">
          <h2 className="text-white text-2xl font-semibold">Proposals</h2>
          <h2 className="text-[#5FA5F9] text-3xl font-semibold mt-2">12</h2>
          <p className="text-lg text-gray-500">Submitted Bids</p>
        </div>
      </div>

      <div className="flex justify-center gap-10 mt-10">
        <Button text="Place Bid" variant="primary" className="px-9 py-3"/>
        <Button text="Chat With Client" variant="outline" className="px-9 py-3 border-none bg-[#404040] text-white"/>
      </div>

      <div className="mt-16 p-6 bg-black-200 rounded-lg text-white">
        <h3 className="text-2xl font-semibold">Project Brief</h3>

        <p className="opacity-75 mt-2">{project.description}</p>
        <div className="mt-5">
          {
            project?.skillsRequired?.map((s)=>(
              <span className="bg-[#404040] mr-2 px-2 py-1 rounded-full">{s}</span>
            ))
          }

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

const daysAgo = (date: string): number => {
  const currDate = Date.now();
  const diffInMilliseconds = currDate - new Date(date).getTime();
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  return diffInDays;
};
