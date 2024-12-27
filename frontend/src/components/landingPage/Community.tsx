import { Rate } from "antd";
import { BookOpen, CircleDollarSign, MessagesSquare, Zap } from "lucide-react";
import { Button } from "../button/Button";

const Community = () => {
  return (
    <div className="text-white w-[70%] mx-auto px-14">
      <div className="flex ">
        <div className="w-1/2 p-2">
          <h1 className="text-4xl font-semibold ">
            Join Our Global Community of Freelancers
          </h1>

          <p className="mt-4 text-gray-400">
            Connect with talented professionals, share knowledge, and grow your
            network in our thriving community.
          </p>

          <div className="flex items-center mt-5">
            <div className="flex items-center relative">
              <img
                src="https://avatar.iran.liara.run/public"
                alt="icon"
                className="w-10 h-10 z-10 border-l border-black-100 rounded-full"
              />
              <img
                src="https://avatar.iran.liara.run/public"
                alt="icon"
                className="w-10 h-10 z-20 -ml-2 border-l-2 border-black-100 rounded-full"
              />
              <img
                src="https://avatar.iran.liara.run/public"
                alt="icon"
                className="w-10 h-10 z-30 -ml-2 border-l-2 border-black-100 rounded-full"
              />
            </div>
            <p className="text-gray-400 ml-4">Join 50,000+ members</p>
          </div>

          <div className="flex mt-4">
            <Rate value={5} className="text-md" allowHalf />
            <p className="text-gray-400 ml-4">4.9/5 average rating</p>
          </div>

          <div>
            <h3 className="text-lg mt-4">Community Benefits:</h3>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <p className="flex">
                <CircleDollarSign className=" text-[#6366F1] mr-2" /> Networking
                Events
              </p>
              <p className="flex">
                <BookOpen className=" text-[#6366F1] mr-2" /> Skill Workshops
              </p>
              <p className="flex">
                <MessagesSquare className=" text-[#6366F1] mr-2" /> Discussion
                Forums
              </p>
              <p className="flex">
                <Zap className=" text-[#6366F1] mr-2" /> Exclusive Resources
              </p>
            </div>
          </div>

          <div className="flex gap-10 mt-5">
            <Button
              text="Join Community"
              variant="secondary"
              className="py-3 px-6"
            />
            <Button text="Learn More" variant="outline" className="py-3 px-8" />
          </div>
        </div>

        <div className="flex-1 p-10">
          <div className="h-full w-full rounded-lg bg-[#1E1E1E] border border-gray-700 p-8 ">
            <div className="flex gap-4 ">
              <div>
                <img
                  src="https://avatar.iran.liara.run/public"
                  alt=""
                  className="h-12 w-12 rounded-full"
                />
              </div>
              <div>
                <h3>Latest Community Activity</h3>
                <p className="text-gray-400">Active discussions and events</p>
              </div>
            </div>
            <div className="border border-gray-700 p-4 rounded-lg mt-5">
              <div className="flex items-center gap-4">
                <span className="bg-[#292951] text-[#6366F1] px-2 py-1 rounded text-sm">
                  Event
                </span>
                <p className="text-gray-400">Tomorrow, 2:00 PM</p>
              </div>
              <h3 className="px-1 mt-2">Freelancing Best Practices Workshop</h3>
              <p className="text-gray-400 text-sm px-1">Join us for tips on growing your freelance business</p>
            </div>
            <div className="border border-gray-700 p-4 rounded-lg mt-5">
              <div className="flex items-center gap-4">
                <span className="bg-[#292951] text-[#6366F1] px-2 py-1 rounded text-sm">
                  Discusion
                </span>
                <p className="text-gray-400">
                Active Now</p>
              </div>
              <h3 className="px-1 mt-2">Client Communication Strategies</h3>
              <p className="text-gray-400 text-sm px-1">Share your experiences and learn from others</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16"></div>
    </div>
  );
};

export default Community;
