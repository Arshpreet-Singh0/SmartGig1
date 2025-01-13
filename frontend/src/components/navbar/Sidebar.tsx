import {
  FileText,
  Home,
  Menu,
  MessageSquareMore,
  Plus,
  User,
  WalletCards,
} from "lucide-react";
import { useState } from "react";
import { useAppSelector } from "../../hooks/hook";

const Sidebar = () => {
  const [selected, setSlected] = useState(1);
  const { user } = useAppSelector((store) => store.auth);
  return (
    <div className="flex flex-col gap-4 bg-[#262626] w-64 h-screen sticky top-0 z-10 text-[#DBDBDB] px-6 border-r border-gray-700">
      <div className="flex items-center h-16">
        <h1 className="text-3xl font-semibold">Smart Gig</h1>
      </div>
      {user.accountType == "FREELANCER" ? (
        <>
          <div
            className={`flex items-center px-3 py-[0.75rem] rounded-lg ${
              selected == 1 ? "bg-[#404040]" : ""
            } hover:bg-[#404040]`}
            onClick={() => setSlected(1)}
          >
            <Menu className="mr-4" width={22} />
            <p className="text-sm">DashBoard</p>
          </div>
          <a href={"#projects"} className="text-sm">
            <div
              className={`flex items-center px-3 py-[0.75rem] rounded-lg ${
                selected == 2 ? "bg-[#404040]" : ""
              } hover:bg-[#404040]`}
              onClick={() => setSlected(2)}
            >
              <WalletCards className="mr-4" width={22} />
              Projects
            </div>
          </a>
          <div
            className={`flex items-center px-3 py-[0.75rem] rounded-lg ${
              selected == 3 ? "bg-[#404040]" : ""
            } hover:bg-[#404040]`}
            onClick={() => setSlected(3)}
          >
            <MessageSquareMore className="mr-4" width={22} />
            <p className="text-sm">Messages</p>
          </div>
          <a href="#Proposals" className="text-sm">
            <div
              className={`flex items-center px-3 py-[0.75rem] rounded-lg ${
                selected == 4 ? "bg-[#404040]" : ""
              } hover:bg-[#404040]`}
              onClick={() => setSlected(4)}
            >
              <FileText className="mr-4" width={22} />
              Proposals
              {/* <p className="text-sm"></p> */}
            </div>
          </a>
        </>
      ) : (
        <>
          <div
            className={`flex items-center px-3 py-[0.75rem] rounded-lg ${
              selected == 1 ? "bg-[#404040]" : ""
            } hover:bg-[#404040]`}
            onClick={() => setSlected(1)}
          >
            <Home className="mr-4" width={22} />
            <p className="text-sm">DashBoard</p>
          </div>
          <a href={"#projects"} className="text-sm">
            <div
              className={`flex items-center px-3 py-[0.75rem] rounded-lg ${
                selected == 2 ? "bg-[#404040]" : ""
              } hover:bg-[#404040]`}
              onClick={() => setSlected(2)}
            >
              <FileText className="mr-4" width={22} />
              Projects
            </div>
          </a>
          <a href={"#projects"} className="text-sm">
            <div
              className={`flex items-center px-3 py-[0.75rem] rounded-lg ${
                selected == 3 ? "bg-[#404040]" : ""
              } hover:bg-[#404040]`}
              onClick={() => setSlected(3)}
            >
              <Plus className="mr-4" width={22} />
              Post
            </div>
          </a>
          <a href={"#projects"} className="text-sm">
            <div
              className={`flex items-center px-3 py-[0.75rem] rounded-lg ${
                selected == 4 ? "bg-[#404040]" : ""
              } hover:bg-[#404040]`}
              onClick={() => setSlected(4)}
            >
              <User className="mr-4" width={22} />
              Hire
            </div>
          </a>
          <div
            className={`flex items-center px-3 py-[0.75rem] rounded-lg ${
              selected == 4 ? "bg-[#404040]" : ""
            } hover:bg-[#404040]`}
            onClick={() => setSlected(5)}
          >
            <MessageSquareMore className="mr-4" width={22} />
            <p className="text-sm">Messages</p>
          </div>
          <a href="#Proposals" className="text-sm">
            <div
              className={`flex items-center px-3 py-[0.75rem] rounded-lg ${
                selected == 5 ? "bg-[#404040]" : ""
              } hover:bg-[#404040]`}
              onClick={() => setSlected(6)}
            >
              <FileText className="mr-4" width={22} />
              Payments
              {/* <p className="text-sm"></p> */}
            </div>
          </a>
        </>
      )}
    </div>
  );
};

export default Sidebar;
