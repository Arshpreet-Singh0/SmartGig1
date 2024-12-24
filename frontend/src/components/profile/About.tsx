import { Clock4, MessagesSquare, ShieldCheck } from "lucide-react";
import React, { useState } from "react";
const educationHistory = [
  {
    degree: "Master of Computer Science",
    institution: "Stanford University",
    startYear: 2015,
    endYear: 2017,
  },
  {
    degree: "Bachelor of Engineering",
    institution: "MIT",
    startYear: 2011,
    endYear: 2015,
  },
];

const About = () => {
  const [languages, setLanguages] = useState([
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Fluent" },
    { name: "French", level: "Intermediate" },
  ]);
  return (
    <div className="bg-white">
      <div className="w-[80%] mx-auto px-8 py-10">
        <h1 className="text-2xl font-bold mb-5">About</h1>

        <div className="flex gap-10 ">
          <div className="w-[70%] ">
            <div className="border border-gray-300 p-5 rounded-xl bg-[#f5f5f5]">
              <p className="text-gray-500 ">
                I'm a seasoned Full Stack Developer with over 8 years of
                experience in building scalable web applications. My expertise
                spans across modern frontend frameworks, backend technologies,
                and cloud infrastructure. I specialize in creating efficient,
                maintainable solutions that solve real business problems. <br />
                <br />
                Throughout my career, I've worked with startups and enterprise
                clients, helping them transform their ideas into successful
                digital products. I'm passionate about clean code, performance
                optimization, and creating exceptional user experiences. <br />
                <br />I believe in continuous learning and staying updated with
                the latest industry trends. When I'm not coding, I contribute to
                open-source projects and mentor aspiring developers.
              </p>
            </div>
            <div className="flex gap-10">
              <Box
                heading="Quality First"
                message="Delivering exceptional quality in every project I undertake."
                icon={<ShieldCheck className="text-blue-700 mb-2" />}
              />
              <Box
                heading="Timely Delivery"
                message="Delivering exceptional quality in every project I undertake."
                icon={<Clock4 className="text-green-600 mb-2" />}
              />
              <Box
                heading="Clear Communication"
                message="Delivering exceptional quality in every project I undertake."
                icon={<MessagesSquare className="text-purple-600 mb-2" />}
              />
            </div>
          </div>
          <div className="flex flex-col gap-10 flex-1 ">
            <div className="border border-gray-300 p-5 rounded-xl bg-[#f5f5f5]">
              <h4>Languages</h4>
              <div className="mt-5 text-gray-600 flex flex-col gap-3">
                {languages.map((language, index) => (
                  <div key={index} className="flex justify-between">
                    <p>{language.name}</p>
                    <p>{language.level}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-gray-300 p-5 rounded-xl bg-[#f5f5f5]">
                <h4>Education</h4>
              <div className="mt-5 text-gray-600 flex flex-col gap-3">
                {educationHistory.map((education, index) => (
                  <div>
                    <h4 className="text-black-100">{education.degree}</h4>
                    <p className="text-sm">{education.institution}</p>
                    <p className="text-sm text-gray-500">
                      {education.startYear} - {education.endYear}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

interface props {
  heading: string;
  message: string;
  icon: React.ReactElement;
}

const Box: React.FC<props> = ({ heading, message, icon }) => {
  return (
    <div className="rounded-xl bg-[#f5f5f5] w-1/3 p-5 border border-gray-300 mt-8">
      {icon}
      <h4 className="font-semibold text-black-100">{heading}</h4>
      <p className="text-gray-600 mt-2 text-sm">{message}</p>
    </div>
  );
};
