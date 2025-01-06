import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const PlaceBid = () => {
    const [project, setProject] = useState();
    const {projectId} = useParams();

    useEffect(()=>{
        const fetchProject = async()=>{
            try {
                const res = await axios.get(`${BACKEND_URL}/api/v1/project/project/${projectId}`);
                
                setProject(res.data.project);
            } catch (error) {
                console.log(error);
                
            };
        };
        fetchProject();
    },[]);
    
  return (
    <div className="w-[80%] mx-auto text-white p-5">
        <h1 className="text-2xl font-semibold">Submit Proposal</h1>
        <p className="opacity-75 text-sm mt-1">Project : {project?.title}</p>

        <div className="grid grid-cols-3 border border-gray-700 rounded-lg mt-8">

        </div>
    </div>
  )
}

export default PlaceBid;