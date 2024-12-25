import { useState } from "react";
import About from "./About";
import PerformanceStatics from "./PerformanceStatics";
import ProfileCard from "./ProfileCard";
import AllSkills from "./Skills";
import { ProfileType } from "../../types/profile";
import EditProfileModal from "./EditProfileModal";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState<ProfileType>({
    name : "Arshpreet Singh",
    rating : 4.9,
    reviews : 127,
    projectsCompleted : 156,
    successRate : 98,
    responseTime : 2,
    location : "Punjab, India",
    role : "Senior Full Stack Developer",
    imageUrl : "https://avatar.iran.liara.run/public",
    skills : [
      {
        domain: "Frontend Development",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Redux",
          "Next.js",
          "Tailwind CSS",
          "Bootstrap",
          "Material-UI",
        ],
      },
      {
        domain: "Backend Development",
        skills: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "RESTful APIs",
          "GraphQL",
          "Apollo Server",
          "Prisma",
        ],
      },
    ],
    about : "I'm a seasoned Full Stack Developer with over 8 years of experience in building scalable web applications. My expertise spans across modern frontend frameworks, backend technologies, and cloud infrastructure. I specialize in creating efficient, maintainable solutions that solve real business problems.\n\nThroughout my career, I've worked with startups and enterprise clients, helping them transform their ideas into successful digital products. I'm passionate about clean code, performance optimization, and creating exceptional user experiences.\n\nI believe in continuous learning and staying updated with the latest industry trends. When I'm not coding, I contribute to open-source projects and mentor aspiring developers.",
    languages : [
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Fluent" },
      { name: "French", level: "Intermediate" },
    ],
    education : [
      {
        institution: "University of California, Berkeley",
        degree: "Master of Computer Science",
        startYear: 2015,
        endYear: 2017,
      },
      {
        institution: "MIT",
        degree: "Bachelor of Engineering",
        startYear: 2011,
        endYear: 2015,
      },
    ],
  });
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="bg-[#F5F5F5]">
      <ProfileCard profile={profile} showModal={showModal}/>
      <PerformanceStatics profile={profile}/>
      <About profile={profile}/>
      <AllSkills profile={profile}/>
      <EditProfileModal profile={profile} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setProfile={setProfile}/>
    </div>
  );
};

export default Profile;
