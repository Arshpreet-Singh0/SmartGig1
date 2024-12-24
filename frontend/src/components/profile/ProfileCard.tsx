import { StarFilled } from "@ant-design/icons";
import { Button } from "../button/Button";
import { Clock4, MapPin } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="flex h-[17rem] bg-[#262626] p-5 ">
      <div className="flex flex-col items-center w-2/5 h-full ">
        <img
          src="https://avatar.iran.liara.run/public"
          alt=""
          className="w-28"
        />
        <h2 className="mt-4 text-2xl text-white font-semibold">John Deo</h2>
        <p className="text-gray-400 ">Senior Full Stack Developer</p>

        <h4 className="flex text-white mt-2">
          {" "}
          <StarFilled className="text-yellow-500 text-lg mr-2" /> 4.9{" "}
          <span className="ml-2 text-gray-400">(127 reviews)</span>
        </h4>
      </div>
      <div className="flex-1 h-full">
        <div className="flex justify-between gap-10">
          <div className="w-1/3 border border-gray-500 rounded-lg p-4">
            <h2 className="text-white text-xl">Project Completed</h2>
            <h1 className="text-white text-3xl font-semibold mt-2">156</h1>
          </div>
          <div className="w-1/3 border border-gray-500 rounded-lg p-4">
            <h2 className="text-white text-xl">Success Rate</h2>
            <h1 className="text-white text-3xl font-semibold mt-2">98 %</h1>
          </div>
          <div className="w-1/3 border border-gray-500 rounded-lg p-4">
            <h2 className="text-white text-xl">Response Time</h2>
            <h1 className="text-white text-3xl font-semibold mt-2">2h</h1>
          </div>
        </div>
        <div className="flex gap-10 mt-8">
          <Button text="Contact me" variant="secondary" className="text-gray-200"/>
          <Button text="Download Resume" variant="outline" className="text-gray-200"/>
          <Button text="Share Profile" variant="outline" className="text-gray-200"/>
        </div>
        <div className="flex gap-20 mt-5">
          <p className="flex text-gray-200"><MapPin className="mr-1" strokeWidth={2} width={20}/> Punjab, India</p>
          <p className="flex text-gray-200"><Clock4 className="mr-1 " strokeWidth={2} width={20}/> Available full time</p>
        
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
