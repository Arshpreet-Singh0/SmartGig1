import Sidebar from "../navbar/Sidebar";
import Cards from "./ui/Cards";
import Nav from "./ui/Nav";
import RecentProjects from "./ui/RecentProjects";

const FreelancerDashBoard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ">
        <Nav />
        <Cards />
        <RecentProjects />
      </div>
    </div>
  )
}

export default FreelancerDashBoard;