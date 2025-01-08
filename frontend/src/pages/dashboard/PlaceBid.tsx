import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { message } from "antd";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const PlaceBid = () => {
  const [project, setProject] = useState();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    proposedBudget: "",
    proposedTimeline: "",
    coverLetter: "",
  });
  const { projectId } = useParams();

  const handleChange = (e: any) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
  
  const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
    
    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/freelancer/${projectId}`, input, {
        withCredentials : true,
      });
  
      if(res?.data?.success){
        message.success(res?.data?.message);
        navigate('/dashboard');
      }
      
    } catch (error) {
      console.log(error);
      message.error(error?.response?.data?.message || "unexpected error");
    }
    
  }

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
        <form onSubmit={handleSubmit}>
          <label htmlFor="" className="text-sm">
            Your bid amount :{" "}
          </label>
          <div className="flex gap-2 items-center">
            <p className="text-2xl ">&#8377;</p>
            <div className="flex-1">
              <Input
                classname="bg-[#404040] border-gray-700 w-full mt-1"
                placeholder="Enter your bid amount"
                name="proposedBudget"
                value={input.proposedBudget}
                onChange={handleChange}
              />
            </div>
          </div>
          <p className="text-xs opacity-50 mt-2">Platform fee 10%</p>
          <div className="mt-2">
            <label htmlFor="" className="text-sm">
              Estimated Duration :{" "}
            </label>
            <Input
              classname="bg-[#404040] border-gray-700 w-full mt-1"
              placeholder="Enter estimated duration (In Days)"
              name="proposedTimeline"
              value={input.proposedTimeline}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="" className="text-sm">
              Cover Letter :{" "}
            </label>
            <textarea
              className="bg-[#404040] border-gray-700 w-full mt-4 rounded-lg p-3"
              rows={4}
              placeholder="Explain why you are best fit for this project..."
              name="coverLetter"
              value={input.coverLetter}
              onChange={handleChange}
            ></textarea>
          </div>

          <Button text="Submit" variant="primary" className="mt-5 w-32" />
        </form>
      </div>
    </div>
  );
};

export default PlaceBid;
