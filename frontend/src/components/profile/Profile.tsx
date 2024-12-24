import About from "./About";
import Info from "./Info";
import PerformanceStatics from "./PerformanceStatics";
import ProfileCard from "./ProfileCard";
import AllSkills from "./Skills";

const Profile = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <ProfileCard />
      <PerformanceStatics />
      <About />
      <AllSkills />
    </div>
  );
};

export default Profile;
