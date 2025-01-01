import axios from "axios";
import { useEffect, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const RecentProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        const fetchActiveProjects = async()=>{
            try {
                const res = await axios.get(`${BACKEND_URL}/api/v1/freelancer/assigned-project`,{
                    withCredentials : true
                });
                console.log(res);
                
            } catch (error) {
                console.log(error);
                
            }
        };
        fetchActiveProjects();
    },[])
  return (
    <div className="p-6">
        <div className="bg-black-200">
            
        </div>
    </div>
  )
}

export default RecentProjects