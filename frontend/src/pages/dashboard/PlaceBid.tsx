import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Input } from "../../components/ui/Input";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const PlaceBid = () => {
  const [project, setProject] = useState();
  const { projectId } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_URL}/api/v1/project/project/${projectId}`
        );

        setProject(res.data.project);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProject();
  }, []);
  console.log(project);

  return (
    <div className="w-[80%] mx-auto text-white p-5">
      <h1 className="text-2xl font-semibold">Submit Proposal</h1>
      <p className="opacity-75 text-sm mt-1">Project : {project?.title}</p>

      <div className="grid grid-cols-3 border border-gray-700 rounded-lg mt-8 p-5 bg-black-200">
        <div className="px-5">
          <p className="opacity-70 text-sm">Client Budget : </p>
          <p className="text-lg font-bold text-green-500">
            {" "}
            &#8377; {project?.budget}
          </p>
        </div>
        <div className="px-5">
          <p className="opacity-70 text-sm">Project Duration : </p>
          <p className="text-lg font-bold">{project?.duration}</p>
        </div>
        <div className="px-5">
          <p className="opacity-70 text-sm">Experience Level</p>
          <p className="text-lg font-bold">{project?.experienceLevel}</p>
        </div>
      </div>

      <div className="mt-8 border border-gray-700 rounded-lg p-5 bg-black-200">
        <form>
          <label htmlFor="">Your bid amount : </label>
          <div className="flex gap-2 items-center">
            <p className="text-2xl ">&#8377;</p>
            <div className="flex-1">
              <Input classname="bg-[#404040] border-gray-700 w-full mt-1" />
            </div>
          </div>
          <p className="text-xs opacity-50 mt-2">Platform fee 10%</p>
        </form>
      </div>
    </div>
  );
};

export default PlaceBid;
