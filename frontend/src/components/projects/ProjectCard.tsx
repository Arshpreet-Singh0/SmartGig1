import { Dot } from "lucide-react";
import { Button } from "../button/Button";

const ProjectCard = ({ project }: any) => {
  const hoursAgo = (timeString: string): number => {
    const pastTime = new Date(timeString);
    const currentTime = new Date();
    const diffInMilliseconds = currentTime.getTime() - pastTime.getTime();

    const diffInHours = diffInMilliseconds / 3600000;
    return Math.floor(diffInHours);
  };
  return (
    <div className="flex w-[75%] mx-auto border border-gray-700 p-6 rounded-lg my-5 pb-10 text-white">
        <div className="w-[80%]">
            <div className="flex justify-between">
                <div className="flex items-center">
                <img
                    src="https://avatar.iran.liara.run/public"
                    alt=""
                    className="h-11"
                />
                <div className="ml-3">
                    <h1 className="text-lg font-semibold">
                    {project.title}
                    </h1>
                    <p className="flex text-gray-400 text-sm">
                    Posted by {project?.User?.name} <Dot className="text-sm" />{" "}
                    {hoursAgo(project?.createdAt)} hour ago
                    </p>
                </div>
                </div>
            </div>
            <div className="mt-2">
                <p className="text-gray-400 text-md">{project.description}</p>
            </div>
            <div className="mt-4">
                <div className="flex items-center mt-2">
                    {
                        project?.skillsRequired
                        ?.map((skill: any) => (
                            <div className="bg-[#F5F5F5] text-gray-600 px-4 py-1 rounded-full mr-2 text-sm">
                                {skill}
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
        <div className="flex-1 flex justify-center">
            
            <div>
                <p className="text-black-100 font-bold">&#8377;  {project.budget}</p>
                <p className="text-sm text-gray-500">Fixed Price</p>

                <Button text="Place Bid" variant="secondary" className="mt-10"/>

            </div>
        
        </div>
    </div>
  );
};

export default ProjectCard;
