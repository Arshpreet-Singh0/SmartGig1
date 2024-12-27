import { Rate } from "antd";
import { ArrowRight, Clipboard, PersonStanding } from "lucide-react";

const MarketPreview = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold text-center">Marketplace Preview</h1>
      <p className="text-center mt-4 text-gray-400">
        Discover top projects and talented freelancers in our diverse
        marketplace
      </p>
      <div className="flex gap-8 w-[70%] h-[20rem] mx-auto px-14 mt-12">
        <div className="w-1/2 h-full border border-gray-700 rounded-lg">
          <FeaturedProjects />
        </div>
        <div className="flex-1 border border-gray-600 rounded-lg">
          <TopFreelancers />
        </div>
      </div>

        <h2 className="flex items-center justify-center text-[#6366F1] mt-10">
        Explore More <ArrowRight className="ml-2" width={18}/>
        </h2>

        <div className="py-16"></div>
    </div>
  );
};

export default MarketPreview;

const FeaturedProjects = () => {
  return (
    <div className="h-full w-full p-6">
      <h1 className="flex items-center text-xl">
        <Clipboard className="text-[#6366F1] mr-2" /> Featured Projects{" "}
      </h1>

      <div className="border border-gray-700 mt-5 p-3 rounded-lg">
        <div className="flex justify-between items-center">
          <h3>Mobile App Development</h3>

          <div className="bg-[#282848] px-4 py-1 rounded-full">
            <p className="text-sm">Mobile</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          Looking for experienced React Native developer
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Budget: $5000 &nbsp; Duration: 2 months
        </p>
      </div>
      <div className="border border-gray-700 mt-5 p-3 rounded-lg">
        <div className="flex justify-between items-center">
          <h3>Website Redesign</h3>

          <div className="bg-[#282848] px-4 py-1 rounded-full">
            <p className="text-sm">Web</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          E-commerce website needs modern UI/UX redesign
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Budget: $3000 &nbsp; Duration: 1 month
        </p>
      </div>
    </div>
  );
};
const TopFreelancers = () => {
  return (
    <div className="h-full w-full p-6">
      <h1 className="flex items-center text-xl">
        <PersonStanding className="text-[#6366F1] mr-2" /> Top Freelancers{" "}
      </h1>

      <div className="flex border border-gray-700 mt-5 p-3 rounded-lg">
        <div className="w-16 h-[5rem] flex justify-center items-center">
          <img
            src="https://avatar.iran.liara.run/public"
            alt=""
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div>
          <h2 className="mt-2">Sarah Johnson</h2>
          <p className="text-gray-400 text-sm">Full Stack Developer</p>
          <p className="text-sm text-gray-400">
            <Rate value={5} className="text-sm" /> &nbsp; (4.9)
          </p>
        </div>
      </div>
      <div className="flex border border-gray-700 mt-5 p-3 rounded-lg">
        <div className="w-16 h-[5rem] flex justify-center items-center">
          <img
            src="https://avatar.iran.liara.run/public"
            alt=""
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div>
          <h2 className="mt-2">Michael Chen</h2>
          <p className="text-gray-400 text-sm">UI/UX Designer</p>
          <p className="text-sm text-gray-400">
            <Rate value={5} className="text-sm" /> &nbsp; (4.8)
          </p>
        </div>
      </div>
    </div>
  );
};
