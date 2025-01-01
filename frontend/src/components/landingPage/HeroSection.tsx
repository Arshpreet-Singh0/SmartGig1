import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-[70%] h-[30rem] mx-auto px-5 py-16 text-white mb-10">
        <div className="w-1/2 px-10">
            <div>
              <h1 className="text-6xl font-bold">Connect with Top <span className="text-[#6366F1]">Freelancers</span> & Businesses</h1>
              <p className="mt-5 text-gray-400 text-lg">Find expert freelancers and quality projects in our trusted <br /> marketplace. Start collaborating today!</p>
              <div className="flex gap-10 mt-8">
                <Button text="Hire Talent" variant="secondary" className="py-4 px-8"/>
                <Button text="Find Work" variant="outline" className="py-4 px-8" onClick={()=>navigate("/projects")}/>
              </div>
            </div>
        </div>
        <div className="flex-1 flex justify-center items-center px-10">
          <div className="flex justify-center items-center h-full w-full rounded-lg bg-[#DDDDDD]">
              <h1 className="text-5xl text-gray-400 font-semibold">Platform Preview</h1>
          </div>
        </div>
    </div>
  );
};

export default HeroSection;
